<?php 
$errors = '';
$myemail = 'stevenjackson.sanguine@gmail.com';
if( !empty($_POST['address']))
{
    die();
}

$name = $_POST['name']; 
$email= $_POST['email']; 
$phone = $_POST['phone']; 
$city = $_POST['city']; 


if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Rentshield Landing Page - Contact form submission: $name";
	$email_body = "You have received a new message. ".
	" Here are the details:\n Name: $name \n Email: $email \n Phone: $phone \n City: $city "; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: thank-you.php');
} 

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>