// Written by Steven Jackson - 5 April 2017

$( document ).ready(function() {
	
$('.table-detailed-product tr')
  .nextUntil( ".trigger" )
  .hide();

	
});

// Trigger/Animate accordion and change icon

$(".trigger").click(function(){
var x = $(this).find('i')
.hasClass("fa-plus");

 x ? $(this).find('i')
 .removeClass('fa-plus')
 .addClass('fa-minus') : $(this).find('i').removeClass('fa-minus').addClass('fa-plus');
	
	$(this)
  .nextUntil( ".trigger" )
  .animate({
  	height: "toggle", 
  	opacity: "toggle"}, 
  	"medium");
});

// Dropdown Currency Changer

$("#dropdown1 li").click(function(){
console.log($(this).attr('id'));

switch($(this).attr('id')) {
    case 'africa':
       $('#spprice2')
       .html('ZAR 3500 <br>(Annual Subscription)');
        break;
    case 'us':
        $('#spprice2')
        .html('USD 260 <br>(Annual Subscription)');
        break;
case 'uk':
        $('#spprice2')
        .html('GBP 205 <br>(Annual Subscription)');
        break;
}

  $('.dropdown-button').dropdown('close');

});