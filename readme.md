# Simple Page Sequence jQuery Plugin
This lil' plugin creates Next and Previous links from an array of arbitrary URLs. Normally you'd want to generate these links server-side, but if for some reason that's not possible you might find this plugin useful.

(I know there are a ton of jQuery pagination plugins out there but the ones that I saw only offered in-page, DHTML pagination effects.)

## How to use it: 
    
    //List the pages you want to include in a local array
    var pageURLs = [
        "example.html",
        "example2.html",
        "example3.html",
        "example4.html"           
    ];
    
    //Call up the plugin
    $("#page-nav").pageSequence({
        //Required
        source: pageURLs,
        //Optional
        prevText: "Previous Page",
        nextText: "Next Page",
        continuous: false
    });
