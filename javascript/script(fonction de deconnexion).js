// Fonction de deconnexion (a lié a la vérifiation d'authentification )
let deco = document.getElementById("deconnexion")

// Ajoute un listener sur le clic de la div de deconnexion
deco.addEventListener("click", function () {

    // Supprime toutes les informations stockées dans le Local Storage
    localStorage.clear();

    // Recharge la page actuelle
    location.reload();
})