<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // If using Composer

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST['first_name']);
    $lastName = htmlspecialchars($_POST['last_name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $productType = htmlspecialchars($_POST['product_type']);
    $state = htmlspecialchars($_POST['state']);
    $city = htmlspecialchars($_POST['city']);
    $postalCode = htmlspecialchars($_POST['postal_code']);
    $messageText = htmlspecialchars($_POST['message']);
    $consent = isset($_POST['consent']) ? 'Yes' : 'No';

    $fullMessage = "
        First Name: $firstName\n
        Last Name: $lastName\n
        Email: $email\n
        Phone: $phone\n
        Product Type: $productType\n
        State: $state\n
        City: $city\n
        Postal Code: $postalCode\n
        Message: $messageText\n
        Consent: $consent\n
    ";

    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'rajeshkushwah.rewathi@gmail.com';
        $mail->Password = 'ihpfbpbzitjwdfma'; // Your App Password (no spaces)
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Sender and recipient
        $mail->setFrom('shahrukhkhan.rewathi@gmail.com', 'Website Inquiry');
        $mail->addAddress('shahrukhkhan.rewathi@gmail.com', 'Rajesh');

        // Email content
        $mail->isHTML(false);
        $mail->Subject = 'New Inquiry from Sydney Page';
        $mail->Body    = $fullMessage;

        $mail->send();

        // ✅ Redirect after successful email
        header("Location: thankyou.html");
        exit();
        
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request.";
}
?>
