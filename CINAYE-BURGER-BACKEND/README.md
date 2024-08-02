# Projet Angular / Laravel
#### By [Edem Claude KUMAZA](https://github.com/edemClaude) (2024) L3GL INFORMATIQUE Groupe2 ISI DKR

# [CINAYE BURGER](https://cinaye-burger.herokuapp.com/)


Le Restaurant [CINAYE BURGER]() fait appel à vous pour la réalisation d’une
application web de gestion des commandes.

Le Gestionnaire a la possibilité d'ajouter, modifier ou d’archiver les
**burgers** (nom, prix, image, description)
Il peut aussi lister les commandes faites par un **client**, annuler une commande d’un
**client** (nom, prénom, téléphone, adresse).

Un **client** a la possibilité à partir d’une page d’accueil de voir le
catalogue de burgers, voir les détails d’un burger, commander un burger (info commande et client sur la page)

Les fonctionnalités du gestionnaire sont accessibles après une _connexion_.

Lorsque la commande est prête, le gestionnaire change l'état de la commande à Terminer et le client va
recevoir email de notification de la facture de la commande (PDF) et un message.
Le client paye sa commande en espèce et le gestionnaire change l’état à payer.

Le **payement** (date, montant) de la commande est enregistré.
Une commande est payée une est une seule fois

Un **Gestionnaire** peut filtrer les commande par burger, par
date, par état et par client
On voudrait avoir les statiques suivantes :

#### - Les commandes en cours de la journée,
#### - Les commandes Validés de la journée,
#### - Les Recettes Journalières
#### - Les Commandes annulées du Jour

### 1. Modélisation
- Créer la Base de donnée
### 2. Réalisation du Projet Backend Laravel
- Projet Angular/ Laravel
### 3. Réalisation du Projet FrontEnd Angular
