// Fonction de vérification de la similarité des informations saisies dans le formulaire avec les informations saisies lors de la connexion
function validerSimilariteInformation() {
  // Récupération du formulaire de connexion
  let form2 = document.getElementById("formRegister2");

  // Ajoute un listener sur l'événement submit
  form2.addEventListener("submit", function (event) {
    event.preventDefault();

    // Récupération des valeurs saisies lors de la connexion
    let email2 = document.getElementById("email2").value;
    let pwd2 = document.getElementById("password2").value;

    // Récupération des valeurs stockées dans le localStorage
    let emailStocker = localStorage.getItem("email");
    let passwordStocker = localStorage.getItem("password");

    // Vérifie que les deux champs sont remplis
    if (email2 === "" || pwd2 === "") {
      let messageErreurInfoSaisie = document.getElementById("erreurInfoSaisie");
      messageErreurInfoSaisie.style.display = "block";
      messageErreurInfoSaisie.innerHTML = "Veuillez remplir tous les champs.";
      return; // Arrête l'exécution si les champs ne sont pas remplis
    }

    // Vérifie si les informations saisies correspondent aux informations stockées dans le localStorage
    if (email2 !== emailStocker || pwd2 !== passwordStocker) {
      // Si les informations d'au moins un des deux champs ne correspondent pas, affiche un message d'erreur
      let messageErreurSimilariteInfo = document.getElementById("erreurSimilariteInfo");
      messageErreurSimilariteInfo.style.display = "block";
      messageErreurSimilariteInfo.innerHTML = "Les informations saisies sont incorrectes.";
    } else {
      // Redirige vers la page forum.html en cas de succès
      window.location.href = "../html/forum.html";
    }
  });
}

validerSimilariteInformation();