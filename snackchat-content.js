var hl = document.createElement('script');
hl.src = chrome.extension.getURL('lib/highlight.min.js');
hl.onload = function() {
    //this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(hl);

var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
s.onload = function() {
    //this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);

var css = document.createElement('link');
css.type = "text/css";
css.rel = "stylesheet";
css.href = chrome.extension.getURL('monokai_sublime.css');
css.onload = function() {
    //this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(css);