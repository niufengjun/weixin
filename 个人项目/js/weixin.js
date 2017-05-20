$(function(){
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
	$(".nav_top .nav ul li").click(function(){
		location.reload(true); 
	})
	$(".nav_top .nav ol li").click(function(){
		location.reload(true); 
	})

	$("#function .function #action ul li img").hover(function(){   
        var a=$(this).attr("src").substring(0,12);
        $(this).attr("src",a+"_1.png");
	},function(){
		var a=$(this).attr("src").substring(0,12);
        $(this).attr("src",a+".png");
	})
})