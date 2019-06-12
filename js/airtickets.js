// JavaScript Document
"use strict"
$(function(){
	var $radio=$(".airtickets_way input");
	$radio.click(function(){
		var num=$(this).val();
		$(".date_show").hide();
		$(".date_show").eq(num).show();
	});
	var $radio1=$(".airtickets_way1 input");
	$radio1.click(function(){
		var num=$(this).val();
		$(".date_show1").hide();
		$(".date_show1").eq(num).show();
	});
});

$(function(){
	var $li=$(".airtickets_title li");
	var $content=$(".airtickets_contents .content");
	$li.hover(function(){
		var index=$li.index(this);
		$content.eq(index).show().siblings().hide();
		$(this).find("a").addClass("current");
		$(this).siblings().find("a").removeClass("current");
	});
});