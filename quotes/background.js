chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.onCreated.addListener(function(tab) {
      chrome.tabs.update(tab.id, { url: "newtab.html" });
    });
  });
  