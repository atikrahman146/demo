/* ------------------------------------------------------------------------
	Class: jquery.Froogaloop JS
	Use: Froogaloop for vimeo video
------------------------------------------------------------------------- */

var Froogaloop=function(){function e(a){return new e.fn.init(a)}function h(a,c,b){if(!b.contentWindow.postMessage)return!1;var f=b.getAttribute("src").split("?")[0],a=JSON.stringify({method:a,value:c});"//"===f.substr(0,2)&&(f=window.location.protocol+f);b.contentWindow.postMessage(a,f)}function j(a){var c,b;try{c=JSON.parse(a.data),b=c.event||c.method}catch(f){}"ready"==b&&!i&&(i=!0);if(a.origin!=k)return!1;var a=c.value,e=c.data,g=""===g?null:c.player_id;c=g?d[g][b]:d[b];b=[];if(!c)return!1;void 0!==
a&&b.push(a);e&&b.push(e);g&&b.push(g);return 0<b.length?c.apply(null,b):c.call()}function l(a,c,b){b?(d[b]||(d[b]={}),d[b][a]=c):d[a]=c}var d={},i=!1,k="";e.fn=e.prototype={element:null,init:function(a){"string"===typeof a&&(a=document.getElementById(a));this.element=a;a=this.element.getAttribute("src");"//"===a.substr(0,2)&&(a=window.location.protocol+a);for(var a=a.split("/"),c="",b=0,f=a.length;b<f;b++){if(3>b)c+=a[b];else break;2>b&&(c+="/")}k=c;return this},api:function(a,c){if(!this.element||
!a)return!1;var b=this.element,f=""!==b.id?b.id:null,d=!c||!c.constructor||!c.call||!c.apply?c:null,e=c&&c.constructor&&c.call&&c.apply?c:null;e&&l(a,e,f);h(a,d,b);return this},addEvent:function(a,c){if(!this.element)return!1;var b=this.element,d=""!==b.id?b.id:null;l(a,c,d);"ready"!=a?h("addEventListener",a,b):"ready"==a&&i&&c.call(null,d);return this},removeEvent:function(a){if(!this.element)return!1;var c=this.element,b;a:{if((b=""!==c.id?c.id:null)&&d[b]){if(!d[b][a]){b=!1;break a}d[b][a]=null}else{if(!d[a]){b=
!1;break a}d[a]=null}b=!0}"ready"!=a&&b&&h("removeEventListener",a,c)}};e.fn.init.prototype=e.fn;window.addEventListener?window.addEventListener("message",j,!1):window.attachEvent("onmessage",j);return window.Froogaloop=window.$f=e}();

var core;
(function($) {
	"use strict";
	
	core = {
		init : function() {
			this._extensions();
		},
		_extensions : function() {
			$.fn.extend({
				bgVimeoVideo: function(options){
					var settings = $.extend({
						 videoId: "50834315",
						 videoVolume: 1
					}, options );
				    
					return this.each(function() {
						var that = $(this);
						that.append('<div id="video-player"><iframe id="player1" class="player1" src="https://player.vimeo.com/video/'+settings.videoId+'?autoplay=0&loop=0&api=1&player_id=player1" width="600" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><div class="buttons"><span class="button fa fa-play" id="play-button"></span> <span class="button fa fa-pause" id="pause-button"></span></div></div>');
						
						function onMessageReceived(e) {
						    var data = JSON.parse(e.data);
						    if ('ready' === data.event) {
							    var d = {method:'setVolume', value:settings.videoVolume};
							    var f = $('#player1'), url = f.attr('src').split('?')[0];
							    f[0].contentWindow.postMessage(JSON.stringify(d), url);							    
						    }
					    }
					
					    if (window.addEventListener){
						    window.addEventListener('message', onMessageReceived, false);
					    } else {
						    window.attachEvent('onmessage', onMessageReceived, false);
					    }

						var iframe = document.getElementById('player1');
						// $f == Froogaloop

						var player = $f(iframe);
						// bind events
						var playButton = document.getElementById("play-button");
						playButton.addEventListener("click", function() {
						  player.api("play");
						});

						var pauseButton = document.getElementById("pause-button");
						pauseButton.addEventListener("click", function() {
						  player.api("pause");
						});
						
						$(window).resize(function() {
							if ($(window).width() > 767) {
								var effectHeight = $('.video-wrapper').height();
								$('.video-wrapper .video_player').css('height', effectHeight );
								var windowWidth	= $('.video_player').width();
								var windowHeight = $('.video_player').height();
								var windowRatio	= windowWidth/windowHeight;
								var videoRatio	= 16/9;
								var videoWrap	= $(".video_player .inner");
								var $new_width, $new_height, $left, $top;							
								if (windowRatio > videoRatio) {
									$new_width = windowWidth;
									$new_height = (windowWidth / videoRatio);
								} else {
									$new_width = (windowHeight * videoRatio);
									$new_height = windowHeight;
								}							
								$left = (windowWidth-$new_width)/2;
								$top = (windowHeight-$new_height)/2;							
								videoWrap.css({
									width: $new_width + 'px',
									height: $new_height+256 + 'px',
									left: $left + 'px',
									top: $top-128 + 'px'
								});

							}
							$(document).ready(function(){
								$("#pause-button").addClass("hidden");
								$("#play-button").addClass("visible");
							});
							$(document).on("click", "#play-button", function() {     
								$("#pause-button").removeClass("hidden");
								$("#play-button").addClass("hidden");
								$('.video_player .inner .buttons').css('background', 'transparent');
							});
							$(document).on("click", "#pause-button", function() {     
								$("#pause-button").addClass("hidden");
								$("#play-button").removeClass("hidden");
								$('.video_player .inner .buttons').css('background', 'rgba(0,0,0,0.5)');
							});
						}).resize();					
					});

				},

		    });
	    }	
	};
	$(document).ready(function(){ core.init(); });

})(jQuery);