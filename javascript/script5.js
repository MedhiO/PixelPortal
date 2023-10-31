// Sujets fictifs pour avoir une base
let sujets = [
    { message: "Je voudrais savoir si c'etait moi qui était idiot ou c'est juste le jeu a un moment donné qui te fait un gros doigt ?" },
    { message: "Le gros JDG était meilleurs" },
];

// Fonction pour afficher les sujets dans la liste
function afficherSujets() {
    let listeSujet = document.getElementById("listeSujet");
    // Sert à vider le contenu de l'élément HTML avec l'ID "listeSujet" avant d'ajouter de nouveaux éléments
    listeSujet.innerHTML = "";

    // Parcours de la liste des sujets et création d'un élément pour chaque sujet
    sujets.forEach((sujet, index) => {
        let sujetDiv = document.createElement("div");
        // Interpolation de chaine de caractere ainsi sujet.message et remplacer par la valeur de la propriété message de l'objet sujet
        sujetDiv.innerHTML = `<h3>${sujet.message}</h3>`;
        listeSujet.appendChild(sujetDiv);
    });
}

// Fonction pour créer un nouveau message
function creerNouveauMessage() {
    // Récupère le contenu du textarea avec l'ID "sujetMessage"
    let message = document.getElementById("sujetMessage").value;

    if (message) {
        // Si le message n'est pas vide, ajoute un nouvel objet avec le message de reponse
        sujets.push({ message });

        // Affiche à nouveau la liste des sujets mise à jour
        afficherSujets();

        // Efface le contenu du textarea
        document.getElementById("sujetMessage").value = "";
    }
}

// Ajoute un listener sur l'evement click pour le bouton "POSTER"
document.getElementById("creerSujet").addEventListener("click", creerNouveauMessage);

// Affiche les sujets initiaux lorsque la page se charge
afficherSujets();
