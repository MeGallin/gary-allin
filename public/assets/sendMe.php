<?php
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata, true);   
     $name = $request['name'];
     $email = $request['email'];
     $message = $request['message'];
     if(!empty($message)){
        $message = $name. ", sent a contact request.\r\nThis is the message:\r\n ".$message. "and this is the email: ". $email;
     }else{
        $message = "This message is only visible to the garyallin.uk It is a contact request message from your website from " .$name. " and email address: " .$email;
     }    
     $to = "me@garyallin.uk";
     $subject = "Contact Request";     
     $headers = "From:".$name."\r\n";
     $headers .= "Reply-To:".$email;

    mail( $to, $subject, $message, $headers);
}
?>