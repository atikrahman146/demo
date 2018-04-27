jQuery(document).ready(function ($) {

/* ---------------------Use: skill-bar animation --------------- */
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.level1> div');
    var $elem2 = $('.level2> div');

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    } else {
        $elem.removeClass('start');
    }
    if (isElementInViewport($elem2)) {
        // Start the animation
        $elem2.addClass('start');
    } else {
        $elem2.removeClass('start');
    }
}
$('.level1,.level2').appear(function() {
   checkAnimation();
});

/* ---------------------Use: page header --------------- */
function CssJs() {

	$("ul.gn-menu li").filter(":has(ul)").addClass("active");
	$('ul.gn-menu').children().click(function(){
		$(this).children('.gn-submenu').slideToggle('slow');
		return false;
	}).children('ul.gn-menu li').click(function (event) {
		event.stopPropagation();
	});
	
	$(window).resize(function() {

		var $introWidth = $(window).width(); // Width of the screen
		var $introHeight = $(window).height(); // Height of the screen

		$('.wrapper').css('width', $introWidth );
		$('#content>header.header').css('height',$introHeight - 60);
		
		var $centerheight = $('.header .center').height();
		$('.header .center').css('height',$centerheight);
		$('.header .center').css('marginTop',$introHeight/2 - 70 - $centerheight/2);
		
		var $contentWidth = $(window).width(); 
		var $containerW = $('.container').width(); 
		var $ContainerMargin = $contentWidth - $containerW + 17; 
		var $ContainerMarginHalf = $ContainerMargin / 2; 

		if ($(window).width() > 801) {

			$('#project-image').css('width', $containerW + $ContainerMarginHalf);
			var $projectImg = $('#project-image').width();
			$('#project-image').css('left',  - $ContainerMarginHalf);
			jQuery(window).load(function(){
				$('#project-image .owl-controls').css('width', $ContainerMarginHalf + 4);
				$('#project-image .owl-controls').css('left', $projectImg );
			});
			$('#project-image .owl-controls').css('width', $ContainerMarginHalf + 4);
			$('#project-image .owl-controls').css('left', $projectImg );
		}		
		if ($(window).width() < 801) {
			
			var $projectMargin = $introWidth - $containerW;
			$('#project-image').css('width', $containerW - $projectMargin/2);
			var $projectImg = $('#project-image').width();
			$('#project-image').css('left', - $projectMargin/2);
			jQuery(window).load(function(){
				$('#project-image .owl-controls').css('width', $projectMargin*2);
				$('#project-image .owl-controls').css('left', $projectImg - $projectMargin/2);
			});
			$('#project-image .owl-controls').css('width', $projectMargin*2);
			$('#project-image .owl-controls').css('left', $projectImg - $projectMargin/2);
		}

		if ($(window).width() > 767) {
			$('.isotope-wrap').css('height', $introHeight - 58);
			$('.bxslider,.bxslider li').css('height', $introHeight);
		}
		if ($(window).width() > 991) {
			
			var $containerWidth = $('.container').width(); 
			var $addressMargin = $introWidth - $containerWidth + 17; 
			var $addressMarginDivide = $addressMargin / 2; 
			var $mapWidth = $('.map-wrap').width();
			$('.map-wrap').css('width', $mapWidth  + $addressMarginDivide);

			var $mapWidthTwo = $('.map-wrap2').width();
			$('.map-wrap2').css('width', $mapWidthTwo  + $addressMargin);
			$('.map-wrap2').css('left',  - $addressMarginDivide);
			
		}
	}).resize();
};
CssJs();

/* ------------------same height div------------------- */

equalheight = function(container){

var currentTallest = 0,
	 currentRowStart = 0,
	 rowDivs = new Array(),
	 $el,
	 topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
	 for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	   rowDivs[currentDiv].height(currentTallest);
	 }
	 rowDivs.length = 0; // empty the array
	 currentRowStart = topPostion;
	 currentTallest = $el.height();
	 rowDivs.push($el);
   } else {
	 rowDivs.push($el);
	 currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	 rowDivs[currentDiv].height(currentTallest);
   }
 });
}
$(window).load(function() {
  equalheight('.entry-post2');
});
$(window).resize(function(){
  equalheight('.entry-post2');
});


