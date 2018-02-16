if (typeof window.isElementVisible === 'undefined') {
    // Handy function from StackOverflow: https://stackoverflow.com/a/15203639/2733526
    function isElementVisible(el) {
        var rect     = el.getBoundingClientRect(),
            vWidth   = window.innerWidth || doc.documentElement.clientWidth,
            vHeight  = window.innerHeight || doc.documentElement.clientHeight,
            efp      = function (x, y) { return document.elementFromPoint(x, y) };     
    
        // Return false if it's not in the viewport
        if (rect.right < 0 || rect.bottom < 0 
                || rect.left > vWidth || rect.top > vHeight)
            return false;
    
        // Return true if any of its four corners are visible
        return (
              el.contains(efp(rect.left,  rect.top))
          ||  el.contains(efp(rect.right, rect.top))
          ||  el.contains(efp(rect.right, rect.bottom))
          ||  el.contains(efp(rect.left,  rect.bottom))
        );
    }
}
var imgs = document.querySelectorAll(".irc_mi");
var img = imgs.forEach(function(img){
    if(isElementVisible(img)){
        window.open(img.src);
    }
});

var imgDatas = document.querySelectorAll(".irc_mut");
var imgData = imgDatas.forEach(function(imgData){
    if(isElementVisible(imgData)){
		var image = new Image();
        image.src = imgData.currentSrc;

        var w = window.open("");
        w.document.write(image.outerHTML);
    }
});
