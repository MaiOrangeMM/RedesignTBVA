<?php 
$email = filter_input( INPUT_POST, 'email', FILTER_SANITIZE_EMAIL );
$name = filter_input( INPUT_POST, 'name', FILTER_SANITIZE_STRING );
$message = filter_input( INPUT_POST, 'message', FILTER_SANITIZE_STRING );

$to = "info@tbvisualarts.com";
$header = "FROM: {$name} <{$email}>\r\n";
$subject = "Neue Anfrage von {$name} : {$email}";

if( empty($email) ) {
    header('Location: http://www.tbvisualarts.com/?missingEmail');
    die();
}

if( empty($name) ) {
    header('Location: http://www.tbvisualarts.com/?missingName');
    die();
}

if( empty($message) ) {
    header('Location: http://www.tbvisualarts.com/?missingMessage');
    die();
}

mail( $to, $subject, $message, $header);

header('Location: http://www.tbvisualarts.com/');
die();
?>
