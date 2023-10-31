// Fonction de vérification des informations du formulaire + stockage de ces dernières une fois validé
function verificationFormulaire() {
  let form = document.getElementById("formRegister");

  // Ajoute un listener sur l'événement submit
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Récupère les valeurs des champs du formulaire au moment de la soumission
    let champ1 = document.getElementById("nom").value;
    let champ2 = document.getElementById("prenom").value;
    let champ3 = document.getElementById("email").value;
    let champ4 = document.getElementById("password").value;
    let champ5 = document.getElementById("confirmPassword").value;

    // Fonction de validation pour vérifier si les champs sont complets
    function validerCompletionFormulaire() {
      // Vérifie si les champs sont vides au moment de la soumission et affiche un message d'erreur le cas échéant
      if (champ1 === "" || champ2 === "" || champ3 === "" || champ4 === "" || champ5 === "") {
        // Si au moins un champ est vide, affiche un message d'erreur
        let messageErreur = document.getElementById("erreurCompletion");
        messageErreur.style.display = "block";
        messageErreur.innerHTML = "Tous les champs doivent être remplis.";
        return false;
      }
      return true;
    }

    // Fonction de validation pour vérifier la longueur du nom et du prénom
    function validerLongueurNomPrenom() {
      // Vérifie si les champs contienne au moins 3 caracteres au moment de la soumission et affiche un message d'erreur lorsque ce n'est pas le cas
      if (champ1.length < 3 || champ2.length < 3) {
        // Si au moins un champ ne contient pas minimum 3 caracteres, affiche un message d'erreur
        let messageErreurLongueur = document.getElementById("erreurLongueur");
        messageErreurLongueur.style.display = "block";
        messageErreurLongueur.innerHTML = "Les champs nom et prénom doivent comporter au moins 3 caractères.";
        return false;
      }
      return true;
    }

    // Fonction de validation pour vérifier le format de l'email
    function validerFormatEmail() {
      // Vérifie si le champ contient les elements necessaires a l'ecriture d'un email
      let champ3Regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!champ3Regex.test(champ3)) {
        // Si le champ ne contient pas le minimum d'elements necessaires a l'ecriture d'un email, affiche un message d'erreur
        let messageErreurFormatEmail = document.getElementById("erreurFormatEmail");
        messageErreurFormatEmail.style.display = "block";
        messageErreurFormatEmail.innerHTML = "L'email saisi n'est pas au bon format.";
        return false;
      }
      return true;
    }

    // Fonction de validation pour vérifier le format du mot de passe
    function validerFormatMdp() {
      // Vérifie que le mot de passe contient les elements necessaires a la création d'un mot de passe fort
      let motDePasseRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      if (!motDePasseRegex.test(champ4)) {
        // Si le champ ne contient pas les elements necessaires a l'ecriture d'un email, affiche un message d'erreur
        let messageErreurFormatMdp = document.getElementById("erreurFormatMdp");
        messageErreurFormatMdp.style.display = "block";
        messageErreurFormatMdp.innerHTML = "Le mot de passe saisi n'est pas au bon format.";
        return false;
      }
      return true;
    }

    // Fonction de validation pour vérifier la similarité des mots de passe
    function validerSimilariteMdp() {
      // Vérifie que le mot de passe correspond avec la verification du mot de passe
      let pwd = document.getElementById("password").value;
      let cpwd = document.getElementById("confirmPassword").value;
      if (pwd !== cpwd) {
        // Si les 2 champ ne correspondent pas, affiche un message d'erreur
        let messageErreurSimilariteMdp = document.getElementById("erreurSimilariteMdp");
        messageErreurSimilariteMdp.style.display = "block";
        messageErreurSimilariteMdp.innerHTML = "Les mots de passe ne correspondent pas.";
        return false;
      }
      return true;
    }

    // Appel des fonctions de validation
    let succes = validationFormulaire(validerCompletionFormulaire, validerLongueurNomPrenom, validerFormatEmail, validerFormatMdp, validerSimilariteMdp);

    if (!succes) {
      event.preventDefault();
    }
    
    // Si toutes les validations sont réussies, enregistre les valeurs des champs dans le localStorage
    if (validerCompletionFormulaire() && validerLongueurNomPrenom() && validerFormatEmail() && validerFormatMdp() && validerSimilariteMdp()) {
    // Enregistre les valeurs dans le localStorage
    localStorage.setItem("nom", champ1);
    localStorage.setItem("prenom", champ2);
    localStorage.setItem("email", champ3);
    localStorage.setItem("password", champ4);
    
    // Réinitialise le formulaire
    form.reset();

    // Redirige vers la page connexion.html
    window.location.href = "../html/login.html";

    }
  });
}

function validationFormulaire(completionValide, longueurValide, emailValide, MdpValide, MdpSimilaire) {
  let validation = true;

  // Appel des fonctions de validation et assigne les résultats à des variables
  let isCompletionValide = completionValide();
  let isLongueurValide = longueurValide();
  let isEmailValide = emailValide();
  let isMdpValide = MdpValide();
  let isMdpSimilaire = MdpSimilaire(); // Appel à la fonction de validation de similarité des mots de passe

  if (!isCompletionValide || !isLongueurValide || !isEmailValide || !isMdpValide || !isMdpSimilaire) {
    validation = false;
  }

  return validation;
}

// Appel de la fonction du formulaire
verificationFormulaire();






