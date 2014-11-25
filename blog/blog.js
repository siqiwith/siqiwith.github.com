/**
 * Copyright © 2013 Siqi. All Rights Reserved.
 * Licensed under the GPL license.
 */
$(function(){
	var started = false;
	var length = 2000;
	var cloudClasses = ["small-cloud", "medium-cloud", "big-cloud"];
	function createCloud(){
		var randomDuration = 70000 + 30000 * Math.random(); 
		var randomInterval = started ? 40000 * Math.random() : 0;
		var cloudType = Math.floor(3 * Math.random());
		var height = $(window).height() > 210 ? $(window).height() - 210 : 0;
		var top = Math.random() * height;
		var zIndex = -999;
		setTimeout(function(){
			$("<div></div>", {
				"class": cloudClasses[cloudType],
				"css": {
					"top": top + "px",
					"z-index": zIndex
				}
			}).appendTo('body').animate({
				left: '+=' + length
			}, randomDuration, 'linear', function() {
				$(this).remove();
			});
			createCloud();
		}, randomInterval);
	};
	createCloud();
	started = true;
});