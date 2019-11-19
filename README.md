# THP - Week8 - Project2 - Faire des manipulations de DOMs avec jQuery
## François THIOUNN

### Notes & Use

> Heroku : 


## Projet : Faire des manipulations de DOMs avec jQuery
  
### 1. Introduction
Puisque tout le monde s'amuse à employer le mot startup pour désigner toute entreprise ayant un site internet, nous allons disrupter un secteur très populaire, celui des listes. Voici le pitch (faut pas trop le dire à tout le monde, faudrait surtout pas qu'on nous vole l'idée) : c'est une app où les gens pourront créer des listes de tâches, et assigner des petites tâches. Par exemple :

Conquérir le monde :
1 : Réfléchir
2 : Faire THP
3 : Coder
Avant de lever des millions, il nous faut un site internet. Ce sera le projet du jour.

### 2. Le projet
Pour aujourd'hui, nous allons te donner l'application, avec le back fonctionnel, pour que tu puisses te concentrer sur la partie JS / JQuery. Commence par cloner ce repo, bundle install et lance le seed.

Vérifie que JQuery est bien branché sur cette app puis lance le serveur. On peut passer à la suite

#### 2.1. Tabulations
Dans cette première partie du projet, tu vas ajouter un système de tabulation à la page d'accueil. Il y a actuellement 3 listes, et le seed leur a affecté chacune 3 items. Tu dois donc créer une tab où chaque liste correspondra à un onglet. Le clic sur cet onglet affichera les éléments de cette liste. Il sera possible de changer d'onglet en cliquant sur le nom de chaque liste.

Tu visualises pas du tout ce que je te demande ? Va sur cette page-là et regarde l'exemple de tab donné sous le titre "Toggleable / Dynamic Tabs"

ATTENTION : Evidemment, tu pourrais faire ce projet via d'autres librairies comme Bootstrap ou JQuery UI, mais le but de cet exercice est de t'exercer à la manipulation des DOMs via JQuery. Il est donc interdit de servir d'autre chose que des fonctions de base de jQuery. L'utilisation du Javascript de Bootstrap est interdit mais pas son CSS : n'hésite pas à mettre en page.

Quelques infos pour te guider :

N'hésite pas à rajouter des classes ou des id au fichier html.erb d'origine (app/views/home/index.html.erb) afin de plus facilement cibler les éléments que tu veux manipuler
Mets ton code JQuery dans un fichier app/assets/javascripts/tabulation.js qui doit contenir la fonction suivante afin de ne s'exécuter qu'une fois le document HTML complètement chargé :
$(document).ready(function() {
// Mets ici ton code

});
Pour afficher sous forme de tab les titre des catégories, tu peux t'inspirer des classes utilisées dans la page W3Schools qu'on a vu tout à l'heure : rajoute un tag HTML <ul class="nav nav-tabs"> qui englobe les 3 catégories et leur liste et affecte un <li> à chaque catégorie avec sa liste.
Tu bloques ? On est sympas, on a prévu des indices ! Essayes d'en utiliser le moins possible.

