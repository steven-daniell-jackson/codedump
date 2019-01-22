
jQuery(".mini-contacts.phone").attr("name", "ct_number_1");

// ====================================
// === WRAP DIVS FOR OVERLAY EFFECT ===
// ====================================

jQuery(document).ready(function(){

    function sickyFooterPositioning() {
        jQuery(window).scroll(function() {
            if ( checkVisible( jQuery('#bottom-bar') ) ) {
                console.log('#bottom-bar is showing');
                jQuery('.sticky-footer-spacer').addClass('fix-me');
                jQuery('.sticky-footer-wrapper').addClass('free-me');
                jQuery('.sticky-footer-spacer').removeClass('free-me');
                jQuery('.sticky-footer-wrapper').removeClass('fix-me');
            } else {
                console.log('#bottom-bar is NOT showing');
                jQuery('.sticky-footer-spacer').removeClass('fix-me');
                jQuery('.sticky-footer-wrapper').removeClass('free-me');
                jQuery('.sticky-footer-spacer').addClass('free-me');
                jQuery('.sticky-footer-wrapper').addClass('fix-me');
            };
        });
    };
    sickyFooterPositioning();

    function checkVisible( elm, eval ) {
        eval = eval || "visible";
        var vpH = jQuery(window).height(); // Viewport Height
        var st = jQuery(window).scrollTop(); // Scroll Top
        var y = jQuery(elm).offset().top;
        var elementHeight = jQuery(elm).height();
        
        if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
        if (eval == "above") return ((y < (vpH + st)));
    };

    function expandStickyFooter() {
        jQuery(".sticky-footer-stripe .widgettitle").click(function(){
            jQuery('body').toggleClass('stop-scrolling');
            jQuery('.sticky-footer-wrapper').toggleClass('open-sticky');
            jQuery('.sticky-container').toggleClass('open-sticky');
            jQuery(".sticky-footer-stripe h2 .fa").toggleClass("fa-chevron-up");
            jQuery(".sticky-footer-stripe h2 .fa").toggleClass("fa-times");
        });
    };
    expandStickyFooter();

    function expandStickyFooterHeight() {
        var vpH = jQuery(window).height();
        var headerH = jQuery("#phantom").outerHeight();
        var getStickyHeaderH = jQuery(".sticky-footer-stripe .widgettitle").outerHeight();
        var getStickyWrapperH = jQuery(".sticky-footer-wrapper").outerHeight();
        var createStickyContainerH = vpH-getStickyHeaderH;
        jQuery('.sticky-footer-wrapper').css('max-height',vpH+'px');
        jQuery('.sticky-container').css('max-height',createStickyContainerH+'px');
        jQuery('.sticky-footer-spacer').css('height',getStickyHeaderH+'px');
        jQuery('.sticky-footer-spacer').css('max-height',getStickyHeaderH+'px');
    };
    expandStickyFooterHeight();

    function hideStickyFooterOnMobile() {
        if ( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            jQuery('.sticky-footer-wrapper').css('display','none');
            jQuery('.sticky-footer-spacer').css('display','none');
        } else {
            jQuery('.sticky-footer-wrapper').css('display','block');
            jQuery('.sticky-footer-spacer').css('display','block');
        }
    };
    hideStickyFooterOnMobile();

    // Resize functions
    jQuery(window).resize(function() {
        expandStickyFooterHeight();
        hideStickyFooterOnMobile();
    });

    jQuery("#fancy-header").wrapInner("<div class='header-overlay preload-me' id='enquiry'></div>");
    jQuery(".page-title.content-left").wrapInner("<div class='header-overlay preload-me'></div>");
    // jQuery(".testimonial-holder").wrapInner("<div class='header-overlay preload-me'></div>");

    var addReferenceID = function(){ 
        jQuery('.enquiryCampusesBtn > a').each(function(){
            console.log("triggered");
            console.log(jQuery(this).attr('href'));

            var oldUrl = jQuery(this).attr('href');
            oldUrl = oldUrl + "#enquiry";
            jQuery(this).attr('href', oldUrl)
        })

    }
    setTimeout(addReferenceID, 3000); 
});


function pSequalHeights() { 
    x = parseInt("180");
    y = jQuery( ".partnerships-sponsorships-item .p-s-item-content" ).height();

    if ( y < x ) {
        jQuery( ".partnerships-sponsorships-item .p-s-item-content" ).css('min-height', x);
    }
};

pSequalHeights();

