const $ = require('jquery');


$(function() {
    'use strict';
    
    // Cache jQuery selectors
    const jqueryMap = {
        $menu_trigger: $('.js-menu-trigger'),
        $menu: $('.js-menu'),
        $menu_link: $('.js-link')
    }

    jqueryMap.$menu_trigger.on('click', function(){
        let text = $(this).text();
        
        // Change inner text of DIV
        $(this).text(text == 'Close' ? 'Menu' : 'Close');
        jqueryMap.$menu.slideToggle();
    });

    jqueryMap.$menu_link.on('click', function(e){
    	// Check if menu trigger is showing
    	if(jqueryMap.$menu_trigger.is(":visible")) {
	    	e.preventDefault();
	    	$(this).next('.js-menu-sub').slideToggle();
    	}
    });
});