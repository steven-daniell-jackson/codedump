jQuery(document).ready(function() {

	jQuery( ".vc_tta-tab>a" ).click(function() {

		jQuery(window).resize();
		console.log('Simulated window resize on click');

	});

	function adjustHeight() {

		var reportImgHeight = jQuery( ".report-img" ).width();
		jQuery( ".report-img" ).css( "min-height", reportImgHeight*1.4333 );

	} adjustHeight();

	function forceFullWidth() {

		// Variables
		var viewportWidth = jQuery( window ).width();
		var viewportHeight = jQuery( window ).height();

		var wfWrapOuterWidth = jQuery( ".wf-wrap" ).outerWidth();
		var wfWrapWidth = jQuery( ".wf-wrap" ).width();

		// Force full width variables
		var ffw_a = viewportWidth - wfWrapOuterWidth;
		var ffw_b = ffw_a/2;
		var ffw_c = ffw_b+15;
		var ffw_d = ffw_b+30;

		// Force full width
		jQuery( "#main .force-full-width" ).css( "width", viewportWidth );
		jQuery( "#main .force-full-width" ).css( "margin-left", -ffw_c );
		jQuery( "#main #content .force-full-width" ).css( "width", viewportWidth );
		jQuery( "#main #content .force-full-width" ).css( "margin-left", -ffw_d );
		jQuery( "#main #content .force-full-width .vc_column-inner" ).css( "max-width", wfWrapWidth );

	} forceFullWidth();

	function pdfFunction() {

		if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

		 // Do nothing...

		} else {

			jQuery("a").each(function() {
				if (this.href.indexOf('.pdf') != -1) {
					console.log('number of pdfs on page');
					jQuery(this).addClass('fancybox-pdf')
				}
			});

		}

		setTimeout(function() {

			jQuery( ".fancybox-pdf" ).click(function() {
				console.log('No Scroll Enabled');
				jQuery('body').addClass('no-scroll');
			});

			jQuery( "#fancybox-close" ).click(function() {
				console.log('No Scroll Disabled');
				jQuery('body').removeClass('no-scroll');
			});

		}, 1000);

	} pdfFunction();

	function contactHub() {

		jQuery( '#contact-hub #campus-select option' ).each(function() {

			var className = jQuery( "#contact-hub #campus-select option:selected" ).val();

			if ( jQuery(this).is(':selected' ) ) {
					jQuery( '#contact-hub .contact-cell').addClass( 'hide' );
					jQuery( '#contact-hub #contact-holder .' + className).removeClass( 'hide' );
					jQuery( this ).addClass( 'selected' );
			}

		});

		jQuery('#contact-hub #campus-select').on('change', function(ev) {

			var className = jQuery( "#contact-hub #campus-select option:selected" ).val();

			jQuery( '#contact-hub .contact-cell').addClass('hide' );
			jQuery( '#contact-hub #contact-holder .' + className ).removeClass( 'hide' );

		});

	} contactHub();

	function masonry() {

		var jQuerygrid = jQuery('.masonry-grid').imagesLoaded( function() {

			// init Masonry after all images have loaded
			jQuerygrid.masonry({

				// options
				percentPosition: true,
				columnWidth: '.masonry-grid-sizer',
				gutter: '.masonry-gutter-sizer',
				itemSelector: '.masonry-grid-item',
			});
		});

	} masonry();

	function postPopup() {

		// Disable first and last
		jQuery('.headline-container:first .nav-popup-btn-prev').addClass('quit-bt');
		jQuery('.headline-container:last .nav-popup-btn-next').addClass('quit-bt');

		// Open popup on button click
		jQuery( ".open-popup-btn" ).click(function() {
			jQuery('.popup-content-overlay').toggleClass('opened');
			jQuery(this).next('.popup-content').toggleClass('opened');
			jQuery('.popup-content.opened .popup-content-inner').addClass('opened');
			jQuery('.popup-content-inner.opened').parents('.headline-container').addClass('opened');
			jQuery('body').addClass('no-scroll');
			postPopupResponsive();
			forceFullWidth();
		});
		// Open popup on image click
		jQuery( ".open-popup-img-btn" ).click(function() {
			jQuery('.popup-content-overlay').toggleClass('opened');
			jQuery(this).next().children('.popup-content').toggleClass('opened');
			jQuery('.popup-content.opened .popup-content-inner').addClass('opened');
			jQuery('.popup-content-inner.opened').parents('.headline-container').addClass('opened');
			jQuery('body').addClass('no-scroll');
			postPopupResponsive();
			forceFullWidth();
		});
		// Close popup on exit button click
		jQuery( ".exit-popup-btn" ).click(function() {
			jQuery('.popup-content-overlay').removeClass('opened');
			jQuery('.popup-content').removeClass('opened');
			jQuery('.popup-content-inner').removeClass('opened');
			jQuery('.headline-container').removeClass('opened');
			jQuery('body').removeClass('no-scroll');

			jQuery('.popup-content-inner').scrollTop(0);
		});
		// Open next popup on click
		jQuery( ".nav-popup-btn-next" ).click(function() {
			jQuery('.headline-container.opened').next('.headline-container').addClass('next');
			jQuery('.popup-content').removeClass('opened');
			jQuery('.popup-content-inner').removeClass('opened');
			jQuery('.headline-container').removeClass('opened');

			jQuery('.headline-container.next').addClass('opened');
			jQuery('.headline-container.next .popup-content').addClass('opened');
			jQuery('.headline-container.next .popup-content-inner').addClass('opened');

			jQuery('.headline-container.next').removeClass('next');

			jQuery('.popup-content-inner').scrollTop(0);
		});
		// Open previous popup on click
		jQuery( ".nav-popup-btn-prev" ).click(function() {
			jQuery('.headline-container.opened').prev('.headline-container').addClass('prev');
			jQuery('.popup-content').removeClass('opened');
			jQuery('.popup-content-inner').removeClass('opened');
			jQuery('.headline-container').removeClass('opened');

			jQuery('.headline-container.prev').addClass('opened');
			jQuery('.headline-container.prev .popup-content').addClass('opened');
			jQuery('.headline-container.prev .popup-content-inner').addClass('opened');

			jQuery('.headline-container.prev').removeClass('prev');

			jQuery('.popup-content-inner').scrollTop(0);
		});

	} postPopup();

	function circleDivs() {

		// Circle divs
		var circleHeight = jQuery( ".headline-container" ).width();
		jQuery( ".container-circle" ).css( "height", circleHeight );

	} circleDivs();

	function listExpander() {

		jQuery(".list-expander").each(function() {

			if (jQuery(this).children('.col-cell').length > 3) {
				jQuery(this).children('.list-expander-btn.more').show();
				jQuery(this).children('.list-expander-btn.less').hide();
				// jQuery(this).children('.col-cell:gt(2)').addClass('hide');
				jQuery(this).children('.col-cell:gt(2)').hide();
			} else {
				jQuery(this).children('.list-expander-btn.more').hide();
				jQuery(this).children('.list-expander-btn.less').hide();
			}

			jQuery(this).children('.list-expander-btn.more').click(function() {
				jQuery(this).hide();
				jQuery(this).parent().find('.list-expander-btn.less').show();
				// jQuery(this).parent().find('.col-cell').removeClass('hide');
				jQuery(this).parent().find('.col-cell').slideDown();
			});

			jQuery(this).children('.list-expander-btn.less').click(function() {
				jQuery(this).parent().find('.list-expander-btn.more').show();
				jQuery(this).hide();
				// jQuery(this).parent().find('.col-cell:lt(3)').addClass('hide');
				jQuery(this).parent().find('.col-cell:gt(2)').slideUp();
				jQuery(this).parent().find('.col-cell:lt(3)').slideDown();
			});

		});

	} listExpander();

	function actingHomepageLogo() {

		// Vertical align center image
		var ahhiHeight = jQuery( ".acting-homepage-header-img .ah-img" ).height();
		jQuery( ".acting-homepage-logo" ).css( "height", ahhiHeight );

		jQuery(".acting-homepage-header-img .ah-img").load(function(){
			var ahhiHeight = jQuery(this).height();
			jQuery( ".acting-homepage-logo" ).css( "height", ahhiHeight );
		});

	} actingHomepageLogo();

	function othersFunctions() {
    
		// Swop div positions
		jQuery( "#five-pillars" ).prependTo( jQuery( "#content" ) );
		jQuery( "#herzlia-live" ).insertAfter( "#online-shop" );
		jQuery( "#happenings-at-herzlia" ).insertAfter( "#five-pillars" );

		// Activate first tab
		jQuery( ".vc_tta-tab:first-child" ).addClass( "vc_active" );
		jQuery( ".vc_tta-panel:first-child" ).addClass( "vc_active" );

		// Timeline layout
		jQuery( ".timeline-item:nth-child(even)" ).addClass( "timeline-inverted" );

		// // Replace shop button with icon
		// jQuery( ".shop-button>a>span" ).replaceWith( "<span><svg version='1.1' viewbox='0 0 26 26' xmlns='http://www.w3.org/2000/svg'><path d='M1.195,3.278h2.277l5.145,15.435C7.532,19.09,6.75,20.121,6.75,21.334c0,1.531,1.246,2.777,2.778,2.777 c1.531,0,2.777-1.246,2.777-2.777c0-0.507-0.139-0.98-0.376-1.39h7.002c-0.238,0.409-0.376,0.883-0.376,1.39 c0,1.531,1.247,2.777,2.777,2.777c1.532,0,2.778-1.246,2.778-2.777c0-1.532-1.246-2.778-2.778-2.778H10.029l-0.926-2.778h12.926 c0.299,0,0.563-0.19,0.659-0.475l2.777-8.333c0.069-0.212,0.035-0.444-0.095-0.625c-0.132-0.181-0.341-0.289-0.564-0.289H5.862 L4.631,2.364C4.537,2.081,4.271,1.889,3.972,1.889H1.195C0.812,1.889,0.5,2.2,0.5,2.583C0.5,2.967,0.812,3.278,1.195,3.278 M21.333,19.944c0.767,0,1.389,0.624,1.389,1.39s-0.622,1.389-1.389,1.389c-0.766,0-1.389-0.623-1.389-1.389 S20.567,19.944,21.333,19.944 M9.528,19.944c0.765,0,1.388,0.624,1.388,1.39s-0.623,1.389-1.388,1.389 c-0.766,0-1.389-0.623-1.389-1.389S8.762,19.944,9.528,19.944 M23.842,7.445l-2.314,6.944H8.64L6.325,7.445H23.842z'></path></svg></span>" );

		// Mimic gallery click
		jQuery( ".gallery-btn" ).click(function(){

			console.log('Gallery Click');
			// jQuery( ".dt-photos-shortcode .iso-item:first-of-type .rollover" ).click();
			jQuery( "#campus-galleries" ).toggleClass( "open" );
			jQuery( ".gallery-btn" ).toggleClass( "active" );

		});

	} othersFunctions();

	function newBlankFunction() {

		// Code to go here...

	} newBlankFunction();

	//////// NOT NOW ////////

	function postPopupResponsive() {

		// General variables
		var viewportHeight = jQuery( window ).height();

		// Post Popup size variables
		var ps_a = viewportHeight;
		var ps_b = ps_a - 180;

		if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

			// Do nothing...

		} else {

			// Post Popup size
			jQuery( ".popup-content-inner" ).css( "min-height", ps_b );
			jQuery( ".popup-content-inner" ).css( "max-height", ps_b );

		}

	}

	function gravityFormScripts() {

		// RevSlider change on GF's next click
		jQuery( ".gform_next_button" ).click(function() {
			revapi5.revnext();
		});
		jQuery( "#gform_submit_button_1" ).click(function() {
			revapi5.revnext();
		});

		// Open popup on click
		jQuery( ".gf-open-popup-btn" ).click(function(){
			jQuery('.popup-content-overlay').addClass('opened');
			jQuery('.popup-content').addClass('opened');
			jQuery('body').addClass('no-scroll');
			postPopupResponsive();
			forceFullWidth();
		});
		jQuery( ".exit-popup-btn" ).click(function(){
			jQuery('.popup-content-overlay').removeClass('opened');
			jQuery('.popup-content').removeClass('opened');
			jQuery('body').removeClass('no-scroll');
		});

	}

	// Execute script on window resize
	jQuery(window).resize(function() {

		forceFullWidth();

		adjustHeight();

		postPopupResponsive();

		actingHomepageLogo();

		circleDivs();

		console.log('Window Resize JS Active');

	});

	// Execute script in Gravity Forms
	jQuery(document).bind('gform_post_render', function(){
	
		gravityFormScripts();

		console.log('Gravity Forms JS Active');

	});

	// Simulate window resize after page load
	jQuery(window).bind("load", function() {

		jQuery(window).resize();

		console.log('Blind Load Active');

	});

}); // document ready

console.log('Custom JS Active');