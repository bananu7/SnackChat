 setTimeout(function() {
    $('pre').each(function(i, block) {
        hljs.highlightBlock(block);
    });
}, 1000);

console.log(hljs ? "HLJS OK" : "HLJS NOT OK");
console.log("SnackChat loaded");