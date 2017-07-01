"use strict"
$(function(){
	var container = $(".animate_img_enlager").toArray(),
		count = 0,
		speed = 0,
		isHover = false,
		element = {},
		width_before = 0,
		height_before = 0,
		me = {},
		init = function(){
			for(var i = 0;i < container.length;i++){
				$(container[i]).hover(big,small);
			}
		},
		big = function(event){
			element = event.toElement;
			isHover = true;
			speed = 1;
			requestAnimateFrame(bigger);
		},
		bigger = function(){
			if(isHover && count <= 30){
				speed += 0.003
				count++;
				$(element).css("transform","scale" + "(" + speed + ")");
				requestAnimateFrame(bigger);
			}
		},
		small = function(){
		    
		    var	speed_x = speed,
		    	speed_cut = speed / 100,
		    	$element = $(element),
		    	smaller = function(){
		    		
				speed_x -= speed_cut;
				if(speed_x > 1){
					$element.css("transform","scale" + "(" + speed_x + ")");
					requestAnimateFrame(smaller);
				}
			};
		    
		    count = 0;
		    isHover = false;
		  	requestAnimateFrame(smaller);
		},
		
		
		requestAnimateFrame = function(){
				return (
					window.requestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.oRequestAnimationFrame || 
					window.msRequestAnimationFrame||
					function(callback){
						window.setTimeout(callback,20);
					});
			}();
	init();
})
