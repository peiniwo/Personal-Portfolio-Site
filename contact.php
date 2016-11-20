<?php

// configure
$from = $_POST['email']; 
$sendTo = 'peiniwo@gmail.com';
$subject = 'Hello from Portfolio Website';
$fields = array('name' => 'Name', 'email' => 'Email', 'object' => 'Object', 'message' => 'Message'); // array variable name => Text to appear in email
$okMessage = 'Thank you for reaching out! I will get back to you shortly.';
$errorMessage = 'There was an error while submitting the form. Please try again.';

// let's do the sending

try
{
    $emailText = "You have new message from contact form\n=============================\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    mail($sendTo, $subject, $emailText, "From: " . $from);

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    
    header('Content-Type: application/json');
    
    echo $encoded;
}
else {
    echo $responseArray['message'];
}
