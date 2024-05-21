function deleteText() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Veuillez remplir tous les champs avant d'envoyer le formulaire.");
    } else {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    }
  }