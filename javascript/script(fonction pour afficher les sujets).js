// Sujets fictifs pour avoir une base
let sujets = [
  { titre: "Bloquer sur Elden ring aidez moi SVP" },
  { titre: "No man sky VS Starfield comparatif" },
  { titre: "Comment se rendre sur la lune quantique dans outer wild ?" }
];

// Fonction pour afficher les sujets dans la liste
function afficherSujets() {
  let listeSujet = document.getElementById("listeSujet");
  listeSujet.innerHTML = "";

  sujets.forEach((sujet, index) => {
      let sujetDiv = document.createElement("div");
      // Crée un lien
      let lienSujet = document.createElement("a"); 
      // Défini l'objet lienSujet comme renvoyant a la page sujet.html
      lienSujet.href = "sujet.html";
      lienSujet.textContent = sujet.titre;
      // Ajoute le lien à la div
      sujetDiv.appendChild(lienSujet);
      listeSujet.appendChild(sujetDiv);
  });
}

// Fonction pour créer un nouveau sujet
function creerNouveauSujet() {
  let titre = document.getElementById("sujetTitre").value;

  if (titre) {
      sujets.push({ titre });
      afficherSujets();
      document.getElementById("sujetTitre").value = "";
  }
}

// Ajoute un listener sur le bouton poster
document.getElementById("creerSujet").addEventListener("click", creerNouveauSujet);

// Affiche les sujets initiaux
afficherSujets();