$(document).ready(function() {
	function heightDetect() {
	 	$(".main_head").css("height", $(window).height());	
	 };
	heightDetect();
	 $(window).resize(function() {
	 	heightDetect();
	 });



$(window).scroll(function() {
	var st = $(this).scrollTop();
	
	$(".presentation").css({
		"transform" : "translate(0%, -" + st /7 + "%" });
	$(".number-art").css({
		"transform" : "translate(0%, -" + st /4 + "%" });
	$(".portfolio_let").css({
		"transform" : "translate(10%, -" + st /5 + "%" });
	$(".fon").css({
		"transform" : "translate(10%, -" + st /30 + "%" });
	$(".fon2").css({
		"transform" : "translate(10%, -" + st /40 + "%" });
	$(".fon3").css({
		"transform" : "translate(10%, -" + st /40 + "%" });
	$(".fon4").css({
		"transform" : "translate(10%, -" + st /70 + "%" });

});

});