function toggleEnquiryFormBtn() { 
    jQuery("a.enquiryFormBtn").click(function(){
        jQuery("#enquiryForm-holder").toggleClass("open");
    });
}
toggleEnquiryFormBtn();


// ============================================================
// === REMOVE SIDEBAR CLASS FOR CUSTOM POST TYPE - CAMPUSES ===
// ============================================================

function noSidebarForMe() { 
    jQuery("div#main").removeClass("sidebar-right");
    jQuery("div#main").addClass("sidebar-none");
};

jQuery(function(){
   if ( jQuery('body').hasClass('single-culinary-schools') || jQuery('body').hasClass('single-team') ) {
      noSidebarForMe();
  }
});

// =========================================
// === REPLACING HOMEPAGE EXCERPT CLASS  ===
// =========================================

function replaceHomepageExcerptClass() { 
    jQuery("div.stripe:first").removeClass("show-more-snippet-stripe");
    jQuery("div.stripe:first").addClass("homepage-show-more-snippet-stripe");
};

jQuery(function(){
   if (jQuery('body').hasClass('home')) {
      replaceHomepageExcerptClass();
  }
});

// ==========================
// === ADDING CLEAR FLOAT ===
// ==========================

function addClearfix() { 
    jQuery(".woocommerce.columns-4 .wf-container.description-under-image").append("<div class='clearfix'></div>");
    jQuery(".wpb_row.wf-container.shop-cat-section").append("<div class='clearfix'></div>");
};

jQuery(function(){
   if (jQuery('body').hasClass('archive')) {
      addClearfix();
  }
});

// === TO COURSE TABS ===

jQuery(".woocommerce-tabs .tabs").append("<div class='clearfix'></div>");

// ===========================
// === WRAP DIVS IN STRIPE ===
// ===========================

jQuery(".related.products").wrapInner("<div class='course-stripe stripe stripe-style-3 stripe-transparent-bg'></div>");

// ====================
// === REPLACE HTML ===
// ====================

jQuery(".all-available-header").html("All Available Courses");
jQuery(".available-header").html("Available Courses");
jQuery(".related.products h2").html("Popular Courses");
jQuery("body.events-archive h1.h1-size").html("Events");

// ===========================
// === REPLACE BUTTON TEXT ===
// ===========================

jQuery(window).scroll(function(event) {
 var y = jQuery(this).scrollTop();

// console.log(y);

if(y >= 100 ) {
    jQuery(".vc_grid-item.vc_clearfix.vc_col-sm-3.vc_visible-item.zoomIn.animated:last-child a.vc_gitem-link.vc_general.vc_btn3.vc_btn3-size-md.vc_btn3-shape-square.vc_btn3-style-flat.vc_btn3-color-default").html("View More");
}

});

// ===============================================
// === EXPANDER DESCRIPTION - STEVEN'S VERSION ===
// ===============================================

function expanderDescription() {

    jQuery('.show-more').click(function() {
        if(jQuery('.show-more-snippet').css('height') != '75px'){
            jQuery('.show-more-snippet').stop().animate({height: '75px'}, 200);
            jQuery(this).text('Read more');
        }
        else{
            jQuery('.show-more-snippet').css({height:'100%'});
            var xx = jQuery('.show-more-snippet').height();
            jQuery('.show-more-snippet').css({height:'75px'});
            jQuery('.show-more-snippet').stop().animate({height: xx}, 400);
        // ^^ The above is beacuse you can't animate css to 100%.  So I change it to 100%, get the value, change it back, then animate it to the value. If you don't want animation, you can ditch all of it and just leave: jQuery('.show-more-snippet').css({height:'100%'});^^ //
        jQuery(this).text('Read less');
    }});

}

// === FUNCTION CALL ===

expanderDescription();

// =======================
// === ACF GOOGLE MAPS ===
// =======================

