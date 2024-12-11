// Gestion de la soumission du formulaire
document.getElementById("subscribeForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const emailInput = document.getElementById("emailInput").value;
  const subAlertMessage = document.getElementById("subAlertMessage");

  // Vérification si l'email est vide
  if (emailInput === "") {
    subAlertMessage.style.display = "block"; // Afficher le message d'alerte
    setTimeout(function() {
      subAlertMessage.style.display = "none"; // Cacher le message d'alerte après 5 secondes
    }, 5000);
  } else {
    // Si l'email est valide, affichez le message d'erreur (fonctionnalité non prise en charge)
    const subErrorMessage = document.getElementById("subErrorMessage");
    subErrorMessage.style.display = "block";
    setTimeout(function() {
      subErrorMessage.style.display = "none"; // Cacher après 5 secondes
    }, 5000);
  }

  // Effacer le champ de saisie après la soumission
  document.getElementById("emailInput").value = ""; // Effacer le champ de saisie
});

// Fonction qui réinitialise le champ et affiche un message si vide
function deleteTextSubForm() {
  var emailInput = document.getElementById("emailInput").value;
  if (emailInput === "") {
    alert("Veuillez remplir tous les champs avant d'envoyer le formulaire.");
  } else {
    document.getElementById("emailInput").value = ""; // Vider le champ email
  }
}