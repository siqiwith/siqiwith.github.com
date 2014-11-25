/**
 * Copyright © 2012 Siqi. All Rights Reserved.
 * Licensed under the GPL license.
 */
$(function(){var g=false;var h=2000;var i=["small-cloud","medium-cloud","big-cloud"];function createCloud(){var a=70000+30000*Math.random();var b=g?40000*Math.random():0;var c=Math.floor(3*Math.random());var d=$(window).height()>210?$(window).height()-210:0;var e=Math.random()*d;var f=Math.ceil(Math.random()*10);setTimeout(function(){$("<div></div>",{"class":i[c],"css":{"top":e+"px","z-index":f}}).appendTo('body').animate({left:'+='+h},a,'linear',function(){$(this).remove()});createCloud()},b)};createCloud();g=true});