<?php 
$email = filter_input( INPUT_POST, 'email', FILTER_SANITIZE_EMAIL );
$name = filter_input( INPUT_POST, 'name', FILTER_SANITIZE_STRING );
$message = filter_input( INPUT_POST, 'message', FILTER_SANITIZE_STRING );

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

$subject = "Neue Anfrage von{$name} : {$email}";

mail( 'info@tbvisualarts.com', $subject, $message );

header('Location: http://www.tbvisualarts.com/');
die();
?>
