<?php

///////////////////
// ADD CUSTOM JS //
///////////////////

add_action('wp_enqueue_scripts', 'enqueue_campuses_google_map');
function enqueue_campuses_google_map() {
  wp_enqueue_script('google-maps', 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false', array(), '3', true);
}

// add_action( 'wp_enqueue_scripts', 'enqueue_crazy_egg_code' );
// function enqueue_crazy_egg_code() {
//   wp_enqueue_script( 'crazy-egg-code-js', get_stylesheet_directory_uri() . '/js/crazy-egg-code.js', array(), '' );
// }

// add_action( 'wp_enqueue_scripts', 'enqueue_waypoints' );
// function enqueue_waypoints() {
//   wp_enqueue_script( 'waypoints-js', get_stylesheet_directory_uri() . '/js/jquery.waypoints.min.js', array('jquery'), '4.0.0' );
// }

// add_action( 'wp_enqueue_scripts', 'enqueue_sticky' );
// function enqueue_sticky() {
//   wp_enqueue_script( 'sticky-js', get_stylesheet_directory_uri() . '/js/jquery-scrolltofixed.js', array('jquery'), '' );
// }

add_action( 'wp_enqueue_scripts', 'theme_enqueue_script' );
function theme_enqueue_script() {
  wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/custom.js', array(),'',true );
}

///////////////////////
// CUSTOM POST TYPES //
///////////////////////

remove_action( 'init', 'cptui_create_custom_post_types', 10 );
add_action( 'init', 'cptui_create_custom_post_types', 1 );


///////////////////////////
// ADD EXCERPTS TO PAGES //
///////////////////////////

add_action( 'init', 'my_add_excerpts_to_pages' );
function my_add_excerpts_to_pages() {
 add_post_type_support( 'page', 'excerpt' );
}

/////////////////////////////////////////////
// EXPANDER DESCRIPTION - STEVEN'S VERSION //
/////////////////////////////////////////////

if ( ! function_exists( 'woocommerce_taxonomy_archive_description' ) ) {

// Show an archive description on taxonomy archives

  function woocommerce_taxonomy_archive_description() {
    if ( is_tax( array( 'product_cat', 'product_tag' ) ) && get_query_var( 'paged' ) == 0 ) {
      $description = apply_filters( 'the_content', term_description() );

      if ( $description ) {
        echo '<div class="show-more-snippet-stripe stripe stripe-style-3 stripe-transparent-bg"><div class="show-more-snippet-wrapper"><div class="show-more-snippet">' . $description . '</div><a href="javascript:void(0)" class="show-more">Read more...</a></div></div>';
      }
    } 
  }
}

// Show a shop page description on product archives

function woocommerce_product_archive_description() {
  if ( is_post_type_archive( 'product' ) && get_query_var( 'paged' ) == 0 ) {
    $shop_page   = get_post( woocommerce_get_page_id( 'shop' ) );

    if ( $shop_page ) {
      $description = apply_filters( 'the_content', $shop_page->post_content );

      if ( $shop_page->post_excerpt ) {
        echo '<div class="show-more-snippet-stripe stripe stripe-style-3 stripe-transparent-bg"><div class="show-more-snippet-wrapper"><div class="show-more-snippet">' . apply_filters( 'woocommerce_short_description', $shop_page->post_excerpt ) . '</div><a href="javascript:void(0)" class="show-more">Read more...</a></div></div>';
      }

      if ( $description ) {
        echo '<div class="stripe stripe-style-3 stripe-transparent-bg">' . $description . '</div><div class="clearfix"></div>';
      }
    }
  }
}

//////////////////////////////
// MODIFY PRODUCT TEMPLATEs //
//////////////////////////////

// Display 30 products per page. Goes in functions.php
add_filter( 'loop_shop_per_page', create_function( '$cols', 'return 30;' ), 20 );

// move product description out tabs into summary

function woocommerce_template_product_description() {

    // echo '<div class="show-more-snippet">';
  woocommerce_get_template( 'single-product/tabs/description.php' );
    // echo '</div><a href="javascript:void(0)" class="show-more">Read more...</a>';

}
add_action( 'woocommerce_single_product_summary', 'woocommerce_template_product_description', 20 );

// removing default product tabs

add_filter( 'woocommerce_product_tabs', 'woo_remove_product_tabs', 98 );

function woo_remove_product_tabs( $tabs ) {

    unset( $tabs['description'] );        // Remove the description tab
    unset( $tabs['reviews'] );      // Remove the reviews tab
    // unset( $tabs['additional_information'] );    // Remove the additional information tab

    return $tabs;
  }

// remove on single product panel, "Product Description"
// since it already says "Description" on tab.

  add_filter('woocommerce_product_description_heading',
    'isa_product_description_heading');

  function isa_product_description_heading() {
    return '';
  }

///////////////////////
// EXTRA COURES TABS //
///////////////////////

  add_filter( 'woocommerce_product_tabs', 'my_theme_product_tabs' );

  function my_theme_product_tabs( $tabs ) {

  // ensure ACF is available
    if ( !function_exists( 'get_field' ) )
      return;

  // COURSE DURATION

    $content = trim( get_field( 'courses_field_01' ) );

    if ( !empty( $content ) ) {

      $tabs[] = array(
        'title' => 'Course Duration',
        'priority' => 15,
        'callback' => 'my_theme_courses_field_01'
        );

    }

  // COURSE OUTLINE

    $content = trim( get_field( 'courses_field_02' ) );

    if ( !empty( $content ) ) {

      $tabs[] = array(
        'title' => 'Course Outline',
        'priority' => 16,
        'callback' => 'my_theme_courses_field_02'
        );

    }

  // COURSE CERTIFICATION

    $content = trim( get_field( 'courses_field_04' ) );

    if ( !empty( $content ) ) {

      $tabs[] = array(
        'title' => 'Certification',
        'priority' => 18,
        'callback' => 'my_theme_courses_field_04'
        );

    }

    return $tabs;
  }

  function my_theme_courses_field_01() {
    echo '<h3 class="custom-tab-header">Course Duration</h3>';
    echo get_field( 'courses_field_01' );
  }

  function my_theme_courses_field_02() {
    echo '<h3 class="custom-tab-header">Course Outline</h3>';
    echo get_field( 'courses_field_02' );
  }

  function my_theme_courses_field_04() {
    echo '<h3 class="custom-tab-header">Certification</h3>';
    echo get_field( 'courses_field_04' );
  }

////////////////////////////
// EXCERPT WYSIWYG EDITOR //
////////////////////////////

  function lb_editor_remove_meta_box() {
    global $post_type;
/**
 *  Check to see if the global $post_type variable exists
 *  and then check to see if the current post_type supports
 *  excerpts. If so, remove the default excerpt meta box
 *  provided by the WordPress core. If you would like to only
 *  change the excerpt meta box for certain post types replace
 *  $post_type with the post_type identifier.
 */
if (isset($post_type) && post_type_supports($post_type, 'excerpt')){
  remove_meta_box('postexcerpt', $post_type, 'normal');
} 
}
add_action('admin_menu', 'lb_editor_remove_meta_box');

function lb_editor_add_custom_meta_box() {
  global $post_type;
    /**
     *  Again, check to see if the global $post_type variable
     *  exists and then if the current post_type supports excerpts.
     *  If so, add the new custom excerpt meta box. If you would
     *  like to only change the excerpt meta box for certain post
     *  types replace $post_type with the post_type identifier.
     */
    if (isset($post_type) && post_type_supports($post_type, 'excerpt')){
      add_meta_box('postexcerpt', __('Excerpt'), 'lb_editor_custom_post_excerpt_meta_box', $post_type, 'normal', 'high');
    }
  }
  add_action( 'add_meta_boxes', 'lb_editor_add_custom_meta_box' );

  function lb_editor_custom_post_excerpt_meta_box( $post ) {

    /**
     *  Adjust the settings for the new wp_editor. For all
     *  available settings view the wp_editor reference
     *  http://codex.wordpress.org/Function_Reference/wp_editor
     */
    $settings = array( 'textarea_rows' => '12', 'quicktags' => false, 'tinymce' => true);

    /**
     *  Create the new meta box editor and decode the current
     *  post_excerpt value so the TinyMCE editor can display
     *  the content as it is styled.
     */
    wp_editor(html_entity_decode(stripcslashes($post->post_excerpt)), 'excerpt', $settings);

    // The meta box description - adjust as necessary
    echo '&lt;p&gt;&lt;em&gt;Excerpts are optional, hand-crafted, summaries of your content.&lt;/em&gt;&lt;/p&gt;';
  }

///////////////////////////
// DEFAULT PRODUCT IMAGE //
///////////////////////////

/*
* goes in theme functions.php or a custom plugin. Replace the image filename/path with your own :)
*
**/
add_action( 'init', 'custom_fix_thumbnail' );

function custom_fix_thumbnail() {
  add_filter('woocommerce_placeholder_img_src', 'custom_woocommerce_placeholder_img_src');

  function custom_woocommerce_placeholder_img_src( $src ) {
    $upload_dir = wp_upload_dir();
    $uploads = untrailingslashit( $upload_dir['baseurl'] );
    $src = $uploads . '../../themes/dt-the7-child/images/default_product_img.jpg';

    return $src;
  }
}

///////////////////////////////
// BLOG EXCERPT LENGTH LIMIT //
///////////////////////////////

function custom_excerpt_length( $length ) {
  return 20;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );


/*==============================================
=            REGISTER STICKY WIDGET            =
==============================================*/

  /**
  * Creates a sidebar
  * @param string|array  Builds Sidebar based off of 'name' and 'id' values.
  */
  $stickySidebarArgs = array(
    'name'          => __( 'Sticky Footer' ),
    'before_widget' => '<li class="widget">',
    'before_title'  => '<h2 class="widgettitle">',
    'after_title'   => '<i class="fa fa-chevron-up"></i></h2><div class="sticky-container"><div class="sticky-container-inner">',
    'after_widget'  => '</div></div></li>'
    );

  register_sidebar( $stickySidebarArgs );

  $stickyOnlineSidebarArgs = array(
    'name'          => __( 'Sticky Footer Online' ),
    'before_widget' => '<li class="widget">',
    'before_title'  => '<h2 class="widgettitle"><span class="widgettitle-text">',
    'after_title'   => '<i class="fa fa-chevron-up"></i></span></h2><div class="sticky-container"><div class="sticky-container-inner">',
    'after_widget'  => '</div></div></li>'
    );

  register_sidebar( $stickyOnlineSidebarArgs );


// add taxonomy term of products category to body classes
  function woo_custom_taxonomy_in_body_class( $classes ){
    if( is_singular( 'product' ) )
    {
      $custom_terms = get_the_terms(0, 'product_cat');
      if ($custom_terms) {
        foreach ($custom_terms as $custom_term) {
          $classes[] = 'term-' . $custom_term->slug;
        }
      }
    }
    return $classes;
  }

  add_filter( 'body_class', 'woo_custom_taxonomy_in_body_class' );

/*=============================================
=            HEATMAP TRACKING CODE            =
=============================================*/

function heatmap_home() {
  if (is_page( 8 )) {
    echo '<script type="text/javascript">
    setTimeout(function(){var a=document.createElement("script");
    var b=document.getElementsByTagName("script")[0];
    a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0037/0045.js?"+Math.floor(new Date().getTime()/3600000);
    a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
  </script>';    
}
}

add_action( 'wp_head', 'heatmap_home', 99 );

function heatmap_culinary_schools() {
  if (is_page( 227 )) {
    echo '<script type="text/javascript">
    setTimeout(function(){var a=document.createElement("script");
    var b=document.getElementsByTagName("script")[0];
    a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0037/0045.js?"+Math.floor(new Date().getTime()/3600000);
    a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
  </script>';    
}
}

add_action( 'wp_head', 'heatmap_culinary_schools', 99 );

function heatmap_pro_cooking() {
  if (is_category( 8 )) {
    echo '<script type="text/javascript">
    setTimeout(function(){var a=document.createElement("script");
    var b=document.getElementsByTagName("script")[0];
    a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0037/0045.js?"+Math.floor(new Date().getTime()/3600000);
    a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
  </script>';    
}
}

add_action( 'wp_head', 'heatmap_pro_cooking', 99 );



function custom_payment_validation($result, $value, $form, $field) {

  $number = GFCommon::to_number( $value, '' );

    if ( $result['is_valid'] && $number > 64000 ) {
        $result['is_valid'] = false;
        $result['message'] = 'Cannot process amounts higher than R64 000';
    }
  return $result;
}


add_filter( 'gform_field_validation_10_25', 'custom_payment_validation', 10, 4 );




add_filter( 'gform_enable_field_label_visibility_settings', '__return_true' );


