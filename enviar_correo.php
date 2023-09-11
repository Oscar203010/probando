<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["name"];
    $email = $_POST["email"];
    $mensaje = $_POST["message"];

    // Dirección de correo a la que se enviará el mensaje
    $destinatario = "gonzalespinzon8010@gmail.com"; // Cambia esto con la dirección de correo deseada

    // Asunto del correo
    $asunto = "Mensaje de contacto de $nombre";

    // Cuerpo del mensaje
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo electrónico: $email\n";
    $contenido .= "Mensaje:\n$mensaje";

    // Encabezados del correo
    $headers = "From: $nombre <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Enviar el correo
    if (mail($destinatario, $asunto, $contenido, $headers)) {
        echo "Mensaje enviado con éxito. Gracias por contactarnos.";
    } else {
        echo "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
    }
}
?>