Indice 1 :Dans le fichier HTML, affecte une classe "category-content" à chaque liste de task en rajoutant une div qui, sous chaque catégorie, englobe la liste entière. Ensuite, en JQuery, commence par cacher ces 3 divs (je te laisse chercher l'action qui fait ça.
Indice 2 :Maintenant, ajoute à chaque titre de catégorie une classe "category-title". Et si on clique sur un élément portant cette classe, il faut que tous les "category-content" disparaîssent et que seul celui situé à côté (et qui correspond donc au title) apparaîsse. Avec ça tu as des tabs qui marchent !
Indice 3 :Tu peux aussi, si tu veux, gérer la présence d'une classe "Active" sur le "category-title" qui a été cliqué le dernier afin qu'il soit surligné. N'hésite pas aussi à rajouter des ".fadeIn(500)" ou "fadeOut(500)" qui rajoute un petit effet de transition sympa.
#### 2.2 Le minimum vital du JavaScript de front
Il est beau le site qu'on vous à donné, hein ? Non. Du coup, vous allez rendre ça plus sympa avec une UI (User Interface, ou Interface utilisateur) un peu plus sympathique, toujours sans aucun JS venant de bootstrap

##### 2.2.1 Le dropdown qui fait plaisir
Vous voyez le bel avatar, sur la droite ? Et ben ça serait vachement sympa qu'il vous donne accès avec un dropdown qui révèle les fonctionnalités de login, logout et de connexion. Faites en sorte que ce soit bien visible et facilement accessible, et que les liens soient fonctionnels ;)

Indice 1 :Dans le fichier HTML, affecte une classe "avatar" à l'avatar et une classe "dropdown-content" au menu censé s'afficher.
Indice 2 :Ensuite, en JQuery, tu codes qqch pour qu'un clique sur ".avatar" face du "toggle()" sur l'élément "dropdown-content"
##### 2.2.2 Modales de connexion/inscription
Maintenant qu'on a un joli dropdown, on va faire en sorte que chaque lien ouvre une modale permettant la connexion et l'inscription. C'est quoi une modale ? C'est une fausse pop-up qui apparaît sur ta page web : elle est générée par JS et non par l'ouverture d'une nouvelle fenêtre de navigateur. Si tu veux un exemple va sur cette page et clique sur un des boutons "Launch demo modal". Evidemment, interdiction d'utiliser le JS de de Bootstrap pour faire cette modale... mais tu peux utiliser le CSS.

Dans l'idée, c'est relativement simple : les modales sont des div cachées qui apparaissent lorsqu'on leur demande et disparaissent après (un peu le même principe que le dropdown, en somme). Ici on va coder 2 modales :

Une modale "Login" qui apparaît quand on clique sur le bouton correspondant et qui affiche le formulaire de connexion de Devise ;
Une modale "SignUp" qui apparaît quand on clique sur le bouton correspondant et qui affiche le formulaire d'inscription de Devise ;
Avant de pouvoir coder une modale affichant, sur index.html.erb le contenu des views registrations/new.html.erb (le sign-up) et sessions/new.html.erb (le log-in) de Devise, tu dois rendre la variable resource accessible dans toutes les views de tous tes controllers. En effet c'est cette variable qui permet de construire les 2 formulaires et elle est générée par les controllers de Devise qu'on ne veut SURTOUT PAS avoir à toucher. Donc tu vas rajouter ces lignes de codes dans controllers/application_controller.rb :

helper_method :resource_name, :resource, :devise_mapping, :resource_class
def resource_name
  :user
end

def resource
  @resource ||= User.new
end

def resource_class
  User
end

def devise_mapping
  @devise_mapping ||= Devise.mappings[:user]
end
A présent, je te laisse coder les 2 modales avec quelques astuces de présentation ci-dessous. Si tu bloques, je t'ai rajouté quelques indices plus bas.

🚀 ALERTE BONNE ASTUCE
Pour avoir une modale du tonnerre, quelques astuces de design :

Une transition sympa, ça fait plaisir aux yeux (utilise FadeIn et FadeOut) ;
Aère bien ta modale pour qu'elle soit lisible ;
C'est sympa de pouvoir fermer ta modale en cliquant a côté :D ;
Souvent, on aime bien avoir accès dans la même modale à l'inscription et la connexion. Quelques petites tabs, ça vous parle ?
En panne d'inspiration ? Voilà un petit lien bien sympathique.
Indice 1 : Je te conseille de créer une partial "_modals.html.erb" qui va contenir le code des deux formulaires et render cette partial dans la vue index. Ensuite, avec du CSS, tu vas mettre en page chaque modale puis utiliser un petit "display: none" pour qu'elles n'apparaissent pas au premier chargement de la page.

Indice 2 : Mets un petit EventListener sur chaque bouton de ton dropdown (tu peux leur mettre un id CSS pour faciliter leur sélection en JS). Le clic sur un bouton va faire apparaître la modale correspondante (entoure la modale dans une div ayant un id CSS pour faciliter sa sélection en JS).

Indice 3 : En cas de clic sur le body de la page, il faut que toutes les modales disparaîssent. Il faudra probablement que tu ais recours à la fonction "e.stopPropagation()" qui fait qu'un click sur un bouton du dropdown ne s'applique qu'à lui et pas à ses éléments parents (le body).

#### 2.3. Carousel
Okay, je vois que tu veux être un peu challengé !

Tu vas maintenant ajouter un carousel, c'est-à-dire un bloc qui affiche des images et les fait défiler. En voici un exemple. Le rendu n'est pas complexe mais réaliser un carousel uniquement avec jQuery, c'est pas de la tarte pour un débutant.... Et c'est le but de l'exercice : la manipulation de DOMs. Évidemment, comme pour la partie précédente, il est interdit de se servir d'une library autre que jQuery 😉

Ton carousel contiendra les différentes images du site To Do List (déjà présentes sur la page d'accueil - des jolis robots).

Il doit contenir une flèche de chaque côté pour avancer ou reculer d'une slide.
Par défaut, l'animation doit avancer d'un cran toutes les 5 secondes.
En-dessous du carousel, tu dois placer des petits cercles indiquant la slide active. Ces cercles sont clicables pour afficher une slide précise.
Bien entendu, les images bouclent : l'image après la dernière est la première, et l'image avant la première est la dernière.
Bref, un carrousel de base.

En procédant par étape, il faudrait que :

Tu commence par modifier le fichier HTML de base. Fais un div qui contiendra toutes les slides individuelles de chaque image. L'ensemble est dans une div "container" qui place le tout au centre de la page.
En JQuery, récupère un array contenant toutes les slides. Cache les toutes puis n'affiche que la première.
Maintenant code 2 fonctions "next" et "previous", qui font disparaître toutes les images et font apparaitre l'image suivante (dans l'ordre de l'array) ou la précédente. Bien sûr tout ça nécessite une variable compteur qui suit le numéro de l'image actuellement affichée.
Mets en place les flèches avant / arrière et relit un clique dessus aux méthodes "next" et "previous".
Code à présent une fonction qui fait avancer tout seul l'image affichée (et donc modifie le compteur aussi) au bout d'un certain temps. Exécute cette fonction pour qu'elle tourne en tâche de fond.
Mets en place les cercles en dessous du carrousel. Cela doit préciser via un effet quelconque (background-color différent par exemple) la slide active. Quand on clique sur l'un des cercles, nous devons aller à la slide demandée.
Joue avec ton carrousel !
### 3. Rendu attendu
Rendu attendu : un lien GitHub, avec un lien Heroku de ton app en production dans le README