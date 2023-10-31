// Création de la fonction appeller afficherDateDuJour() pour afficher la Date au format local et la faire apparaitre sur un element HTML en la gardant a jour toutes les secondes :
function afficherDateDuJour() {

// Crée un objet appeller date et défini que cette objet equivaut à la date actuelle grace a la fonction appeller new Date() puis le formate au format des dates locales JJ/MM/AAAA grace a la fonction appeller toLocaleDateString()
let date = new Date().toLocaleDateString();
    
// Crée un objet appeller elementDate et défini que cette objet equivaut à l'élément HTML date-du-jour par son ID grace a la fonction getElementById() afin de pouvoir y afficher du contenu plus tard
let elementDate = document.getElementById("affichageDate");
    
// Instruction qui recupere l'objet appeller elementDate et qui modifie la propriété appeller textContent afin d'affiché le contenu voulu, ici la chaine de caracteres "Date du jour : " est declarer grace aux guillemets puis grace a l'operateur + ajoute la valeur de la variable appeller date a la suite de la chaine de caracteres à affiché
elementDate.textContent = "Nous sommes le : " + date;
}

// Execution de la fonction appeller afficherDateDuJour()
afficherDateDuJour();
    
// Mise en place d'une mise à jour de la valeur de la fonction appeller afficherDateDuJour() toutes les secondes (valeurs en milliseconde) grace a la fonction setInterval()
setInterval(afficherDateDuJour, 1000);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 // Vérifie si l'heure de connexion a déjà été stockée dans le localStorage
 let heureConnexionStored = localStorage.getItem("heureConnexion");

// Vérifie si l'heure de connexion a déjà été enregistrée
if (heureConnexionStored) {
    // Affiche l'heure de connexion stockée
    let elementHeure = document.getElementById("affichageHeureConnexion");
    elementHeure.textContent = "Vous vous êtes connecté à : " + heureConnexionStored;
    } else {
    // Si l'heure de connexion n'a pas été stockée, enregistrez-la
    let dateConnexion = new Date();
    let heureConnexionString = dateConnexion.toLocaleTimeString();
    localStorage.setItem("heureConnexion", heureConnexionString);

    // Affiche l'heure de connexion initiale
    let elementHeure = document.getElementById("affichageHeureConnexion");
    elementHeure.textContent = "Vous vous êtes connecté à : " + heureConnexionString;
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Récupère le prénom depuis le localStorage
let prenom = localStorage.getItem("prenom");

// Vérifie si le prénom existe dans le localStorage
if (prenom) {
    // Sélectionne l'élément HTML pour afficher le prénom
    let bienvenueText = document.getElementById("affichagePrenom");

    // Modifie le contenu de l'élément pour afficher le prénom
    bienvenueText.textContent = "Bienvenue : " + prenom;
}