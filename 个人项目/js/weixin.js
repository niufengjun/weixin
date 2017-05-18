$(function(){
	console.log($(".nav_top .nav ul li"));
	$(".nav_top .nav ul li").hover(function(){
		$(this).css({
			"backgroundColor":"orange",
		});
	},function(){
		$(this).css({
			"backgroundColor":"",
			"color":""
		});
	});
	$(".nav_top .nav ul li").click(function(){
		$(this).css({
			"color":"red"
		});
	});
	
})