// Fonction de verification d'authentification qui verifie qu'il existe bien un password et un email dans le local storage pour le user
function verificationAuthentification() {
    // Vérifie si les données "email" et "password" existent dans le localStorage
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
  
    if (!email || !password) {
      // Si les données n'existent pas, rediriger vers la page de connexion
      window.location.href = "login.html";
    }
  }
  
  // Appel de la fonction pour vérifier l'authentification lors du chargement de la page
  verificationAuthentification();