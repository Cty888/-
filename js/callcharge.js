// JavaScript Document
$(function(){
	var $li=$(".call_charge .callcharge_title li");
	var $content=$(".call_charge .content");
	$li.hover(function(){
		var index=$li.index(this);
		$content.eq(index).show().siblings().hide();
		$(this).find("a").addClass("current");
		$(this).siblings().find("a").removeClass("current");
	});
});
$(function(){
	$("input").each(function(){
		var defaultvalue=this.value;
		$(this).focus(function(){
			if(this.value===defaultvalue){
				this.value="";
			}
		});
		$(this).blur(function(){
			if(this.value===""){
				this.value=defaultvalue;
			}
		});
	});
});