/* ------------------Use: nice scroll jQuery------------------- */
if ($(window).width() > 991) {
	$("html").niceScroll({
		mousescrollstep: 40,
		cursorcolor: "#333333",
		zindex: 9999,
		cursorborder: "none",
		cursorwidth: "6px",
		cursorborderradius: "none"
	});
	
	$(".isotope-wrap").niceScroll({
		mousescrollstep: 40,
		cursorcolor: "rgba(0, 0, 0, 0.4)",
		zindex: 1,
		cursorborder: "none",
		cursorwidth: "6px",
		cursorborderradius: "0px"
	});
}
/* ------------------Use: wow animation------------------- */
	function WowAnim() {
		wow = new WOW(
			{
				animateClass: 'animated',
				offset:       100
			}
		);
		wow.init();
	};
	WowAnim();

/* ---------------------Use: Owl carousal jQuery--------------- */

function OwlCarousal() {
	if ( jQuery("div").hasClass("owl-carousel") ) {
		$("#owl-mini").owlCarousel({
			items : 4,
			itemsCustom : false,
			itemsDesktop : [1170,4],
			itemsDesktopSmall : [980,3],
			itemsTablet: [768,2],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			singleItem : false,
			itemsScaleUp : false,
		});
		$("#project-image").owlCarousel({
			items : 2,
			itemsDesktop : [1170,2],
			itemsDesktopSmall : [980,2],
			itemsTablet: [768,2],
			itemsMobile : [479,1],
			navigation : true,
			navigationText: 	["prev","next"],
			pagination : false
			
		});
		$("#other-projects").owlCarousel({
			items : 3,
			itemsDesktop : [1170,3],
			itemsDesktopSmall : [980,2],
			itemsTablet: [767,1],
			itemsMobile : [479,1],
			navigation : true,
			navigationText: 	["prev","next"],
			pagination : false
			
		})
	}
};
OwlCarousal();

/* ---------------------Use: nav trigger button --------------- */


	new gnMenu( document.getElementById( 'gn-menu' ) );

	$(document).on("click", "a#trigger_button", function() {     
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top - 70
			}, 1000);
			return false;
		}
		}
	});
/* -----------------Use: Contact Form jQuery----------------- */

function AjaxContant() {
	$("#submit_btn").click(function() { 
		var proceed = true;
			//simple validation at client's end
			//loop through each field and we simply change border color to red for invalid fields		
			$("#contact_form input[required], #contact_form textarea[required=true]").each(function(){
			$(this).css('border-color',''); 
		if(!$.trim($(this).val())){ //if this field is empty 
			$(this).css('border-color','red'); //change border color to red   
			proceed = false; //set do not proceed flag
		}
		//check invalid email
		var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
			if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
			$(this).css('border-color','red'); //change border color to red   
			proceed = false; //set do not proceed flag				
		}	
		});
		if(proceed) //everything looks good! proceed...
		{
		//get input field values data to be sent to server
		post_data = {
			'user_name'		: $('input[name=name]').val(), 
			'user_email'	: $('input[name=email]').val(), 
			'phone_number'	: $('input[name=phone]').val(), 
			'budget'	    : $('input[name=budget]').val(), 
			'subject'		: $('input[name=subject]').val(), 
			'question'		: $('input[name=question]').val(), 
			'msg'			: $('textarea[name=message]').val()
		};
		//Ajax post data to server
		$.post('../contact_me.php', post_data, function(response){  
			if(response.type == 'error'){ //load json data from server and output message     
			output = '<div class="callout-danger error">'+response.text+'</div>';
			$("#contact_form #contact_results").html(output).slideDown();
			}else{
			output = '<div class="callout-info success">'+response.text+'</div>';
			//reset values in all input fields
			$("#contact_form input,#contact_form input[required], #contact_form textarea[required]").val(''); 
			$("#contact_form #contact_results").html(output).slideDown();
			
				//reset previously set border colors and hide all message on .keyup()
				$("#contact_form input[required],#contact_form textarea[required]").keyup(function() { 
					$(this).css('border-color',''); 
					$("#contact_form input,#contact_form input[required], #contact_form textarea[required]").val(''); 
					$("#contact_form #contact_results").hide();
				});
			}
		}, 'json');
		}
	});
};
AjaxContant();

