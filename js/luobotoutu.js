"use strict"
$(function(){
	var $container = $(".lunbotoutu"),
		$container_1 = $(".lunbotoutu_1"),
		$photo_ul = $(".lunbototu_small ul"),
		$smallphoto = $(".lunbototu_small"),
		$photo_li = $(".lunbototu_small li"),
		$bigphtoto = $(".lunbototu_big"),
		$img = $(".lunbotoutu img"),
		$circle = $(".lunbototu_circle"),
		$circle_li = $(".lunbototu_circle li"),
		$btn = $(".lunbototu_btn"),
		value = "",
		num = 0,
		dir = 0,
		
		init = function(){
			$container.css({"position":"relative"});
			$container_1.css({"width":"65%","margin":"10px auto","position":"relative","padding":"40px 0 20px 0"});
			
			$smallphoto.css({"overflow":"hidden"});
			$bigphtoto.css({"position":"absolute","width":"63%","top":"4%","left":"18.5%"});
			
			$photo_ul.css({"width":"350%","position":"relative","z-index":"-1"});
			$photo_li.css({"display":"inline-block","width":"14.285%"});
			$img.css({"display":"block","width":"100%"});
			
			$circle.css({"width":"25%","margin":"0 auto","padding":"40px 0 20px 0"});
			$circle_li.css({"display":"inline-block","minHeight":"1px","width":"9%","margin":"1.75%","backgroundColor":"#D8DAD9"});
			
			$btn.css({"position":"absolute","font-size":"2em","background-color":"#D8DAD9","opacity":" 0.7","padding":"20px 15px","top":"40%","color":"#fff"});
			$($btn[0]).css({"left":"-70px"});
			$($btn[1]).css({"right":"-70px"});
			$($circle_li[0]).css({"backgroundColor":"#000"});
			contianer_fun();
			btn_fun();
			setTimeout(time_calcutale,4000);
		},
		left = function(){
			if(num!==0)
			{
				$($circle_li[num]).css({"backgroundColor":"#D8DAD9"});
				num--;
				$photo_ul.animate({left:(-num)*50 + "%"},400);
				value = $(".lunbototu_big img").attr("src");
				$(".lunbototu_big img").attr("src",$($(".lunbototu_small img")[num]).attr("src"));
				$($(".lunbototu_small img")[num]).attr("src",value);
				$($circle_li[num]).css({"backgroundColor":"#000"});
			}
			return false;
		},
		right = function(){
			if(num!==5)
			{
				$($circle_li[num]).css({"backgroundColor":"#D8DAD9"});
				num++;
				$photo_ul.animate({left:(-num)*50 + "%"},400);
				value = $(".lunbototu_big img").attr("src");
				$(".lunbototu_big img").attr("src",$($(".lunbototu_small img")[num]).attr("src"));
				$($(".lunbototu_small img")[num]).attr("src",value);
				$($circle_li[num]).css({"backgroundColor":"#000"});
			}
			return false;
		},
		btn_fun = function(){
			$($btn[1]).click(left);
			$($btn[0]).click(right);
		},
		time_calcutale = function()
		{
			if(num !== 5 && dir === 0){
				right();
				if(num === 5)dir = 1;
			}
			else if(dir === 1 && num!== 0){
				left();
				if(num === 0)dir = 1;
			}
			setTimeout(time_calcutale,4000);
		},
		contianer_fun = function(){
			$container.hover(function(){
				$($btn[0]).animate({left:"0"},400);
				$($btn[1]).animate({right:"0"},400);
			},function(){
				$($btn[0]).animate({left:"-70px"},400);
				$($btn[1]).animate({right:"-70px"},400);
			})
		};
	init();
})
