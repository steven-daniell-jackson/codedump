<?php 

/*
Written by Steven Jackson - 21 April 2016

Form Handler to update database table "capsicum_landing_enquiries"
*/ 

/** Email information **/
$admin_email = "enquiry@capsicumcooking.co.za";
$from_email = "enquiry@capsicumcooking.co.za";

/** EMS **/

/** MySQL database name*/
define('DB_NAME', 'capsick_wpdbROI');

/** MySQL database username */
define('DB_USER', 'capsick_6');

/** MySQL database password */
define('DB_PASSWORD', 'MxBrrcy8');
/** MySQL hostname */
define('DB_HOST', 'sql21.jnb1.host-h.net');

/** MySQL Table name */
define('DB_TABLE', 'capsicum_landing_enquiries');

// echo $_POST["fullname"];

// Honey pot field
if (!empty($_POST['address'])) {
  die();
}

// if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])):
//         //your site secret key
//     $secret = '6LeSrgwUAAAAAHrfCByeW0w6zt8x8BEo6VaMarTm';
//         //get verify response data
// $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
// $responseData = json_decode($verifyResponse);
// if($responseData->success):

// If POST value is set. Assign to variable
    $fullname = isset($_POST['fullname']) ? $_POST['fullname'] : null;
$email = isset($_POST['email']) ? $_POST['email'] : null;
$telephone = isset($_POST['telephone']) ? $_POST['telephone'] : null;
$campus = isset($_POST['campus']) ? $_POST['campus'] : null;
$course = isset($_POST['course']) ? $_POST['course'] : null;
$city = isset($_POST['city']) ? $_POST['city'] : null;
$suburb = isset($_POST['suburb']) ? $_POST['suburb'] : null;

// If any of the fields are empty. Redirect to homepage
// if (empty($fullname) || empty($email) || empty($telephone) || empty($campus))
if (empty($fullname) || empty($email) || empty($campus) || empty($course)) {
  header("Location: http://capsicumcooking.com/lp-durban-general-enquiry");
    die();
}

// Timestamp
$timestamp = date("F j, Y, g:i a");

// Page URL
$page_url = $_SERVER['HTTP_REFERER'];

// Create instance of MySQLi
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

/* check connection */
if ($mysqli->connect_errno) {
  printf("Connect failed: %s\n", $mysqli->connect_error);
  exit();
}

$_fullname = $mysqli->real_escape_string($fullname);
$_email = $mysqli->real_escape_string($email);
$_telephone = $mysqli->real_escape_string($telephone);
$_campus = $mysqli->real_escape_string($campus);
$_course = $mysqli->real_escape_string($course);
$_city = $mysqli->real_escape_string($city);
$_suburb = $mysqli->real_escape_string($suburb);
$_timestamp = $mysqli->real_escape_string($timestamp);
$_page_url = $mysqli->real_escape_string($page_url);


/* Insert Query  */
$mysqli->query("INSERT INTO "
   . DB_TABLE .  " VALUES ( '',
   '" . $_fullname . "', 
   '" . $_email ."', 
   '" . $_telephone ."', 
   '" . $_campus ."',
   '" . $_course ."',
   '" . $_city ."',
   '" . $_suburb ."',
   '" . $_timestamp ."',
   '" . $_page_url ."'
   );");



$to = $admin_email; 
$email_subject = "Cape Town Landing Page submission: $fullname";
$email_body = "You have received a new message. \n \n".
" Here are the details:\n Name: $fullname \n Email: $email \n Telephone: $telephone\n Campus: $campus\n Course: $course\n City: $city\n Suburb: $suburb \n Timestamp: $timestamp \n URL: $page_url"; 

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers = "From: $from_email\n"; 
$headers .= 'bcc: dev@roimedia.co' . "\r\n";
$headers .= "Reply-To: $from_email";

mail($to,$email_subject,$email_body,$headers);

// Close connection
$mysqli->close();

// Redirect to Thank you page after insert
header("Location: https://www.capsicumcooking.com/lp-cape-town-general-enquiry/thank-you.html");




?>