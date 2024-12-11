// Gestion de la soumission du formulaire
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Récupération des valeurs des champs
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const contactAlertMessage = document.getElementById("contactAlertMessage");
  const contactErrorMessage = document.getElementById("contactErrorMessage");

  // Vérification si tous les champs sont remplis
  if (name === "" || email === "" || subject === "" || message === "") {
    contactAlertMessage.style.display = "block"; // Afficher le message d'alerte
    setTimeout(function() {
      contactAlertMessage.style.display = "none"; // Cacher après 5 secondes
    }, 5000);
  } else {
    // Si tous les champs sont remplis, affichez le message d'erreur (fonctionnalité non prise en charge)
    contactErrorMessage.style.display = "block";
    setTimeout(function() {
      contactErrorMessage.style.display = "none"; // Cacher après 5 secondes
    }, 5000);

    // Réinitialiser les champs du formulaire
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  }
});

// Fonction qui réinitialise les champs et affiche un message si vide
function deleteTextContactForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const contactAlertMessage = document.getElementById("contactAlertMessage");

  // Vérifie si l'un des champs est vide
  if (name === "" || email === "" || subject === "" || message === "") {
    contactAlertMessage.style.display = "block"; // Afficher le message d'alerte
    setTimeout(function() {
      contactAlertMessage.style.display = "none"; // Cacher après 5 secondes
    }, 5000);
  } else {
    // Si tous les champs sont remplis, réinitialiser les champs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

    // Affiche un message d'erreur (fonctionnalité non prise en charge)
    const contactErrorMessage = document.getElementById("contactErrorMessage");
    contactErrorMessage.style.display = "block";
    setTimeout(function() {
      contactErrorMessage.style.display = "none"; // Cacher après 5 secondes
    }, 5000);
  }
}