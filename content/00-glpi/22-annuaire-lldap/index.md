---
title: "22. Authentification avec LLDAP"
---

# 22 — Se connecter à GLPI avec LLDAP

> [!NOTE] Objectif
> Ajouter un annuaire LLDAP au laboratoire, créer **Nico Robin** et **Roronoa Zoro** dans le groupe **mugiwara**, puis ouvrir GLPI 11 avec **LLDAP Fournil Doré** comme source. Claire reste la demandeuse des tickets précédents. Les nouveaux comptes GLPI restent dans l'entité racine **Le Fournil Doré**.

> [!TIP] Dans ce chapitre
>
> - [Faire l'atelier](/00-glpi/22-annuaire-lldap/tp)
> - [Revoir les profils et les utilisateurs](/00-glpi/07-profils-utilisateurs/)

## Comprendre le trajet

![glpi-22-lldap.svg](/00-glpi/images/glpi-22-lldap.svg)

**LLDAP** conserve les identités, les mots de passe et les groupes. **LDAP** est le protocole que GLPI utilise pour chercher un compte et vérifier son mot de passe. GLPI conserve ensuite sa propre fiche utilisateur, son profil et son entité. Le groupe `mugiwara` sert ici de filtre : seuls ses membres sont proposés par cette source.

Dans le lab, LLDAP tourne sur la **même VM Debian** que GLPI 11. Son interface web est accessible à `http://192.168.3.10:17170`. Le conteneur GLPI le joint sur le réseau Docker partagé avec le nom `ldap` et le port `3890`. L'adresse Windows `192.168.3.254` ne sert pas à cette communication.

| Brique                                    | Valeur                                        |
| ----------------------------------------- | --------------------------------------------- |
| LLDAP web                                 | `192.168.3.10:17170`                          |
| LDAP depuis GLPI                          | `ldap:3890` sur le réseau Docker              |
| Base de l'annuaire                        | `dc=fournil-dore,dc=fr`                       |
| Comptes                                   | `ou=people,dc=fournil-dore,dc=fr`             |
| Groupe                                    | `cn=mugiwara,ou=groups,dc=fournil-dore,dc=fr` |
| Compte de lecture GLPI                    | `glpi.bind`                                   |
| Mot de passe des comptes créés pour le TP | `a12345!`                                     |

Le nom officiel est **Nico Robin**, sans « e ». Son identifiant du TP est donc `n.robin`. Le nom complet du second personnage est **Roronoa Zoro** ; son identifiant est `z.roronoa`.

## 1. Démarrer LLDAP sur Debian

Le projet GLPI du chapitre 03 est dans `~/glpi-lab`. Le conteneur LLDAP doit partager son réseau. Sur le serveur du lab vérifié, le projet est `/home/sam/docker-compose/ldap` et partage `glpi11_default` ; sur la VM construite avec ce support, le réseau Compose est normalement `glpi-lab_default`. Vérifier son nom avec `docker network ls` avant de saisir le fichier.

```bash
mkdir -p ~/ldap-lab
cd ~/ldap-lab
printf 'LLDAP_JWT_SECRET=%s\n' "$(openssl rand -hex 32)" > .env
printf 'LLDAP_KEY_SEED=%s\n' "$(openssl rand -hex 32)" >> .env
printf 'LDAP_ADMIN_PASS=Admin12345!\n' >> .env
nano docker-compose.yml
```

```yaml
services:
  ldap:
    image: lldap/lldap:stable
    restart: unless-stopped
    ports:
      - "3890:3890"
      - "17170:17170"
    volumes:
      - lldap_data:/data
    environment:
      TZ: Europe/Paris
      LLDAP_LDAP_BASE_DN: dc=fournil-dore,dc=fr
      LLDAP_LDAP_USER_PASS: ${LDAP_ADMIN_PASS}
      LLDAP_JWT_SECRET: ${LLDAP_JWT_SECRET}
      LLDAP_KEY_SEED: ${LLDAP_KEY_SEED}
    networks:
      - default
      - glpi11

volumes:
  lldap_data:

networks:
  glpi11:
    external: true
    name: glpi-lab_default
```

Le mot de passe **initial** de l'administrateur LLDAP est plus long car cette version refuse `a12345!` dans son formulaire. Après le premier démarrage, l'outil LLDAP permet de donner aussi `a12345!` à l'administrateur. Le fichier `.env` contient également deux secrets internes de LLDAP, générés sur chaque VM.

```bash
docker compose up -d
docker compose ps
set -a
. ./.env
set +a
docker compose exec -T -e LLDAP_USER_PASSWORD='a12345!' ldap \
  /app/lldap_set_password --base-url http://127.0.0.1:17170 \
  --username admin --admin-password "$LDAP_ADMIN_PASS" \
  --bypass-password-policy
sed -i 's/^LDAP_ADMIN_PASS=.*/LDAP_ADMIN_PASS=a12345!/' .env
```

Depuis Windows, ouvrir `http://192.168.3.10:17170` et se connecter avec `admin / a12345!`. `Admin12345!` ne sert qu'au premier démarrage, avant la commande ci-dessus.

## 2. Créer le groupe et les comptes

Dans **Groups → Create a group**, créer `mugiwara`. Dans **Users → Create a user**, créer :

| User name   | Display name | First name | Last name | Mail                        |
| ----------- | ------------ | ---------- | --------- | --------------------------- |
| `n.robin`   | Nico Robin   | Nico       | Robin     | `n.robin@fournil-dore.fr`   |
| `z.roronoa` | Roronoa Zoro | Zoro       | Roronoa   | `z.roronoa@fournil-dore.fr` |

Laisser **Password** vide à la création. Le formulaire LLDAP impose au moins huit caractères, tandis que `a12345!` en compte sept. Appliquer ce mot de passe pédagogique avec l'outil livré dans le conteneur :

```bash
cd ~/ldap-lab
set -a
. ./.env
set +a
for identifiant in n.robin z.roronoa; do
  docker compose exec -T -e LLDAP_USER_PASSWORD='a12345!' ldap \
    /app/lldap_set_password --base-url http://127.0.0.1:17170 \
    --username "$identifiant" --admin-password "$LDAP_ADMIN_PASS" \
    --bypass-password-policy
done
```

Revenir dans **Groups → mugiwara**. Sélectionner successivement **Nico Robin** et **Roronoa Zoro**, puis cliquer sur **Add to group**. La liste **Members** doit contenir les deux identifiants.

![glpi11-22-lldap-mugiwara.png](/00-glpi/images/glpi11-22-lldap-mugiwara.png)

_Les deux membres du groupe dans LLDAP._

### Un compte de lecture pour GLPI

GLPI doit parcourir l'annuaire avant d'authentifier un utilisateur. Créer une fiche LLDAP supplémentaire `glpi.bind`, adresse `glpi.bind@fournil-dore.fr`, puis lui donner `a12345!` avec la même commande. Ajouter uniquement ce compte au groupe système **lldap_strict_readonly**. Ne pas l'ajouter à `mugiwara` : il ne doit pas devenir un utilisateur GLPI du TP.

```bash
docker compose exec -T -e LLDAP_USER_PASSWORD='a12345!' ldap \
  /app/lldap_set_password --base-url http://127.0.0.1:17170 \
  --username glpi.bind --admin-password "$LDAP_ADMIN_PASS" \
  --bypass-password-policy
```

## 3. Ajouter LLDAP comme source dans GLPI

Se connecter à GLPI avec **votre compte Super-Admin**. Ouvrir **Configuration → Authentification → Annuaires LDAP → Ajouter**. Renseigner :

| Champ GLPI               | Valeur                                                                          |
| ------------------------ | ------------------------------------------------------------------------------- |
| Nom                      | `LLDAP Fournil Doré`                                                            |
| Serveur par défaut       | Oui                                                                             |
| Activé                   | Oui                                                                             |
| Serveur                  | `ldap`                                                                          |
| Port                     | `3890`                                                                          |
| Filtre de connexion      | `(&(objectClass=person)(memberOf=cn=mugiwara,ou=groups,dc=fournil-dore,dc=fr))` |
| BaseDN                   | `ou=people,dc=fournil-dore,dc=fr`                                               |
| Utiliser bind ?          | Oui                                                                             |
| DN du compte             | `uid=glpi.bind,ou=people,dc=fournil-dore,dc=fr`                                 |
| Mot de passe du compte   | `a12345!`                                                                       |
| Champ de l'identifiant   | `uid`                                                                           |
| Champ de synchronisation | `uid`                                                                           |

Enregistrer, ouvrir **Tester** et vérifier **Flux TCP**, **Base DN**, **LDAP URI**, **Connexion Bind** et **Chercher**. La dernière étape doit trouver **2 entrées**, les deux membres de `mugiwara`.

![glpi11-22-test-lldap.png](/00-glpi/images/glpi11-22-test-lldap.png)

_GLPI 11 joint LLDAP et trouve les deux membres autorisés._

Le **BaseDN** indique où chercher ; le **DN du compte** indique avec quelle identité GLPI lit l'annuaire. Le filtre exclut `glpi.bind` et les autres comptes déjà présents dans LLDAP.

## 4. Se connecter avec LLDAP comme source

Se déconnecter de GLPI. Sur l'écran de connexion, choisir **Source de connexion → LLDAP Fournil Doré** puis essayer successivement :

| Identifiant | Mot de passe | Résultat                              |
| ----------- | ------------ | ------------------------------------- |
| `n.robin`   | `a12345!`    | Portail Self-Service, Le Fournil Doré |
| `z.roronoa` | `a12345!`    | Portail Self-Service, Le Fournil Doré |

![glpi11-22-source-lldap-connexion.png](/00-glpi/images/glpi11-22-source-lldap-connexion.png)

_La source LLDAP est sélectionnée avant la connexion._

Après le premier accès de chaque compte, revenir sur le compte Super-Admin en choisissant **Base interne GLPI**. Dans **Administration → Utilisateurs**, contrôler les deux fiches importées, leurs noms et leurs adresses. Elles sont dans la racine. Les mots de passe LDAP restent gérés dans LLDAP.

![glpi11-22-utilisateurs-importes.png](/00-glpi/images/glpi11-22-utilisateurs-importes.png)

_Les comptes apparaissent dans GLPI après leur première connexion._

## Méthode 2 — CLI GLPI après la connexion graphique

La commande GLPI peut **synchroniser** les fiches déjà importées. Elle ne crée ni les comptes LLDAP, ni le groupe, ni la configuration de l'annuaire :

```bash
cd ~/glpi-lab
docker compose exec -T -u www-data glpi \
  php bin/console ldap:synchronize_users \
  --ldap-server-id=1 --only-update-existing --no-interaction
```

Sur le lab vérifié, la commande a indiqué **2 utilisateurs synchronisés**, sans nouvel import. L'identifiant `1` est celui de l'annuaire de ce lab ; lire l'identifiant sur votre fiche si celui de votre VM diffère.

## Si la connexion échoue

1. **Flux TCP** échoue : vérifier le réseau Docker partagé et `ldap:3890`.
2. **Connexion Bind** échoue : vérifier `glpi.bind`, son DN et son mot de passe.
3. **Chercher** trouve 0 entrée : vérifier les adhésions à `mugiwara` et le filtre `memberOf`.
4. L'écran GLPI refuse un membre : sélectionner **LLDAP Fournil Doré** et vérifier le mot de passe appliqué par `lldap_set_password`.
5. Le compte Super-Admin ne se connecte plus : sélectionner **Base interne GLPI**.

Sources : [annuaire LDAP dans GLPI](https://help.glpi-project.org/documentation/modules/configuration/authentication/ldap), [intégration LDAP dans LLDAP](https://github.com/lldap/lldap/blob/main/README.md).

## Continuer avec ITIL

Le laboratoire GLPI est prêt. [Passer à l'introduction ITIL](/01-introduction-itil/).
