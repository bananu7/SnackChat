console.log("ok");

// Show page action icon in omnibar.
function showPageAction( tabId, changeInfo, tab ) {
    chrome.pageAction.show(tabId);
};
// Call the above function when the url of a tab changes.
chrome.tabs.onUpdated.addListener(showPageAction);

chrome.pageAction.onClicked.addListener(function highlighCode() {
    console.log("ok");
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {command: "click"});
    });
 });


