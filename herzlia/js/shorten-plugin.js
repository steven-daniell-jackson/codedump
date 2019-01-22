/*
 * jQuery Shorten plugin 1.0.0
 *
 * Copyright (c) 2013 Viral Patel
 * //viralpatel.net
 *
 * Dual licensed under the MIT license:
 *   //www.opensource.org/licenses/mit-license.php
 */

jQuery(document).ready(function() {

	function readMoreExpander() {

		var showChar = 200;
		var ellipsestext = "...";
		var moretext = "Read more";
		var lesstext = "Read less";
		jQuery('.more').each(function() {
			var content = jQuery(this).html();
			if(content.length > showChar) {
				var c = content.substr(0, showChar);
				var h = content.substr(showChar-1, content.length - showChar);
				var h = content.substr(showChar, content.length - showChar);
				var html = c + '<span class="moreelipses">' + ellipsestext + '</span><span class="morecontent"><span>' + h + '</span><a href="" class="morelink">' + moretext + '</a></span>';
				jQuery(this).html(html);
			}
		});

		jQuery(".morelink").click(function(){
			if(jQuery(this).hasClass("less")) {
				jQuery(this).removeClass("less");
				jQuery(this).html(moretext);
			} else {
				jQuery(this).addClass("less");
				jQuery(this).html(lesstext);
			}
			jQuery(this).parent().prev().toggle();
			jQuery(this).prev().toggle();
			return false;
		});

	}

	readMoreExpander();

	function readMoreExpanderWithParagraphs() {

		// Read more expander with paragraphs
		var showChar = 200;
		var ellipsestext = "...";
		var moretext = "Read more";
		var lesstext = "Read less";
		jQuery('.morepar').each(function() {
			var content = jQuery(this).html();
			var textcontent = jQuery(this).text();
			if (textcontent.length > showChar) {
				var c = textcontent.substr(0, showChar);
				var html = '<span class="container"><span>' + c + '</span>' + '<span class="moreelipses">' + ellipsestext + '</span></span><span class="morecontent">' + content + '</span>';
				jQuery(this).html(html);
				jQuery(this).after('<a href="" class="moreparlink">' + moretext + '</a>');
			}
		});

		jQuery(".moreparlink").click(function() {
			if (jQuery(this).hasClass("less")) {
				jQuery(this).removeClass("less");
				jQuery(this).html(moretext);
				jQuery(this).prev().children('.morecontent').fadeToggle(100, function(){
					jQuery(this).prev().fadeToggle(100);
				});
			} else {
				jQuery(this).addClass("less");
				jQuery(this).html(lesstext);
				jQuery(this).prev().children('.container').fadeToggle(100, function(){
					jQuery(this).next().fadeToggle(100);
				});
			}
			return false;
		});

	}

	readMoreExpanderWithParagraphs();

});

console.log('jQuery Shorten plugin Active');