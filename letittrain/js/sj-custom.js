jQuery(function(){ 

// Steven Jackson - 13 December 2018
	if(window.location.hash) {

	// Fix: Menu not reloading on /work/
	jQuery('.menu-item-type-custom').click(function(){
	location.reload();
	});

		if (window.location.hash != '#showall') {
			let location = window.location.hash.replace('#','');
			let productCategory = ".portfolio-category-" + location;
			
			setTimeout(function(){ 
			jQuery('[data-filter]').removeClass('edgtf-pl-current');
			jQuery('[data-filter="'+ productCategory +'"]').click();
			jQuery('[data-filter="'+ productCategory +'"]').addClass('edgtf-pl-current');
			}, 1000);
			
			jQuery(productCategory).addClass('edgtf-showing edgtf-filter-trigger').show().css( 'opacity', '1' );

			console.log(location);
		}
	} 
	jQuery('[data-filter]').removeClass('edgtf-pl-current');

	
});