<?php

/*** Child Theme Function  ***/

/* Disabled by Steven Jackson - Garbage Code. 

Error: Function cannot exist after conditional.
Error Created: Child theme will not register
*/

// if ( function_exists( 'cinerama_edge_child_theme_enqueue_scripts' ) ) {

function cinerama_edge_child_theme_enqueue_scripts() {
	$parent_style = 'cinerama-edge-default-style';

	wp_enqueue_style( 'cinerama-edge-child-style', get_stylesheet_directory_uri() . '/style.css', array( $parent_style ) );
}

add_action( 'wp_enqueue_scripts', 'cinerama_edge_child_theme_enqueue_scripts' );
// }

function sj_custom_js() {
	wp_enqueue_script( 'sj_custom', get_stylesheet_directory_uri() . '/js/sj-custom.js', array( 'jquery' ), false, true );
}
add_action( 'wp_enqueue_scripts', 'sj_custom_js', 26, 1 );


		// Adding Slate as an oEmbed provider
function slate_oembed_provider() {
	wp_oembed_add_provider( 'https://letitrainfilms.slateapp.com/work/*', 'https://letitrainfilms.slateapp.com/api/v2/oembed', false );

}
add_action( 'init', 'slate_oembed_provider' );


/************************************************************************************************
Add ACF to single portfolio Template.

Add Hook to template in the plugins file after theme update.

Hook: ADD do_action( 'sj_portfolio_fields_hook' ); before first closing <div>
Plugin Template files: 
/wp-content/plugins/cinerama-core/shortcodes/section-title/templates/section-title-reverse.php

NOTE: Add "<?php $title = get_the_title(); ?>" to the top of the template to fix the title not showing correctly.

Written by Steven Jackson - 26 Dec 2018
************************************************************************************************/

function sj_portfolio_fields() {

	if( get_field('client') ):
		$field = get_field_object('client');
		echo '<p class="sj-portfolio-acf-client">' . '<span>' . $field['label'] . '</span>' . "  " . $field['value'] . '</p><br/>';
	endif; 


	if( get_field('director') ):
		$field = get_field_object('director');
		echo '<p class="sj-portfolio-acf-director">' . '<span>' . $field['label'] . '</span>' . "  " . $field['value'] . '</p>';
	endif; 
}
add_action( 'sj_portfolio_fields_hook', 'sj_portfolio_fields' );


/************************************************************************************************
Add 'director' ACF field below title on portfolio listing page.

Add Hook to template in the plugins file after theme update.

Hook: ADD do_action( 'sj_portfolio_list_director_hook' ); as the last code in the template
Plugin Template: /wp-content/plugins/cinerama-core/post-types/portfolio/shortcodes/portfolio-list/templates/parts/title.php

Written by Steven Jackson - 26 Dec 2018
************************************************************************************************/

function sj_portfolio_list_title_director() { 
	if( get_field('director') ){
		$field = get_field_object('director');
		echo '<p class="sj-portfolio-list-director">' . $field['label'] . " : " . $field['value'] . '</p>';
	}
	else {
		if( get_field('dop') ):
			$field = get_field_object('dop');
			echo '<p class="sj-portfolio-list-director">' . $field['label'] . " : " . $field['value'] . '</p>';
		endif; 
	};
}
add_action( 'sj_portfolio_list_director_hook', 'sj_portfolio_list_title_director' );


/************************************************************************************************
Add 'client' ACF field before title off portfolio on listing page.

Add Hook to template in the plugins file after theme update.

Hook: REPLACE <?php echo esc_attr(get_the_title()); ?> with do_action( 'sj_portfolio_list_title_hook' ); in the template
Plugin Template: /wp-content/plugins/cinerama-core/post-types/portfolio/shortcodes/portfolio-list/templates/parts/title.php

Written by Steven Jackson - 26 Dec 2018
************************************************************************************************/

function sj_portfolio_list_title() { 
	if( get_field('client') ){
		$field = get_field_object('client');
		$field_value = $field['value'];
		echo "<span class='sj-portfolio-list-client'>$field_value</span> <br>". esc_attr(get_the_title());
	}
	else { echo esc_attr(get_the_title()); }
}
add_action( 'sj_portfolio_list_title_hook', 'sj_portfolio_list_title' );

/************************************************************************************************
Add HTML to portfolio after content.

Add Hook to template in the plugins file after theme update.

Hook: ADD do_action( 'sj_portfolio_after_content_hook' ); after the_content(); 
Plugin Template: /wp-content/plugins/cinerama-core/post-types/portfolio/shortcodes/portfolio-list/templates/parts/content.php

Written by Steven Jackson - 14 Jan 2018
************************************************************************************************/

function sj_portfolio_after_content() { 

	echo "<span class='sj-button-wrapper'><a href='/work/'><img class='sj-back-arrow' src='/wp-content/uploads/2019/01/backto-work-arrow.jpg'></a></span>";

}
add_action( 'sj_portfolio_after_content_hook', 'sj_portfolio_after_content' );