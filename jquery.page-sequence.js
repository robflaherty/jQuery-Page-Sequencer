/*
 * Simple page sequnce jQuery plugin
 * Author: Rob Flaherty | rob@ravelrumba.com
 * Copyright (c) 2010 Rob Flaherty 
 * MIT Licensed: http://www.opensource.org/licenses/mit-license.php
 */ 
;(function($) {

    $.fn.pageSequence = function(settings) {
        
        //Default settings
        var config = {
            prevText: '&laquo; Previous',
            nextText: 'Next &raquo; ',
            continuous: false     
        };

        if (settings) {
            $.extend(config, settings);
        }
        
        if (!(config.source instanceof Array)) {
            throw "That doesn't appear to be an array.";            
        }
        
        this.each(function() {

                //Reference for URL data
                var urlData = config.source,
                    
                    //Store 'this' so we can reference it inside other functions
                    navElement = $(this),
                    
                    //Get filename from path
                    currentPath = location.pathname,
                    currentPage = currentPath.substr(currentPath.lastIndexOf('/')+1),  
                    
                    //Get index of current page
                    currentIndex = urlData.indexOf(currentPage);                
                
                //Function to determine and write next/prev links
                function setNavLinks(pageID){
                    var pagePrev = pageID - 1, 
                        pageNext = pageID + 1,
                        pageCount = urlData.length;
                    
                    //Build HTML for navigation
                    var navHTML = '<ul id="pageSequenceNav">';
                        navHTML += '<li class="previousPage"><a href="' + urlData[pagePrev] + '">' + config.prevText + '</a></li>';
                        navHTML += '<li class="nextPage"><a href="' + urlData[pageNext] + '">' + config.nextText + '</a></li></ul>';
                    
                    //Insert navigation
                    $(navElement).append(navHTML);
                    
                    //Handle first page case
                    if (pageID === 0) {
                        if (config.continuous === false) {                   
                            $('.previousPage').hide();
                        } else {
                            pagePrev = (pageCount -1);
                            $('.previousPage a').attr('href', urlData[pagePrev]);
                        }
                    }
                    
                    //Handle last page case
                    if (pageID == (pageCount -1)) {
                        if (config.continuous === false) {
                            $('.nextPage').hide(); 
                        } else {
                            pageNext = 0;
                            $('.nextPage a').attr('href', urlData[pageNext]);
                        }
                    }    
                }
                   
                //Check if current page exists in our array of URLs                
                if (currentIndex !== -1) {                    
                    //If so, pass the page index to our main function
                    setNavLinks(currentIndex);
                } else {                    
                    return false;
                }
                      
        });
 
        return this;
 
    };
 
})(jQuery);