/* -----------------Use: vimeo player----------------- */

function VideoPlay() {
	jQuery(function($){
		$('.video_player .inner').bgVimeoVideo({
			videoId: '61611351',
			videoVolume: 1
		});
	});
}
VideoPlay();

/* -----------------Use: page loader----------------- */

  $(".animsition").animsition({
  
    inClass               :   'fade-in',
    outClass              :   'fade-out',
    inDuration            :    1500,
    outDuration           :    800,
    linkElement           :   'a:not([target="_blank"]):not([href^=#]):not([data-rel^=prettyPhoto])', 
    loading               :    true,
    loadingParentElement  :   'body',
    loadingClass          :   'page-loader',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    overlay               :   false,
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'body'
  });

/* -----------------Use: tooltip ----------------- */

$('.profile-social a').tooltip();
	
/* ---------------Use: ISOTOP jQuery----------- */

function isotopeWorks() {

	//put jQuery in noConflict mode
	var $j = jQuery.noConflict();

	$j(document).ready(function() {

		var $container = $j('.photogal');
		//run function when all images touched by isotope are loaded
		$container.imagesLoaded( function(){
			//set parameters
			$container.isotope({
				//tell isotope what to target
				itemSelector : '.element',
				//set the layout mode
				layoutMode: 'fitRows',
				//tell isotope to use CSS3 if it can and fallback to jQuery
				animationEngine : 'best-available',
				//set masonry parameter
				masonry: {
				//we want 4 columns
				columnWidth: $container.width() / 2
				}
			});
		});
		//tell isotope our filters are in the options id & links
		var $optionSets = $j('#options'),
			$optionLinks = $optionSets.find('a');

			//click function to sort by data
			$optionLinks.click(function(){
		var $this = $j(this);
		// don't proceed if already selected
		if ( $this.hasClass('selected') ) {
			return false;
		}
		var $optionSet = $this.parents('.option-set');
			$optionSet.find('.selected').removeClass('selected');
			$this.addClass('selected');

		// make option object dynamically, i.e. { filter: '.my-filter-class' }
		var options = {},
		key = $optionSet.attr('data-option-key'),
		value = $this.attr('data-option-value');
		// parse 'false' as false boolean
		value = value === 'false' ? false : value;
		options[ key ] = value;
		if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
			// changes in layout modes need extra logic
			changeLayoutMode( $this, options );
		} else {
			// otherwise, apply new options
			$container.isotope( options );
		}
		return false;
		});
	});
};
isotopeWorks();
/* ---------------------Use: Owl carousal jQuery--------------- */

function bxSliderJquery() {
	if ( jQuery("div").hasClass("work-desc") ) {
		$('.bxslider').bxSlider({
		  pagerCustom: '#bx-pager',
		  mode:"fade"
		});
	}
};
bxSliderJquery();

/* ---------------------Use: Owl carousal jQuery--------------- */

$( function() {
	
	$( '#cd-dropdown' ).dropdown( {
		gutter : 5,
		stack : false,
		delay : 100,
		slidingIn : 100
	} );

});

/* ---------------------Use: pretty photo jQuery--------------- */

function PrettyPhoto() {
	$("a[data-rel^='prettyPhoto']").prettyPhoto();
}
PrettyPhoto();

});