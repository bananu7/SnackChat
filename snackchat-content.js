function loadScript(path) {
    var s = document.createElement('script');
    s.src = chrome.extension.getURL(path);
    s.onload = function() {
        //this.parentNode.removeChild(this);
    };
    (document.head || document.documentElement).appendChild(s);
}

function runFnOnPage(fn) {
    var actualCode = '(' + fn.toString() + ')();';
    var script = document.createElement('script');
    script.textContent = actualCode;
    (document.head||document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);
}

loadScript('lib/highlight.min.js');
loadScript('script.js');

var css = document.createElement('link');
css.type = "text/css";
css.rel = "stylesheet";
css.href = chrome.extension.getURL('monokai_sublime.css');
css.onload = function() {
    //this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(css);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

    if (request.command == "click") {
        runFnOnPage(function() {
            $('pre').each(function(i, block) {
                hljs.highlightBlock(block);
            });
        });
    }
});