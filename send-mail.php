<?php
// Uncomment the next line if you're using a dependency loader (such as Composer) (recommended)
// require 'vendor/autoload.php';

// Uncomment the next line if you're not using a dependency loader (such as Composer), replacing <PATH TO> with the path to the sendgrid-php.php file
require_once './sendgrid-php.php';
$name = $_POST['name']; 
$email_id = $_POST['email']; 
$message = $_POST['message'];

$email = new \SendGrid\Mail\Mail();
$email->setFrom("no.reply.devhost@gmail.com", "KJ01 Portfolio Contact Form Message");
$email->setSubject("KJ01 Portfolio Contact Form Message");
$email->addTo("kaushikjadhav293@gmail.com", "Kaushik Jadhav");
$email->addContent("text/plain", "and easy to do anywhere, even with PHP");
$email->addContent(
    "text/html", "Message submitted by <b>$name</b><br> Email Id: $email_id <br>Message: <strong>$message</strong>"
);
$sendgrid = new \SendGrid('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');
try {
    $response = $sendgrid->send($email);
    // print $response->statusCode() . "\n";
    // print_r($response->headers());
    // print $response->body() . "\n";
    echo "<script>
    alert('Message Sent Succefully');
    window.location.href='https://kaushikjadhav01.github.io/index_main#';
    </script>";
    
} catch (Exception $e) {
    echo 'Caught exception: '. $e->getMessage() ."\n";
}

