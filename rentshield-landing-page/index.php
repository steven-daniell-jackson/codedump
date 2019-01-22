
<!DOCTYPE html>
<html lang="en">
<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Rentshield Landing Page</title>

	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<!-- <link rel="stylesheet" href="css/sj_stylesheet.css"> -->
	<link href="css/fontawesome-all.min.css" rel="stylesheet">

<style>
	@font-face {
    font-family: CRILLEE;
    src: url(../webfonts/CRILLEE.TTF);
}

* {box-sizing:border-box}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
/*.mySlides {
    display: none;
}*/

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

.fade:not(.show) {
  opacity: 1 !important;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

body {font-family: Arial, Helvetica, sans-serif; font-size:  26px; color: #373737}
header {padding-top: 3rem;}
section {padding-top: 2rem;}
.container {padding-bottom: 0rem;}
p {}
strong {}
section h2{padding: 1.5rem 0;color: #1a2632;font-weight: 700;font-size: 1.9rem; text-transform: uppercase; } 
div.slider-wrapper {padding: 0}

form h2 {font-weight: 700; font-size: 1.8rem;margin-bottom: 1.3rem;}
form span {font-size: 14px;margin:0.5rem;}
.form-group:nth-child(5){margin-bottom:0;}
.form-group{margin-bottom:0.5rem;}

div.form-wrapper {background-color: #e9e9e9; padding: 2rem;}
.form-wrapper strong {  font-size: 1rem;}
.form-control {border-radius: 0rem;  padding: 3px 10px}

footer {background-color: #1a2632; color: #fff; padding: 1.5rem 0; margin-top: 4rem;}
footer p{margin:0; font-size: 0.8rem; font-size:1.2rem;}


.btn-primary {
  background-color: #df2130;
  border-color: #df2130;
  padding: 0.8rem;
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  margin: 1rem 0rem;
}

.btn-primary:hover {
  background-color: #a53039;
  border-color: #df2130;
  padding: 0.8rem;
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  margin: 1rem 0rem;
}

.form-group:nth-child(6){display: none;}

.risks-heading {background-color: #e51f2c; padding: 0.6rem 0; font-family: CRILLEE;}
.risks-lead {background-color: #363636; padding: 1rem; }
.risks-heading h2 {font-size: 1.6rem; color: #fff; padding: 0;font-size: 2rem;}
.risks-lead p {font-size: 1.6rem; color: #fff}
.contact-row {
background-image: url('../img/background.png');
background-color: #cccccc;
background-size: cover;
background-repeat: no-repeat;
padding: 8rem 8rem;
margin-top: 4rem;
}

.contact-row strong{color: #df2130; text-transform: uppercase; }
.icon-row {padding: 3rem 0;}
.icon-row p{padding: 1rem 0;}
i {padding: 0rem 0.1rem;}

.commercial-lead p{font-weight: 700; font-size: 1.8rem;}
.commercial-lead span{color: #e51f2c}

.commercial-lease h2 {
    overflow: hidden;
    text-align: center;
     font-family: CRILLEE;
      font-weight: 700;
      font-style: italic;
}
.commercial-lease h2:before,
.commercial-lease h2:after {
    background-color: #000;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
}
.commercial-lease h2:before {
    right: 0.5em;
    margin-left: -50%;
}
.commercial-lease h2:after {
    left: 0.5em;
    margin-right: -50%;
}

.commercial-deposit h2 {
    overflow: hidden;
    text-align: center;
     font-family: CRILLEE;
     font-weight: 700;
      font-style: italic;
}
.commercial-deposit h2:before,
.commercial-deposit h2:after {
    background-color: #000;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
}
.commercial-deposit h2:before {
    right: 0.5em;
    margin-left: -50%;
}
.commercial-deposit h2:after {
    left: 0.5em;
    margin-right: -50%;
}

.commercial-deposit a {border: 1px solid #454545; padding: 1rem 1rem; color: #454545; border-radius: 0.5rem; text-transform: uppercase; font-size:1rem;}
.commercial-lease a {border: 1px solid #454545; padding: 1rem 1rem; color: #454545; border-radius: 0.5rem; text-transform: uppercase; font-size:1rem;}

.spacer {padding: 4rem 0;}

.copyright { font-size: 0.9rem;}


ul {
    list-style-image: url('../img/tick.png');
}
ul li{ font-size:1rem; }

@media (min-width: 1200px) {
.container {
    max-width: 1280px;
}
}


/*Thank you Page*/

.thank-you h1 {font-size: 1.7rem; text-transform: uppercase; padding: 1rem 0; font-weight: 700;}
.thank-you p {font-size: 1.4rem; text-transform: uppercase; padding: 1rem 0 2rem 0; font-weight: 700;}
.thank-you a {font-size: 1rem; text-transform: uppercase; padding: 1rem 2rem; font-weight: 700; background-color: #df2230; color: #fff;}
 header.thank-you-header{padding-top: 1rem;}

</style>

</head>
<body>

	<div class="container">
		<header class="row">
			<div class="col-md-8 slider-wrapper">
				<!-- Slideshow container -->
				<div class="slideshow-container">

					<!-- Full-width images with number and caption text -->
					<div class="mySlides fade">
						<img src="img/Commercial01.jpg" style="width:100%">
					</div>

					<div class="mySlides fade">
						<img src="img/Commercial02.jpg" style="width:100%">
					</div>

					<div class="mySlides fade">
						<img src="img/Commercial03.jpg" style="width:100%">
					</div>

				


				</div>
			</div>
			<div class="col-md-4 form-wrapper">
				<form action="contact.php" method="POST" name="contactform">
					<h2>Contact us for property <br>
						rental insurance and <br>	
					peace of mind</h2>
					<div class="form-group">
						<input type="text" class="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Full Name*" required>
					</div>
					<div class="form-group">
						<input type="email" class="form-control" id="email" name="email" placeholder="Email Address*" required>
					</div>
					<div class="form-group">
						<input type="phone" class="form-control" id="phone" name="phone" aria-describedby="phoneHelp" placeholder="Contact Number">
					</div>
					<div class="form-group">
						<input type="text" class="form-control" id="city" name="city" placeholder="City*" required>
					</div>
					<div class="form-group">
						<input type="text" class="form-control" id="address" name="address" placeholder="Address*">
					</div>
					<span>* required<br></span>
					<button type="submit" class="btn btn-primary">CONTACT ME</button>
				</form>
				<strong>NOTE: We will not share your details</strong>
			</div>
		</header>

		


		<section class="row icon-row">	
			<div class="col-md-4 text-center">
				<img src="img/revolution-icon.png" class="img-responsive" alt="revolution-icon">
				<p>Revolutionised the <br>Rental Market</p>
			</div>
			<div class="col-md-4 text-center">
				<img src="img/qualified.png" class="img-responsive" alt="qualified">
				<p>Qualified & Quality <br>Tenants</p>
			</div>
			<div class="col-md-4 text-center">
				<img src="img/market.png" class="img-responsive" alt="revolution-icon">
				<p>Revolutionised the <br>Rental Market</p>
			</div>
		</section>

		<section class="col-md-12 text-center">	
			<div class="container">
				<div class=" risks-heading">
					<h2>We alleviate the risks associated with residential letting</h2>
				</div>
				<div class=" risks-lead ">
					<p>Rentshield is a residential and commercial property-letting tool that provides landlords with a cutting-edge suite of rental insurance products to protect you against all the stresses associated with leasing out a residential or commercial property.	</p>
				</div>
			</div>

		</section>

	</div> <!-- End Container -->

	<div class="container">
		<section class="commercial-lead text-center">
			<div>
				<p>Included in our product suite are our <span>Commercial Lease Protection</span> <br>and <span>Commercial Deposit Protection</span> products. </p>
			</div>
		</section>

		<section class="col-md-12 commercial-lease">	
			<h2>Commercial Lease Protection</h2>
			<div class="text-center row">
				<div class="col-md-12">
					<a href="">Tell me more...</a>
				</div>
				<div class="col-md-12 spacer">
					<img src="img/benefits.png" class="img-responsive" alt="benefits">
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<ul>	
						<li>Covers loss of rental – up to three months’ rent in cover</li>
						<li>Covers legal fees for evictions – up to R100 000</li>
						<li>One month cover for a vacancy due to early termination</li>
					</ul>
				</div>
				<div class="col-md-6">
					<ul>	
						<li>Up to one months’ rent in cover in the event of absconding tenants</li>
						<li>Slow paying tenant solution – claims paid out within 48 hours</li>
						<li>Free tenant checking and vetting</li>
					</ul>
				</div>
			</div>

		</section>


		<section class="col-md-12 commercial-deposit">	
			<h2>Commercial Deposit Protection</h2>
			<div class="text-center row">
				<div class="col-md-12">
					<a href="">Tell me more...</a>
				</div>
				<div class="col-md-12 spacer">
					<img src="img/benefits.png" class="img-responsive" alt="benefits">
				</div>
			</div>
			<div class="row">

				<div class="col-md-6">
					<ul>	
						<li>No deposit required from the tenant</li>
						<li>Ability to increase monthly rental due to no deposit requirement</li>
						<li>Rental Insurance Cover for unpaid utilities up to required deposit amount</li>
					</ul>
				</div>
				<div class="col-md-6">
					<ul>	
						<li>Rental Insurance Cover for damages up to required deposit amount</li>
						<li>Free tenant checking and vetting</li>
					</ul>
				</div>
			</div>

		</section>

	</div> <!-- End Container -->



	<footer>
		<p class="text-center">
			<i class="fas fa-phone"></i>&nbsp;&nbsp;087 47000 222 | <i class="far fa-envelope"></i>&nbsp;&nbsp;info@rentshield.co.za
		</p>
		<p class="text-center">
			<i class="fab fa-twitter"></i>
			<i class="fab fa-facebook-f"></i>
			<i class="fab fa-linkedin-in"></i>
		</p>
		<br>
		<p class="text-center copyright">&copy; 2017 Rentshield (Pty) Ltd is an authorised financial services provider FSP45409. Underwritten by Guardrisk Insurance Company Limited. Terms and Conditions Apply - please enquire.</p>
	</footer>

	<script src="js/jquery-3.3.1.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/sj_scripts.js"></script>
</body>
</html>