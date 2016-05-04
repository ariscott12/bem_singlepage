const $ = require('jquery');


$(function() {
    'use strict';
    const jqueryMap = {
        $menu_trigger: $('.js-menu-trigger'),
        $menu: $('.js-menu'),
        $menu_link: $('.js-link')
    }

    jqueryMap.$menu_trigger.click(function() {
        let text = $(this).text();
        
        $(this).text(text == 'Close' ? 'Menu' : 'Close');
        jqueryMap.$menu.slideToggle();
    });

    jqueryMap.$menu_link.click(function(e) {
    	e.preventDefault();
    	//alert('test');
    	$(this).next('.js-menu-sub').slideToggle();
    });
});