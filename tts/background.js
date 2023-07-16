chrome.contextMenus.create({
    id: "readAloud",
    title: "Read Aloud",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.onClicked.addListener(function(info) {
    if (info.menuItemId === "readAloud") {
      chrome.tts.speak(info.selectionText);
    }
  });
  