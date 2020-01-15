requirejs(["util", "purify"], function(util, purify) {
    console.log("util, purify loaded");

    //This function is called when scripts/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "util".
    
    var script = document.createElement("script");
    
    script.type = "text/javascript";
    script.src = "snippet.js";
    script.onload = function() {
        console.log("snippet loaded");
    };
    
    document.body.appendChild(script);
});
