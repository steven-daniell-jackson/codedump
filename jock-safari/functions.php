<?php


/* ---------------------------------------------------------------------------
 * Child Theme URI | DO NOT CHANGE
 * --------------------------------------------------------------------------- */
define( 'CHILD_THEME_URI', get_stylesheet_directory_uri() );


/* ---------------------------------------------------------------------------
 * Define | YOU CAN CHANGE THESE
 * --------------------------------------------------------------------------- */

// White Label --------------------------------------------
define( 'WHITE_LABEL', false );

// Static CSS is placed in Child Theme directory ----------
define( 'STATIC_IN_CHILD', false );


/* ---------------------------------------------------------------------------
 * Enqueue Style
 * --------------------------------------------------------------------------- */
add_action( 'wp_enqueue_scripts', 'mfnch_enqueue_styles', 101 );
function mfnch_enqueue_styles() {
	
	// Enqueue the parent stylesheet
// 	wp_enqueue_style( 'parent-style', get_template_directory_uri() .'/style.css' );		//we don't need this if it's empty
	
	// Enqueue the parent rtl stylesheet
	if ( is_rtl() ) {
		wp_enqueue_style( 'mfn-rtl', get_template_directory_uri() . '/rtl.css' );
	}
	
	// Enqueue the child stylesheet
	wp_dequeue_style( 'style' );
	wp_enqueue_style( 'style', get_stylesheet_directory_uri() .'/style.css' );
	
}


/* ---------------------------------------------------------------------------
 * Load Textdomain
 * --------------------------------------------------------------------------- */
add_action( 'after_setup_theme', 'mfnch_textdomain' );
function mfnch_textdomain() {
	load_child_theme_textdomain( 'betheme',  get_stylesheet_directory() . '/languages' );
	load_child_theme_textdomain( 'mfn-opts', get_stylesheet_directory() . '/languages' );
}

/*===================================
=            ROI UPDATES            =
===================================*/

/*----------  Enqueue styles and scripts  ----------*/

function roi_enq() {
	
	/* Magnific Popup CSS */
	
	wp_enqueue_style( 'magnific-css', get_stylesheet_directory_uri() . '/css/magnific-popup.css', null, '1.1.0', 'all' );

	/* Magnific Popup JS */
	
	wp_enqueue_script( 'magnific-popup', get_stylesheet_directory_uri() . '/js/jquery.magnific-popup.min.js', array('jquery'), '1.1.0', true );

	/* Enquire JS */
	
	wp_enqueue_script( 'enquire-js', get_stylesheet_directory_uri() . '/js/enquire.min.js', array('jquery'), '2.1.2', true );

	/* Waypoints JS */
	
	wp_enqueue_script( 'waypoints-js', get_stylesheet_directory_uri() . '/js/jquery.waypoints.min.js', array('jquery'), '4.0.0', true );

	/* Custom JS */
	
	wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/custom.js', array('jquery', 'magnific-popup', 'enquire-js', 'waypoints-js'), '1.0', true );
}

add_action( 'wp_enqueue_scripts', 'roi_enq', 10 );

/*----------  MAILCHIMP INTEGRATION  ----------*/

add_action( 'gform_after_submission_2', 'send_to_mailchimp', 10, 2 );

function send_to_mailchimp( $entry, $form ) {

	require_once('Mailchimp.php');

	$Mailchimp = new Mailchimp('5c2efb410c2abab61272a7a4b9415792-us13');
	$Mailchimp_Lists = new Mailchimp_Lists( $Mailchimp );

	$merge_vars = array( 
		'EMAIL' => rgar( $entry, '3' ),
		'FNAME' => rgar( $entry, '1' ),
		'LNAME' => rgar( $entry, '2' ),
		'MMERGE3' => rgar( $entry, '4' )
	);

	$email = array('email' => rgar( $entry, '3' ));

	$listChoice = rgar( $entry, '6' );

	$list_id = ($listChoice == 'I work in trade and tourism') ? '21641ffb10' : '8969555682';

	$result = $Mailchimp_Lists->subscribe($list_id, $email, $merge_vars);
}

global $more;
$more = 0;

the_content('Continue Reading'); 




?>