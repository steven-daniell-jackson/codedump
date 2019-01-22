


jQuery(document).ready(function() { 

// Define the tolal Days
	var totalDays;
	function gravityFormsDateCalculator() {
		
		jQuery( "#input_6_29" ).change(function() {

			startDate = this.value;
			jQuery("#date_depart").html(startDate);
			console.log("startDate", startDate);
			bothValsChanged();

		});
		
		jQuery( "#input_6_30" ).change(function() {

			endDate = this.value;
			jQuery("#date_return").html(endDate);
			console.log("endDate", endDate);
			bothValsChanged();

		});

		function bothValsChanged() {

			var chosenStartDate = window.startDate;
			var chosenEndDate = window.endDate;

			if ( chosenStartDate && chosenEndDate ) {

				var start = new Date(chosenStartDate),
				end   = new Date(chosenEndDate),
				diff  = new Date(end - start),
				days  = diff/1000/60/60/24;

			console.log(days);

				jQuery( "#input_6_57" ).val(days).change();

// Assign the number to the Global totalDays variable
			totalDays = days;

			}

		}
		
	}

	function gravityFormsScript() {

		var testVal = jQuery( "#input_1_20" ).val();

		function tester() {
			if ( testVal = " " ) {
				jQuery( "#cart_preview" ).hide();
			} else {
				jQuery( "#cart_preview" ).show( 500 );
			}
		}

		// Hide The form on page load
		// jQuery("#cart_preview").hide();
		// window.onload = function() {
		// localStorage.tour = "";
		// localStorage.date = "";
		// }

		localStorage.tour;
		localStorage.date;

		// check if local variable isn't empty
		function checker() {
			if ( localStorage.tour != undefined ) {
				jQuery( "#tour" ).html( localStorage.tour );
				jQuery( "#date" ).html( localStorage.date );
			} else {
				jQuery( "#tour" ).html( " " );
				jQuery( "#date" ).html( " " );
			}
		}
		checker();

		function resetSelectToDefault() {
			var defaultSelect = jQuery('#input_1_20').find(":selected").text();
			jQuery( "#tour" ).html( defaultSelect );
		}
		resetSelectToDefault();

		jQuery( "#input_1_20" ).change( function() {

			// event.stopPropagation();
			tour = jQuery( "#input_1_20" ).val();
			localStorage.tour = tour;

			function tourValue() {
				switch ( localStorage.tour ) {
					case "Tour 1|10000":
						localStorage.tour = "Karoo Gardenroute Tour 14 days";
						break;
					case "Tour 2|20000":
						localStorage.tour = "West Coast Tour 10 days";
						break;
					case "Tour 3|30000":
						localStorage.tour = "Eastern Highlands 14 days";
						break;
					case "Tour 4|40000":
						localStorage.tour = "Cape Town - Victoria Falls Tour 14 days";
						break;
					case "Tour 5|50000":
						localStorage.tour = "Cape Town - Johannesburg Tour 14 days";
						break;
					case "Tour 6|60000":
						localStorage.tour = "Cape Town - Windhoek Tour 14 days";
						break;
					case "Tour 7|70000":
						localStorage.tour = "African Adventure Tour 9 days";
						break;
					case "Tour 8|80000":
						localStorage.tour = "Karoo Gardenroute Tour 7 days";
						break;
					case "Tour 9|90000":
						localStorage.tour = "Great African GS Challenge Tour 12 days";
						break;
					case "Tour 10|100000":
						localStorage.tour = "Munich to Corsica Tour 11 days";
						break;
					case "Tour 11|110000":
						localStorage.tour = "Cape Point or other destinations 1 day";
						break;
					case "Tour 12 Around Lesotho 10 days|120000":
						localStorage.tour = "Around Lesotho 10 days";
						break;
					default:
						localStorage.tour = "Select the tour you are interested in";
						break;
				}
			}
			tourValue();
			console.log( "The name is: " + localStorage.tour );
			jQuery( "#tour" ).html( localStorage.tour );
		} );

		jQuery( '#gform_1 input' ).on( 'change', function() {
				jQuery( "#bike_row" ).show( 1000 );
				bike = jQuery( 'input[name=input_21]:checked', '#gform_1' ).val();
				var model = bike;

				function formValue() {
					switch ( model ) {
						case "BIKE 1|10000":
							bike = "BMW G650GS";
							break;
						case "BIKE 2|20000":
							bike = "MW F700GS";
							break;
						case "BIKE 3|30000":
							bike = "BMW F800GS";
							break;
						case "BIKE 4|40000":
							bike = "BMW R1200GS";
							break;
						case "BIKE 5|50000":
							bike = "BMW R1200RT";
							break;
						case "BIKE 6|0":
							bike = "OWN MOTORBIKE";
							break;
						default:
							bike = "";
							break;
					}
				}
				formValue();
				jQuery( "#bike" ).html( bike );
		} );

		jQuery( ".gchoice_1_41_1" ).click( function() {
				localStorage.date = jQuery( "#choice_1_41_1" ).val();
				jQuery( "#date" ).html( localStorage.date );
		} );

		jQuery( '#gform_1 input' ).on( 'change', function() {
				accommodation = jQuery( 'input[name=input_26]:checked', '#gform_1' ).val();
				var acc = accommodation;

				function accValue() {
					switch ( acc ) {
						case "Single|5000":
							accommodation = "Single";
							break;
						case "Double|10000":
							accommodation = "Double";
							break;
						default:
							accommodation = "";
							break;
					}
				}
				accValue();
				jQuery( "#accommodation" ).html( accommodation );
		} );

		// jQuery('#gform_1 input').on('change', function() {
		// date= jQuery('.gchoice_1_41_1:checked').val();
		// jQuery("#date").html(date);
		// });

		jQuery( '#gform_1 input' ).on( 'change', function() {
			date = jQuery( 'input[name=input_41]:checked', '#gform_1' ).val();
			var reservation = date;

			function dateValue() {
				switch ( reservation ) {
					case "05.02.17 - 18.02.17|0":
						date = "05.02.17 - 18.02.17";
						break;
					case "05.11.17 - 18.11.17|0":
						date = "05.11.17 - 18.11.17";
						break;
				}
			}
			dateValue();
			jQuery( "#date" ).html( date );
		} );

	} // function gravityFormsScript()

	function gravityFormsScript_6() {

		var testVal = jQuery( "#input_6_20" ).val();

		function tester() {
			if ( testVal = " " ) {
				jQuery( "#cart_preview" ).hide();
			} else {
				jQuery( "#cart_preview" ).show( 500 );
			}
		}

		// Hide The form on page load
		// jQuery("#cart_preview").hide();
		// window.onload = function() {
		// localStorage.tour = "";
		// localStorage.date = "";
		// }

		localStorage.tour;
		localStorage.date;

		// check if local variable isn't empty
		function checker() {
			if ( localStorage.tour != undefined ) {
				jQuery( "#tour" ).html( localStorage.tour );
				jQuery( "#date" ).html( localStorage.date );
			} else {
				jQuery( "#tour" ).html( " " );
				jQuery( "#date" ).html( " " );
			}
		}
		checker();

		function resetSelectToDefault() {
			var defaultSelect = jQuery('#input_6_20').find(":selected").text();
			jQuery( "#tour" ).html( defaultSelect );
		}
		resetSelectToDefault();


		
 // Define the mode variable outside the function that follows so the value can be used globaly
 		var model;
		jQuery( '#gform_6 input' ).on( 'change', function() {
				// jQuery( "#bike_row" ).show( 1000 );
				bike = jQuery( 'input[name=input_21]:checked, input[name=input_58]:checked, input[name=input_59]:checked', '#gform_6' ).val();
				model = bike;

				function formValue() {
					switch ( model ) {
						case "BIKE 1|1890":
							bike = "BMW F700 GS";
							startCalc(insVal);
							break;
						case "BIKE 2|1990":
							bike = "BMW F800 GS";
							startCalc(insVal);
							break;
						case "BIKE 3|2090":
							bike = "BMW F800 GS Adventure";
							startCalc(insVal);
							break;
						case "BIKE 4|2390":
							bike = "BMW R1200 R";
							startCalc(insVal);
							break;
						case "BIKE 5|2390":
							bike = "BMW R1200 GS LC";
							startCalc(insVal);
							break;
						case "BIKE 6|2790":
							bike = "BMW R1200 GS Adventure LC";
							startCalc(insVal);
							break;
						case "BIKE 7|2650":
							bike = "BMW R1200 RT LC incl. of panniers";
							startCalc(insVal);
							break;	
						case "BIKE 8|3050":
							bike = "BMW K1600 GT incl. of panniers";
							startCalc(insVal);
							break;
						case "BIKE 9|3050":
							bike = "BMW K1600 GTL incl. of luggage";
							startCalc(insVal);
							break;

						case "BIKE 1|1690":
							bike = "BMW F700 GS";
							startCalc(insVal);
							break;
						case "BIKE 2|1760":
							bike = "BMW F800 GS";
							startCalc(insVal);
							break;
						case "BIKE 3|1890":
							bike = "BMW F800 GS Adventure";
							startCalc(insVal);
							break;
						case "BIKE 4|2190":
							bike = "BMW R1200 R";
							startCalc(insVal);
							break;
						case "BIKE 5|2190":
							bike = "BMW R1200 GS LC";
							startCalc(insVal);
							break;
						case "BIKE 6|2590":
							bike = "BMW R1200 GS Adventure LC";
							startCalc(insVal);
							break;
						case "BIKE 7|2450":
							bike = "BMW R1200 RT LC incl. of panniers";
							startCalc(insVal);
							break;
						case "BIKE 8|2850":
							bike = "BMW K1600 GT incl. of panniers";
							startCalc(insVal);
							break;
						case "BIKE 9|2850":
							bike = "BMW K1600 GTL incl. of luggage";
							startCalc(insVal);
							break;

						case "BIKE 1|1490":
							bike = "BMW F700 GS";
							startCalc(insVal);
							break;	
						case "BIKE 2|1590":
							bike = "BMW F800 GS";
							startCalc(insVal);
							break;
						case "BIKE 3|1690":
							bike = "BMW F800 GS Adventure";
							startCalc(insVal);
							break;	
						case "BIKE 4|1990":
							bike = "BMW R1200 R";
							startCalc(insVal);
							break;
						case "BIKE 5|1990":
							bike = "BMW R1200 GS LC";
							startCalc(insVal);
							break;
						case "BIKE 6|2390":
							bike = "BMW R1200 GS Adventure LC";
							startCalc(insVal);
							break;
						case "BIKE 7|2250":
							bike = "BMW R1200 RT LC incl. of panniers";
							startCalc(insVal);
							break;	
						case "BIKE 8|2650":
							bike = "BMW K1600 GT incl. of panniers";
							startCalc(insVal);
							break;	
						case "BIKE 9|2650":
							bike = "BMW K1600 GTL incl. of luggage";
							startCalc(insVal);
							break;				

						default:
							bike = "";
							break;
					}
				}
				formValue();
				jQuery( "#bike" ).html( bike );
		} );
	
/*************************Caltulate the Total************************************/

// Define the insVal variable outside the function that follows so the value can be used globaly
 		var insVal;

	jQuery( '#gform_6 input' ).on( 'change', function() {
		var ins = jQuery( 'input[name=input_61]:checked', '#gform_6' ).val();
		insVal = ins;

	function getInsurance() {
		switch ( ins ) {
						case "20000":
							ins = "20000"; 
							//startCalc("20000");
							break;
						case "35000":
							ins = "35000";
							//startCalc("35000");
							break;
						default:
							ins = "0"; 
							break;

		}
	}
})
;


function startCalc(insAmount) { var newPrice;
		splitVal = model.split("|");
		newPrice = splitVal[1];
	if (insAmount != undefined) {
		var totalAmount = (newPrice * totalDays + parseInt(insAmount));
		jQuery( "#price" ).html("R" + totalAmount );
	} else {
		var totalAmount = newPrice * totalDays;
			jQuery( "#price" ).html("R" + totalAmount );
	}

}



/*****************************************************************************/
	



/*
		jQuery( '#gform_6 input' ).on( 'change', function() {
				jQuery( "#price_row" ).show( 1000 );
				price = jQuery( 'input[name=input_60]:checked', '#gform_6' ).val();
				var model = price;

				function formValue() {
					switch ( model ) {
						case "BIKE 1|10000":
							price = "BMW G650GS";
							break;
					}
				}
				formValue();
				jQuery( "#bike" ).html( bike );
		} );





		jQuery( ".gchoice_6_41_1" ).click( function() {
				localStorage.date = jQuery( "#choice_6_41_1" ).val();
				jQuery( "#date" ).html( localStorage.date );
		} ); */

		
		// jQuery('#gform_6 input').on('change', function() {
		// date= jQuery('.gchoice_6_41_1:checked').val();
		// jQuery("#date").html(date);
		// });

		jQuery( '#gform_6 input' ).on( 'change', function() {
			date = jQuery( 'input[name=input_41]:checked', '#gform_6' ).val();
			var reservation = date;

			function dateValue() {
				switch ( reservation ) {
					case "05.02.17 - 18.02.17|0":
						date = "05.02.17 - 18.02.17";
						break;
					case "05.11.17 - 18.11.17|0":
						date = "05.11.17 - 18.11.17";
						break;
				}
			}
			dateValue();
			jQuery( "#date" ).html( date );
		} );

	} // function gravityFormsScript()

	// Execute script on window resize
	jQuery(window).resize(function() {

		// Code to go here

		console.log('Window Resize JS Active')

	});

	// // Execute script in Gravity Forms
	// jQuery(document).bind('gform_post_render', function() {
	// 	gravityFormsScript();
	// 	gravityFormsScript_6();
	// 	console.log('Gravity Forms JS Active')
	// });

	// Execute script in Gravity Forms
	jQuery(document).bind('gform_post_render', function(event, formId) {

		if ( formId == 1 ) {

			gravityFormsScript();
			console.log('Gravity Forms ID 1 Active')

		} else if ( formId == 6 ) {

			gravityFormsScript_6();
			gravityFormsDateCalculator();
			console.log('Gravity Forms ID 6 Active')
			
		}

		console.log('Gravity Forms JS Active')

	});


}); // document ready

console.log('Custom JS Active');


