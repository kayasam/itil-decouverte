---
title: "02. Préparation du lab (VirtualBox + Debian 13)"
---

# 02 — Préparation du lab (VirtualBox + Debian 13) · Cours

> [!TIP] Ressources du chapitre
>
> - [Sommaire de la formation](/00-glpi/)

> [!NOTE] Objectif de cette section
> Préparer une VM VirtualBox Debian 13, relier Windows et Linux sur `192.168.3.0/24`, régler le DNS sur `1.1.1.1` et se connecter en SSH.

---

## Pourquoi deux cartes réseau ?

| Interface | Type VirtualBox | Rôle                                                         |
| --------- | --------------- | ------------------------------------------------------------ |
| `enp0s3`  | **NAT**         | Accès internet — télécharger paquets et mises à jour         |
| `enp0s8`  | **Host-Only**   | Connexion SSH depuis Windows et accès à l'interface web GLPI |

![glpi-02-reseau.svg](/00-glpi/images/glpi-02-reseau.svg)

Le réseau **Host-Only** sert aux échanges Windows ↔ GLPI. Il n'est pas la passerelle Internet de la VM : cette fonction reste assurée par la carte **NAT**. Ne pas mettre `192.168.3.254` comme passerelle de `enp0s8`.

> [!TIP] Pourquoi pas un seul réseau en bridge ?
> Le mode **bridge** dépend du réseau physique — IP qui change, réseau d'entreprise qui bloque.
> **NAT + Host-Only** est portable et fonctionne partout, sans toucher à l'infrastructure existante.

---

## Création de la VM VirtualBox

### Paramètres recommandés

| Paramètre      | Valeur                                     |
| -------------- | ------------------------------------------ |
| Nom            | `glpi-server`                              |
| Type           | Linux — Debian (64-bit)                    |
| RAM            | 2048 Mo minimum                            |
| Disque         | 20 Go (VDI, dynamique)                     |
| Carte réseau 1 | **NAT**                                    |
| Carte réseau 2 | **Host-Only** (adaptateur hôte VirtualBox) |

### Régler le réseau privé côté Windows

Dans VirtualBox, ouvrir **Fichier → Outils → Gestionnaire de réseau** (ou **Gestionnaire de réseau hôte** selon la version). Créer ou sélectionner l'adaptateur **Host-Only** utilisé par la carte réseau 2 de la VM.

| Réglage de l'adaptateur hôte | Valeur                  |
| ---------------------------- | ----------------------- |
| IPv4                         | `192.168.3.254`         |
| Masque                       | `255.255.255.0` (`/24`) |
| Serveur DHCP VirtualBox      | **Désactivé**           |

Sur Windows, vérifier l'adresse de cet adaptateur avec `ipconfig`. Si VirtualBox ne l'a pas appliquée, ouvrir les propriétés IPv4 de **VirtualBox Host-Only Ethernet Adapter** et saisir `192.168.3.254 / 255.255.255.0`. Ne pas modifier la carte physique qui donne accès à Internet.

---

## Installation de Debian 13

### Points importants pendant l'installation

> [!WARNING]
> L'installateur Debian ne configure que la **première carte réseau** (enp0s3/NAT) par défaut.
> `enp0s8` sera DOWN à la fin — c'est normal, on la configure juste après.

- **Hostname** : `glpi`
- **Domaine** : `lab.local`
- **Partitionnement** : guidé — disque entier
- **Environnement** : décocher tout sauf **"Utilitaires usuels du système"** — pas besoin d'interface graphique

---

## Activation de l'interface Host-Only (enp0s8)

### Pourquoi enp0s8 est DOWN ?

L'installateur Debian ne configure que l'interface qui a répondu au DHCP pendant l'installation (`enp0s3`).
`enp0s8` existe mais n'est pas déclarée dans la configuration réseau.

### Vérifier l'état actuel

```bash
ip a
```

- `enp0s3` → UP avec `10.0.2.15` (NAT)
- `enp0s8` → DOWN — aucune IP

### Éditer `/etc/network/interfaces`

```bash
nano /etc/network/interfaces
```

