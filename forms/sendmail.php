<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Replace with your email address
  $to = 'bigforce415874@gmail.com';
  $subject = $_POST['subject'];
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $headers = "From: $name <$email>" . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

  if (mail($to, $subject, $message, $headers)) {
    echo 'email sent successfuly!';
  } else {
    echo 'failed to send email!';
  }
}
?>
