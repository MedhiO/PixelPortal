// Sujets fictifs pour avoir une base
let sujets = [
  { titre: "Bloquer sur Elden ring aidez moi SVP" },
  { titre: "No man sky VS Starfield comparatif" },
  { titre: "Comment se rendre sur la lune quantique dans outer wild ?" },
  { titre: "Liste des meilleurs mod de skyrim" }
];
// Index pour alterner entre les couleurs de fond
let couleurIndex = 0; 

// Fonction pour afficher les sujets dans la liste
function afficherSujets() {
  let listeSujet = document.getElementById("listeSujet");
  listeSujet.innerHTML = "";

  sujets.forEach((sujet, index) => {
    let sujetDiv = document.createElement("div");
    let lienSujet = document.createElement("a");
    let icon = document.createElement("i");

    lienSujet.href = "sujet.html";
    lienSujet.innerHTML = '<i class="fa-solid fa-folder"></i>';
    lienSujet.textContent = sujet.titre;

    // Alterne entre les couleurs de fond
    sujetDiv.style.backgroundColor = couleurIndex % 2 === 0 ? "#363e49" : "#2e3238";
    couleurIndex++;

    // Défini la hauteur à 80px
    sujetDiv.style.height = "80px"; 

    // Utilise display: flex pour centrer verticalement le lien
    sujetDiv.style.display = "flex";
    sujetDiv.style.alignItems = "center";

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

document.getElementById("creerSujet").addEventListener("click", creerNouveauSujet);

afficherSujets();

