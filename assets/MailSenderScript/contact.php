<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "romain.malosse43@icloud.com";
    $subject = $_POST["Subject"];
    $message = $_POST["Message"];
    $headers = "From: " . $_POST["Email"];

    if (mail($to, $subject, $message, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message.";
    }
} else {
    echo "Cette page ne peut pas être accédée directement.";
}
?>
