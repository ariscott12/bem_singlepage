const $ = require('jquery');


$(function() {
    'use strict';
    
    // Cache jQuery selectors
    const jqueryMap = {
        $search_trigger: $('.js-search-trigger'),
        $search: $('.js-search'),
        $search_close: $('.js-close')
    }

    jqueryMap.$search_trigger.on('click', function(){
        let height = $(window).height();
        jqueryMap.$search.css({
            height: height
        });
        jqueryMap.$search.fadeIn();
    });
    jqueryMap.$search_close.on('click', function(){
        jqueryMap.$search.fadeOut();
    });
});