(function($) {

/*
*  render_map
*
*  This function will render a Google Map onto the selected jQuery element
*
*  @type    function
*  @date    8/11/2013
*  @since   4.3.0
*
*  @param   $el (jQuery element)
*  @return  n/a
*/

function render_map( $el ) {

    // var
    var $markers = $el.find('.marker');

    // vars
    var args = {
        zoom        : 18,
        center      : new google.maps.LatLng(0, 0),
        mapTypeId   : google.maps.MapTypeId.ROADMAP,
        scrollwheel : false,
    };

    // create map               
    var map = new google.maps.Map( $el[0], args);

    // add a markers reference
    map.markers = [];

    // add markers
    $markers.each(function(){

        add_marker( $(this), map );

    });

    // center map
    center_map( map );

}

/*
*  add_marker
*
*  This function will add a marker to the selected Google Map
*
*  @type    function
*  @date    8/11/2013
*  @since   4.3.0
*
*  @param   $marker (jQuery element)
*  @param   map (Google Map object)
*  @return  n/a
*/

function add_marker( $marker, map ) {

    // var
    var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );

    // create marker
    var marker = new google.maps.Marker({
        position    : latlng,
        map         : map
    });

    // add to array
    map.markers.push( marker );

    // if marker contains HTML, add it to an infoWindow
    if( $marker.html() )
    {
        // create info window
        var infowindow = new google.maps.InfoWindow({
            content     : $marker.html()
        });

        // show info window when marker is clicked
        google.maps.event.addListener(marker, 'click', function() {

            infowindow.open( map, marker );

        });
    }

}

/*
*  center_map
*
*  This function will center the map, showing all markers attached to this map
*
*  @type    function
*  @date    8/11/2013
*  @since   4.3.0
*
*  @param   map (Google Map object)
*  @return  n/a
*/

function center_map( map ) {

    // vars
    var bounds = new google.maps.LatLngBounds();

    // loop through all markers and create bounds
    $.each( map.markers, function( i, marker ){

        var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );

        bounds.extend( latlng );

    });

    // only 1 marker?
    if( map.markers.length == 1 )
    {
        // set center of map
        map.setCenter( bounds.getCenter() );
        map.setZoom( 18 );
    }
    else
    {
        // fit to bounds
        map.fitBounds( bounds );
    }

}

/*
*  document ready
*
*  This function will render each map when the document is ready (page has loaded)
*
*  @type    function
*  @date    8/11/2013
*  @since   5.0.0
*
*  @param   n/a
*  @return  n/a
*/
var footerStatus = false;


    $(document).ready(function(){

        $('.acf-map').each(function(){

            render_map( $(this) );

        });

        /*==========  STICKY FOOTER  ==========*/

        // $('.sticky-footer-wrapper').onScreen({
        //    container: '#main',
        //    direction: 'vertical',
        //    doIn: function() {
        //    },
        //    doOut: function() {
        //    },
        //    tolerance: 0,
        //    throttle: 50,
        //    toggleClass: 'onScreen',
        //    lazyAttr: null,
        //    debug: false
        // });

        // var sticky = new Waypoint.Sticky({
        //   element: $('.sticky-footer-stripe')[0],
        //   direction: 'up',
        //   offset: 'bottom-in-view'
        // });

        // $('.sticky-footer-stripe .widgettitle').click(function(e) {
        //     if (footerStatus == false) {
        //         $('.sticky-footer-stripe .widget > div').slideDown('fast');
        //         $('.sticky-footer-stripe h2 .fa').removeClass('fa-chevron-up').addClass('fa-times');
        //         // $('.close-sticky-footer').addClass('open');
        //         // $('.sticky-container').append("<a class='sj-close' onclick='sj_custom_close()'>Close Window</a>");
        //         footerStatus = true;
        //         setTimeout(function() {
        //             Waypoint.refreshAll();
        //         }, 100);
        //     } else {
        //         $('.sticky-footer-stripe .widget > div').slideUp('fast');
        //         $('.sticky-footer-stripe h2 .fa').removeClass('fa-times').addClass('fa-chevron-up');
        //         // $('.close-sticky-footer').removeClass('open');
        //         // $('.sj-close').remove();
        //         footerStatus = false;
        //         setTimeout(function() {
        //             Waypoint.refreshAll();
        //         }, 100);
        //     }
        // });

    });

})(jQuery);


        // function sj_custom_close(){

        //     jQuery('.sticky-footer-stripe .widget > div').slideUp('fast');
        //             jQuery('.sticky-footer-stripe h2 .fa').removeClass('fa-times').addClass('fa-chevron-up');
        //             // jQuery('.close-sticky-footer').removeClass('open');
        //             // jQuery('.sj-close').remove();
        //             footerStatus = false;
        // }

//Custom Payment Image change - Steven Jackson - 7 Aug 2016


jQuery("#input_10_1").change(function(){console.log ("triggered");

student_status = jQuery("#input_10_1").val();
payment_img = jQuery(".vc_single_image-img");


if (student_status == "New Student") {
    payment_img.attr("src", "https://www.capsicumcooking.com/wp-content/uploads/2016/09/Arrows_1.png");
} else {
    payment_img.attr("src", "https://www.capsicumcooking.com/wp-content/uploads/2016/09/Arrows_2.png");
}


});
