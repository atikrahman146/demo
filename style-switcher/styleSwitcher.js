/* ******************************
 * 
 * StyleSwitcher Script
 * 
 * 
 ******************************* */

jQuery(document).ready(function($){

	"use strict";

	var $colorsHTML =
	'<section id="style-switcher">' +
	'<a href="#" id="styles-button"><i class="fa fa-sliders"></i></a>' +
	'<section id="styles-container">' +
	'<h4>Pick a color</h4><section class="style-color-select"><ul class="styles-list">' +
	'<li class="blue">1</li>' +
	'<li class="violet">2</li>' +
	'<li class="navy">3</li>' +
	'<li class="red">4</li>' +
	'<li class="purple">5</li>' +
	'<li class="green">6</li>' +
	'<li class="dark">7</li>' +
	'<li class="orange">8</li>' +
	'</ul></section>'

    $colorsHTML +=
    '<section class="style-nav-select">' +
    '<h4>Nav Position</h4>'+
    '<select class="select">' +
    '<option value="menu1">Nav + logo left</option>' +
    '<option value="menu2">Nav + logo right</option>' +
    '<option value="menu3">Nav right logo left</option>' +
    '<option value="menu4">Nav left logo right</option>' +
    '</select></section>' +
    '</section>' +
    '</section>';

    $("body").append($colorsHTML);  


    var relativeDir = 'css/color/';
    var menuDir = 'css/menu/';
    
    /* ***************************************
     * Reading Cookies for stored values
     *******************************************/
     
    (function(){
        if(readCookie("ssCleanBizStyle") != null){
            var styleVal = readCookie("ssCleanBizStyle");
            changeStyle(styleVal);
        }
        
        if((readCookie("ssCleanBizPattern") != null)){
            var skinVal = readCookie("ssCleanBizPattern");
            $('#menu-wrapper').removeClass().addClass(skinVal);
        }
    })();
        
    
    
    /* ***************************************
     * SlideIn and SlideOut animation on click
     *******************************************/
    
    $('#styles-button').on('click', function(e){
        e.preventDefault();
        var switcherWidth = $('#style-switcher').width();
        if($('#style-switcher').hasClass('opened')){
            $('#style-switcher').animate({
                right: - switcherWidth
            }, 700, function(){
                $(this).removeClass('opened');
            });
        }else{
            $('#style-switcher').animate({
                right: 0
            }, 700, function(){
                $(this).addClass('opened');
            });
        }
        
    });
    
    /* ******************
     * Style Changing
     *********************/
    
    $('.styles-list li').on('click', function(e){
        e.preventDefault();
        var styleVal = $(this).attr('class');
        changeStyle(styleVal);
        createCookie("ssCleanBizStyle", styleVal, 7);
    });
	
    /* ******************
     * Pattern Changing
     *********************/
    
    $('.style-nav-select select option').on('click', function(e){        
        var skinVal = $(this).attr('value');
        $('#menu-wrapper').removeClass().addClass(skinVal);
        createCookie("ssCleanBizPattern", skinVal, 7);
        
    });

    function changeStyle(styleVal){
        $('link[title="activestyle"]').remove();
        var stylesheet = '<link rel="stylesheet" href="' + relativeDir + styleVal + '.css" type="text/css" title="activestyle"/>'
        $('head').append(stylesheet);
        
    }

    
    function createCookie(name,value,days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name,"",-1);
    }
});