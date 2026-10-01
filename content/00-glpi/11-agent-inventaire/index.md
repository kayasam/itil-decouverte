---
title: "11. L'agent d'inventaire"
---

# 11 — L'agent d'inventaire · Cours

> [!TIP] Ressources du chapitre
>
> - [TP du chapitre](/00-glpi/11-agent-inventaire/tp)
> - [Sommaire de la formation](/00-glpi/)

> [!NOTE] Objectif
> Installer GLPI Agent sur Windows et Linux, observer une remontée d'inventaire et comprendre le rôle d'un tag. Les actifs importés doivent rester dans **Le Fournil Doré**.

## Principe et adresse du lab

Depuis GLPI 10, la réception des inventaires est intégrée à GLPI : **aucun plugin n'est nécessaire pour l'inventaire de base** des ordinateurs. L'agent collecte les caractéristiques de l'appareil et les envoie au serveur. Le plugin **GLPI Inventory** ajoute d'autres fonctions, notamment la découverte réseau et le déploiement.

Dans ce lab, l'URL est **`http://192.168.3.10/`**. Depuis la machine à inventorier, ouvrir cette URL pour vérifier qu'elle est joignable. L'adapter si l'adresse du lab change. Dans GLPI, vérifier `Administration` → `Inventaire` → **Activer l'inventaire**.

![glpi-11-inventaire-configuration.png](/00-glpi/images/glpi-11-inventaire-configuration.png)

## Windows

### Installation avec Winget

Sur Windows 10 ou 11, ouvrir PowerShell **en administrateur** et vérifier `winget --version`.

```powershell
winget install glpi-agent --silent --custom="SERVER='http://192.168.3.10/' RUNNOW=1 TAG=LAB-WINDOWS"
```

> [!INFO] Que fait chaque paramètre ?
>
> - `winget install glpi-agent` : installe GLPI Agent.
> - `--silent` : masque l'assistant d'installation. Le résultat reste visible dans le terminal.
> - `--custom="..."` : transmet les réglages entre guillemets à l'installeur.
> - `SERVER='http://192.168.3.10/'` : enregistre l'adresse du serveur GLPI du lab.
> - `RUNNOW=1` : lance l'agent immédiatement après l'installation.
> - `TAG=LAB-WINDOWS` : ajoute le tag d'inventaire dès l'installation. Remplacer `LAB-WINDOWS` par le tag souhaité ou supprimer ce paramètre si aucun tag n'est nécessaire.

> [!TIP] Si Winget n'est pas disponible
>
> - Sur Windows Server 2022, Winget n'est pas fourni par défaut.
> - Si `winget --version` échoue, utiliser le MSI ci-dessous.

### Installation avec le MSI