Ajouter à la fin :

```
# Réseau privé avec Windows
auto enp0s8
iface enp0s8 inet static
	address 192.168.3.10/24
```

Le fichier complet doit ressembler à :

```
source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
allow-hotplug enp0s3
iface enp0s3 inet dhcp
iface enp0s3 inet6 auto

# Réseau privé avec Windows
auto enp0s8
iface enp0s8 inet static
	address 192.168.3.10/24
```

### Appliquer et vérifier

```bash
systemctl restart networking
ip a show enp0s8
```

`enp0s8` doit être UP avec l'adresse statique `192.168.3.10`.

### Régler et vérifier le DNS

La VM utilise la carte NAT pour Internet. Le DNS traduit les noms comme `debian.org` en adresses IP ; le lab utilise `1.1.1.1`. Sur cette installation Debian gérée par `ifupdown`, installer `resolvconf`, placer ce DNS en tête, puis régénérer la configuration :

```bash
apt install -y resolvconf
printf 'nameserver 1.1.1.1\n' > /etc/resolvconf/resolv.conf.d/head
resolvconf -u
cat /etc/resolv.conf
getent hosts debian.org
```

La première ligne `nameserver` de `/etc/resolv.conf` doit être `1.1.1.1` et `getent` doit renvoyer une adresse. [Référence Debian sur la configuration DNS](https://wiki.debian.org/NetworkConfiguration).

> [!TIP] Noter l'IP de enp0s8
> Cette IP sera utilisée pour se connecter en SSH et accéder à GLPI depuis le navigateur. Comme elle est configurée en statique, elle ne dépend pas d'un bail DHCP. Vérifier qu'aucune autre VM du réseau Host-Only n'utilise déjà `192.168.3.10`.

---

## Installation et connexion SSH

```bash
apt install -y openssh-server
systemctl enable --now ssh
```

Depuis la machine hôte :

```bash
ssh utilisateur@192.168.3.10   # remplacer « utilisateur » par le compte Debian
```

> [!TIP] Travailler en SSH plutôt que dans la console VirtualBox
> Le copier-coller fonctionne en SSH — indispensable pour les commandes longues.

---

## Activer sudo pour l'utilisateur

Sur Debian, l'installateur n'ajoute **pas** l'utilisateur au groupe `sudo` si un mot de passe root a été défini. Il faut le faire manuellement.

```bash
su -                              # passer root (mot de passe root demandé)
apt install -y sudo
usermod -aG sudo stagiaire            # remplacer "dawan" par le nom d'utilisateur réel
```

> [!NOTE] Pourquoi `su -` et pas juste `su` ?
> `su -` charge l'environnement complet de root (PATH, variables…). `su` seul garde l'environnement de l'utilisateur courant — certaines commandes peuvent ne pas être trouvées.

Se déconnecter puis reconnecter SSH pour que le groupe soit pris en compte :

```bash
exit   # ou Ctrl+D
```

Vérifier :

```bash
sudo whoami   # doit répondre : root
```

---

## Récapitulatif — état attendu

```bash
ip a
```

| Interface | État | IP              | Rôle                   |
| --------- | ---- | --------------- | ---------------------- |
| `enp0s3`  | UP   | 10.0.2.15       | NAT → internet         |
| `enp0s8`  | UP   | 192.168.3.10/24 | Host-Only → SSH + GLPI |

Sur Windows, l'adaptateur Host-Only doit porter `192.168.3.254/24`. Depuis Windows, `ping 192.168.3.10` doit joindre la VM ; depuis Debian, `ping -c 3 192.168.3.254` doit joindre Windows si le pare-feu autorise les réponses ICMP.

```bash
ping -c 3 8.8.8.8          # ✓ internet accessible via enp0s3
ssh utilisateur@192.168.3.10    # ✓ SSH depuis la machine hôte
```

---

## Liens utiles

- [Télécharger Debian 13](https://www.debian.org/distrib/)
- [Documentation Oracle VirtualBox — réseau Host-Only](https://docs.oracle.com/en/virtualization/virtualbox/7.1/user/networkingdetails.html)

---
