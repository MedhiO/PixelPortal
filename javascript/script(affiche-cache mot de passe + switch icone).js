  // Fonction pour basculer entre l'icône d'œil ouvert et fermé
  function togglePasswordVisibility() {
    let passwordInput = document.getElementById('password2');
    let eyeOpenIcon = document.querySelector('.fa-eye');
    let eyeSlashIcon = document.querySelector('.fa-eye-slash');

    // Si le type de l'input est 'password', le changer à 'text' et afficher l'icône barrée
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeOpenIcon.style.display = 'none';
      eyeSlashIcon.style.display = 'block';
      eyeSlashIcon.style.visibility = 'visible';
    } else {
      // Sinon, le changer à 'password' et afficher l'icône d'œil ouvert
      passwordInput.type = 'password';
      eyeOpenIcon.style.display = 'block';
      eyeSlashIcon.style.display = 'none';
    }
  }

// Ajouter un écouteur d'événement sur le clic de l'icône d'œil
document.querySelector('.fa-eye').addEventListener('click', togglePasswordVisibility);

// Ajouter un écouteur d'événement sur le clic de l'icône d'œil
document.querySelector('.fa-eye-slash').addEventListener('click', togglePasswordVisibility);