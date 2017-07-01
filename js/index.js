"use strict"
$(function(){
	var $container = $(".slideshow ul"),
		$sildeshow_btn = $(".body_new_song_btn"),
		$sildeshow1_btn = $(".body_new_song1_btn"),
		$body_new_song = $(".body_new_song"),
		$sildeshow_circle = $(".slideshow_circle li"),
		$play = $(".slideshow_play"),
		$search_input = $("#header_search input"),
		$search_ul = $("#search_ul"),
		$rank_ul_li = $("#rank>div>ul>li"),
		btn_num = 0,
		dir = -1,
		
		body_new_song_fun = function(){
			
			$body_new_song.hover(function(){
				$($sildeshow_btn[1]).animate({right:"0"},400);
				$($sildeshow_btn[0]).animate({left:"0"},400);
				$($sildeshow1_btn[1]).animate({right:"0"},400);
				$($sildeshow1_btn[0]).animate({left:"0"},400);

			},function(){
				$($sildeshow_btn[1]).animate({right:"-70px"},400);
				$($sildeshow_btn[0]).animate({left:"-70px"},400);
				$($sildeshow1_btn[1]).animate({right:"-70px"},400);
				$($sildeshow1_btn[0]).animate({left:"-70px"},400);

			});
			$($sildeshow_btn[1]).click(btn_left);
			$($sildeshow_btn[0]).click(btn_right);
			$($sildeshow1_btn[1]).click(btn_left);
			$($sildeshow1_btn[0]).click(btn_right);
			
			setTimeout(time_calcutale,4000);
			
			search_fun();
			$search_ul.css("visibility","visible");
		},
		sildeshow_circle_fun = function(x){
			$sildeshow_circle.removeClass("slideshow_circle_li");
			$sildeshow_circle.removeClass("slideshow_circle_li1");
			$($sildeshow_circle[x]).addClass("slideshow_circle_li");
			$($sildeshow_circle[x + 3]).addClass("slideshow_circle_li1");
		},
		time_calcutale = function()
		{
			if(btn_num !== 2 && dir === 0){
				btn_left();
				if(btn_num === 2)dir = 1;
			}
			else if(dir === 1 && btn_num!== 0){
				btn_right();
				if(btn_num === 0)dir = 1;
			}
			setTimeout(time_calcutale,4000);
		},
		btn_left = function(){
			if(btn_num !== 2){
				btn_num++;
				$container.animate({left:(-btn_num)*100 + "%"},400);
				sildeshow_circle_fun(btn_num);
			}
			return false;
		},
		search_fun =function(){
			$search_input.blur(function(){
				$search_ul.slideUp(400);
			});
			$search_input.focus(function(){
				$search_ul.slideDown(400);
			});
		},
		btn_right = function(){
			if(btn_num !== 0){
				btn_num--;
				$container.animate({left:(-btn_num)*100 + "%"},400);
				sildeshow_circle_fun(btn_num);
			}
			return false;
		};
		body_new_song_fun();
})
