<?php 
function reCaptcha($recaptcha){
  $secret = "6LdCW-kdAAAAALuqgP-qrvFqoS0PEMg4JIZksTZg";
  $ip = $_SERVER['REMOTE_ADDR'];

  $postvars = array("secret"=>$secret, "response"=>$recaptcha, "remoteip"=>$ip);
  $url = "https://www.google.com/recaptcha/api/siteverify";
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_TIMEOUT, 10);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $postvars);
  $data = curl_exec($ch);
  curl_close($ch);

  return json_decode($data, true);
}

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
