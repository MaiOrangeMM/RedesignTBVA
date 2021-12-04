<?php 
$email = filter_input( INPUT_POST, 'inputEmail', FILTER_SANITIZE_EMAIL );
$name = filter_input( INPUT_POST, 'inputName', FILTER_SANITIZE_STRING );
$message = filter_input( INPUT_POST, 'inputTextarea', FILTER_SANITIZE_STRING );

if( empty($email) ) {
    header('Location: http://www.test.tbvisualarts.com/?missingEmail');
    die();
}

if( empty($name) ) {
    header('Location: http://www.test.tbvisualarts.com/?missingName');
    die();
}

if( empty($message) ) {
    header('Location: http://www.test.tbvisualarts.com/?missingMessage');
    die();
}

$subject = "New contact request from {$name} : {$email}";

mail( 'maiqn92@googlemail.com', $subject, $message );

header('Location: http://www.test.tbvisualarts.com/');
die();
?>