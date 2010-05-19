$(function(){
    
    //List the pages you want to include
    var pageURLs = [
        "example.html",
        "example2.html",
        "example3.html",
        "example4.html"           
    ];
    
    //Call the plugin
    $("#page-nav").pageSequence({
        //Required
        source: pageURLs,
        //Optional
        prevText: "Previous Page",
        nextText: "Next Page",
        continuous: false
    });
});