chrome.webRequest.onBeforeRequest.addListener(
    function(obj) { return { cancel: true }},
    { urls: ["*://*.twitter.com/*"] },
    ["blocking"]
)