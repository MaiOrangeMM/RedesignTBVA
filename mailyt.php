<?php
  if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $nmessage = $_POST['message'];

    $mailTo = "info@tbvisualarts.com";
    $headers = "From: ".$mailFrom;
    $text = "Neue Anfrage von ".$name.".\n\n".$message;

    mail($receiver, $subject, $from, $text)
  }
?>