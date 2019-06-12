// JavaScript Document
"use strict";
$(function(){
	$(".pointer").hover(function(){
		$(this).find(".pointer_show").show();
	},function(){
		$(this).find(".pointer_show").hide();
	});
});
$(function(){
	$("#search .search_content .text").focus(function(){
		$("#search .search_content .search_bg").css("color","rgb(200,200,200)");
	});
	$("#search .search_content .text").blur(function(){
		$("#search .search_content .search_bg").css("color","#989898");
	});
});
$(function(){
	overchange();
	change();
});
function overchange(){
	var $changecontent=$(".change");
	var len=$changecontent.length;
	var i = 0;
     $(".next").click(function(){
       i++;
       if(i===len){
        i = 0;
       }
       $changecontent.hide().eq(i).show();
       return false;
     });
	setInterval(function(){
       $(".next").trigger("click");
     } , 4000);
}
function change(){
	var $changecontent=$(".search_bg");
	var len=$changecontent.length;
	var i=0;
	$(".next").click(function(){
		i++;
		if(i===len){
			i=0;
		}
		$changecontent.hide().eq(i).show();
		return false;
	});
	setInterval(function(){
		$(".next").trigger("click");
	},2000);
}

$(function(){
	var $li=$(".table_cate li");
	var $hide=$(".hidden_all .hidden");
	$li.hover(function(){
		var index=$li.index(this);
		$hide.eq(index).show();
	},function(){
		var index=$li.index(this);
		$hide.eq(index).hide();
	});
	$hide.hover(function(){
		var index=$hide.index(this);
		$hide.eq(index).show();
	},function(){
		var index=$hide.index(this);
		$hide.eq(index).hide();
	});
});
$(function(){
	var $btn=$(".table2 .slider_positioning .slider_positioning_btn");
	var $item=$(".table2 .slider_list .slider_wrapper_item");
	var $next=$(".table2 .right_arrow");
	var $prev=$(".table2 .left_arrow");
	var i=0;
	var len=$item.length;
	$btn.hover(function(){
		var index=$btn.index(this);
		$(this).addClass("slider_btn_active");
		$(this).siblings().removeClass("slider_btn_active");
		$item.eq(index).siblings().hide();
		$item.eq(index).show();
	},function(){
		$(this).removeClass("slider_btn_active");
	});
	$next.click(function(){
		i++;
		if(i===len){
			i=0;
		}
		$item.eq(i).show();
		$item.eq(i).siblings().hide();
		$btn.eq(i).addClass("slider_btn_active");
		$btn.eq(i).siblings().removeClass("slider_btn_active");
	});
	$prev.click(function(){
		i--;
		if(i===0){
			i=len;
		}
		$item.eq(i).show();
		$item.eq(i).siblings().hide();
		$btn.eq(i).addClass("slider_btn_active");
		$btn.eq(i).siblings().removeClass("slider_btn_active");
	});
	/*setInterval(function(){
		$next.trigger("click");
	},2000);*/
});
$(function(){
	var $item=$(".table4 .table4_service .table4_service_items1");
	var $hover=$(".table4 .table4_hover1");
	var $hoverall=$(".table4 .table4_hover");
	$item.hover(function(){
		var index=$item.index(this);
		$hoverall.show();
		$hover.eq(index).show();
		$hover.eq(index).siblings().hide();
		$(".table4_service_items:lt(4)").addClass("table4_service_items_hover");
		/*$(".table4_service_items:lt(4)").find("span").addClass("table4_service_hover");*/
		$(this).find("span").addClass("table4_service_hover");
		$(this).siblings().find("span").removeClass("table4_service_hover");
	});
	$(".table4_cross").click(function(){
		$hoverall.hide();
		$(".table4_service_items:lt(4)").removeClass("table4_service_items_hover");
		$(".table4_service_items:lt(4)").find("span").removeClass("table4_service_hover");
	});
});
$(function(){
	var $left=$(".sk .btn_left");
	var $right=$(".sk .btn_right");
	var width=$(".sk_left_list").width();
	var len=$(".sk_list_items").length;
	var num=len/4;
	var i=0;
	$right.click(function(){
		i++;
		if(i===num){
			i=0;
		}
		$(".sk_list_inner").css("transform","translate3d("+(-i)*width+"px,0,0)");
	});
	$left.click(function(){
		if(i===0){
			i=num-1;
		}
		i--;
		$(".sk_list_inner").css("transform","translate3d("+width*(-i)+"px,0,0)");
	});
});
$(function(){
	var width=$(".right_list_img").width();
	var len=$(".right_list_img").length;
	/*for(var i=0;i<len;i++){
		var offset=width*(-i);
		$(".right_list_inner[i]").css("transform","translate3d("+offset+"px,0,0)");
	}*/
	var j=0;
	setInterval(function(){
		j++;
		if(j===len){
			j=0;
			/*$(".right_list_inner").css("transition","none 0s ease 0s");*/
		}
		$(".right_list_inner").css("transform","translate3d("+width*(-j)+"px,0,0)");
		var x=j%2;
		$(".right_dot").eq(x).addClass("current");
		$(".right_dot").eq(x).siblings().removeClass("current");
	},2000);
});
