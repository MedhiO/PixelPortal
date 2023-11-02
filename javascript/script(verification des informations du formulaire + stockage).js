// Variable pour suivre l'affichage du message d'erreur de complétion
let completionErreurAffichee = false;

// Fonction de vérification des informations du formulaire + stockage de ces dernières une fois validé
function verificationFormulaire() {
  let form = document.getElementById("formRegister");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let champ1 = document.getElementById("nom").value;
    let champ2 = document.getElementById("prenom").value;
    let champ3 = document.getElementById("email").value;
    let champ4 = document.getElementById("password").value;
    let champ5 = document.getElementById("confirmPassword").value;

    // Appel des fonctions de validation
    let complet = validerCompletionFormulaire(champ1, champ2, champ3, champ4, champ5);
    
    // Si l'erreur de complétion est déjà affichée, pas besoin de vérifier les autres erreurs
    if (!complet) {
      return;
    }

    let longueurValide = validerLongueurNomPrenom(champ1, champ2);
    let emailValide = validerFormatEmail(champ3);
    let mdpValide = validerFormatMdp(champ4);
    let mdpSimilaire = validerSimilariteMdp(champ4, champ5);

    if (complet && longueurValide && emailValide && mdpValide && mdpSimilaire) {
      // Enregistre les valeurs dans le localStorage
      localStorage.setItem("nom", champ1);
      localStorage.setItem("prenom", champ2);
      localStorage.setItem("email", champ3);
      localStorage.setItem("password", champ4);

      form.reset();

      window.location.href = "../html/login.html";
    }
  });
}

// Fonction de validation pour vérifier si les champs sont complets
function validerCompletionFormulaire(champ1, champ2, champ3, champ4, champ5) {
  let messageErreurCompletion = document.getElementById("erreurCompletion");

  if (champ1 === "" || champ2 === "" || champ3 === "" || champ4 === "" || champ5 === "") {
    // Si au moins un champ est vide affiche le message d'erreur
    messageErreurCompletion.style.display = "block";
    messageErreurCompletion.innerHTML = "Tous les champs doivent être remplis.";
    completionErreurAffichee = true;
    return false;
  }
  // Si tous les champs sont complets l'erreur ne s'affiche pas
  messageErreurCompletion.style.display = "none";
  return true;
}

// Fonction de validation pour vérifier la longueur du nom et du prénom
function validerLongueurNomPrenom(champ1, champ2) {
  let messageErreurLongueur = document.getElementById("erreurLongueur");

  if (champ1.length < 3 || champ2.length < 3) {
    // Si au moins un champ ne contient pas minimum 3 caractères affiche le message d'erreur
    messageErreurLongueur.style.display = "block";
    messageErreurLongueur.innerHTML = "Les champs nom et prénom doivent comporter au moins 3 caractères.";
    return false;
  }
  // Si la longueur est valide l'erreur ne s'affiche pas
  messageErreurLongueur.style.display = "none";
  return true;
}

// Fonction de validation pour vérifier le format de l'email
function validerFormatEmail(champ3) {
  let champ3Regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let messageErreurFormatEmail = document.getElementById("erreurFormatEmail");

  if (!champ3Regex.test(champ3)) {
    // Si le champ ne contient pas le format d'email requis affiche le message d'erreur
    messageErreurFormatEmail.style.display = "block";
    messageErreurFormatEmail.innerHTML = "L'email saisi n'est pas au bon format.";
    return false;
  }
  // Si le format d'email est valide l'erreur ne s'affiche pas
  messageErreurFormatEmail.style.display = "none";
  return true;
}

// Fonction de validation pour vérifier le format du mot de passe
function validerFormatMdp(champ4) {
  let motDePasseRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  let messageErreurFormatMdp = document.getElementById("erreurFormatMdp");

  if (!motDePasseRegex.test(champ4)) {
    // Si le mot de passe ne respecte pas le format requis affiche le message d'erreur
    messageErreurFormatMdp.style.display = "block";
    messageErreurFormatMdp.innerHTML = "Le mot de passe saisi n'est pas au bon format.";
    return false;
  }
  // Si le format du mot de passe est valide l'erreur ne s'affiche pas
  messageErreurFormatMdp.style.display = "none";
  return true;
}

// Fonction de validation pour vérifier la similarité des mots de passe
function validerSimilariteMdp(pwd, cpwd) {
  let messageErreurSimilariteMdp = document.getElementById("erreurSimilariteMdp");

  if (pwd !== cpwd) {
    // Si les deux champs de mot de passe ne correspondent pas affiche le message d'erreur
    messageErreurSimilariteMdp.style.display = "block";
    messageErreurSimilariteMdp.innerHTML = "Les mots de passe ne correspondent pas.";
    return false;
  }
  // Si les mots de passe correspondent l'erreur ne s'affiche pas
  messageErreurSimilariteMdp.style.display = "none";
  return true;
}

// Appel de la fonction du formulaire
verificationFormulaire();