Télécharger [GLPI-Agent-1.20-x64.msi](https://github.com/glpi-project/glpi-agent/releases/tag/1.20). Dans l'assistant, renseigner **Server** avec `http://192.168.3.10/`. Pour une installation silencieuse, ouvrir une invite de commandes administrateur dans le dossier du MSI :

```cmd
msiexec /i GLPI-Agent-1.20-x64.msi /quiet SERVER="http://192.168.3.10/" RUNNOW=1 TAG=LAB-WINDOWS
```

> [!NOTE] Même configuration avec le MSI
>
> - `SERVER`, `RUNNOW` et `TAG` ont le même rôle que dans la commande Winget.
> - `/quiet` masque l'assistant MSI.

### Modifier la configuration

L'installation MSI standard lit la configuration dans `HKEY_LOCAL_MACHINE\SOFTWARE\GLPI-Agent`. Ouvrir `regedit` en administrateur et modifier la valeur **server** (adresse GLPI) ou **tag**. Redémarrer ensuite le service depuis PowerShell administrateur :

```powershell
Restart-Service -Name "glpi-agent"
```

Pour relancer l'inventaire, ouvrir `http://localhost:62354` sur la machine et choisir **Force an inventory** si l'interface HTTP de l'agent est active. Sinon, selon la [documentation d'utilisation](https://glpi-agent.readthedocs.io/en/latest/usage.html), ouvrir **cmd.exe en administrateur** :

```cmd
cd "C:\Program Files\GLPI-Agent"
glpi-agent --force
```

`--force` réutilise l'adresse enregistrée dans la configuration.

## Linux

Le projet GLPI recommande l'**installeur Perl** lorsque la distribution Debian, Ubuntu ou RPM est prise en charge. Sur la machine Linux à inventorier, disposer de `perl` et `wget`, puis lancer :

```bash
wget -q https://github.com/glpi-project/glpi-agent/releases/download/1.20/glpi-agent-1.20-linux-installer.pl
sha256sum glpi-agent-1.20-linux-installer.pl
sudo perl glpi-agent-1.20-linux-installer.pl --server http://192.168.3.10/ --runnow
sudo glpi-agent --force
```

Pour cette version, comparer la somme affichée au SHA-256 publié par GLPI : `3ea682924fcf80dfec7622629df1ce08e505acbbb07090c5139c5af736b759db`. `--runnow` lance une première exécution pendant l'installation ; la dernière commande force un nouvel inventaire. Le script installe le service par défaut. Pour une autre version, relever le script et sa somme sur la [page des versions](https://github.com/glpi-project/glpi-agent/releases).

### Modifier la configuration

Le fichier principal est `/etc/glpi-agent/agent.cfg`. La documentation recommande de placer les réglages locaux dans `/etc/glpi-agent/conf.d/*.cfg` afin qu'une mise à jour ne les écrase pas. Vérifier que `include "conf.d/"` est actif dans `agent.cfg`.

Dans ce lab, le script a créé `/etc/glpi-agent/conf.d/00-install.cfg` avec l'URL du serveur : modifier **ce fichier existant** pour éviter deux valeurs `server` concurrentes.

```bash
sudo nano /etc/glpi-agent/conf.d/00-install.cfg
```

Exemple de contenu :

```ini
server = http://192.168.3.10/
tag = LAB-LINUX
```

Appliquer et vérifier :

```bash
sudo systemctl restart glpi-agent
systemctl is-active glpi-agent
sudo glpi-agent --force
```

Si `00-install.cfg` n'existe pas, créer `/etc/glpi-agent/conf.d/local.cfg` et y définir `server = ...` et éventuellement `tag = ...`. Vérifier auparavant qu'aucun autre fichier de `conf.d` ne définit ces valeurs.

## Smartphone Android

Installer [GLPI Agent de Teclib sur Google Play](https://play.google.com/store/apps/details?id=org.glpi.inventory.agent). Le smartphone doit pouvoir joindre GLPI : l'IP privée `192.168.3.10` n'est utilisable que depuis le réseau du lab ou via un accès à ce réseau.

1. Dans l'application, ouvrir **Paramètres** → **Liste des serveurs** et ajouter un serveur.
2. Renseigner `http://192.168.3.10/` et choisir le type d'actif **Phone / Téléphone**. Le type **Computer**, parfois proposé par défaut, créerait une fiche dans `Parc` → `Ordinateurs`.
3. Renseigner si besoin le tag `LAB-ANDROID`, enregistrer et lancer l'inventaire dans l'application.
4. Vérifier la fiche sous `Parc` → `Téléphones` et le contact de l'agent dans `Administration` → `Inventaire`.

La [procédure Android de GLPI](https://help.glpi-project.org/tutorials/inventory/android_inventory) décrit aussi une configuration par **QR code ou lien profond** via le plugin de configuration de l'agent Android ; ce parcours documenté prévoit également le plugin **GLPI Inventory**. Il demande une configuration côté GLPI, notamment un client OAuth avec la portée `Inventory` lorsque ce mode d'authentification est utilisé. Réserver l'accès au QR code aux personnes autorisées : il peut contenir des identifiants. La saisie manuelle des paramètres du serveur dans l'application reste possible, sous réserve que le mode d'authentification du serveur soit configuré et compatible. Le déploiement par MDM/EMM est également pris en charge.

## Le tag d'inventaire

Le **tag** est un texte envoyé avec chaque inventaire, par exemple `LAB-WINDOWS`, `LAB-LINUX` ou `LAB-ANDROID`. Il sert de critère aux règles GLPI pour affecter une entité ou un lieu. Il ne renomme pas la machine et, sans règle correspondante, ne classe pas automatiquement l'actif.

| Plateforme      | Définir le tag                                                                        |
| --------------- | ------------------------------------------------------------------------------------- |
| Windows, Winget | Ajouter `TAG=LAB-WINDOWS` dans `--custom`, avec `SERVER` et `RUNNOW`                  |
| Windows, MSI    | Champ **Tag** de l'assistant, ou valeur **tag** du registre                           |
| Linux           | `--tag LAB-LINUX` à l'installation, ou `tag = LAB-LINUX` dans le fichier `.cfg` local |
| Android         | Champ **Tag** de la configuration du serveur dans l'application                       |

Exemple : une règle pourrait lire **Agent → Tag d'inventaire = LAB-LINUX**. Dans ce parcours, ne pas créer de règle vers Boutique ou Laboratoire : vérifier que chaque machine importée se trouve dans **Le Fournil Doré**.

## Vérifier la remontée

Dans `Administration` → `Inventaire` → **Agents**, vérifier la date du dernier contact. Dans `Parc` → `Ordinateurs` ou `Parc` → `Téléphones`, rechercher le nom réel de l'appareil et ouvrir sa fiche. Les données reçues varient selon la plateforme et les autorisations accordées à l'agent.

Une fiche créée manuellement n'est pas nécessairement fusionnée avec l'inventaire : GLPI applique ses règles d'import et de liaison. Vérifier la fiche effectivement créée ou mise à jour. Le nom réel du poste Windows peut différer de `PC-REN-02` ; ne pas créer un second poste sous ce nom pour masquer le résultat.

![glpi-11-inventaire.svg](/00-glpi/images/glpi-11-inventaire.svg)

## Sources

- [Installation de GLPI Agent : Winget, MSI et Linux](https://glpi-agent.readthedocs.io/en/latest/installation/)
- [Paramètres de l'installeur Windows](https://glpi-agent.readthedocs.io/en/latest/installation/windows-command-line.html)
- [Configuration de GLPI Agent](https://glpi-agent.readthedocs.io/en/latest/configuration.html)
- [Version 1.20 et sommes SHA-256](https://github.com/glpi-project/glpi-agent/releases/tag/1.20)
- [Inventaire Android](https://help.glpi-project.org/tutorials/inventory/android_inventory)
- [Règles et tag d'inventaire](https://help.glpi-project.org/documentation/modules/administration/rules/rulesmanagement)
