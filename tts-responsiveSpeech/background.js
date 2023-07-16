chrome.contextMenus.create({
    id: "readAloud",
    title: "Read Aloud",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function (info) {

    function resumeInfinity() {
        window.speechSynthesis.resume();
        timeoutResumeInfinity = setTimeout(resumeInfinity, 1000);
    }

    if (info.menuItemId === "readAloud") {
        const selectedText = info.selectionText;

        // Use the SpeechSynthesis API to generate and play the audio
        const utterance = new SpeechSynthesisUtterance(selectedText);
        utterance.lang = "hi-IN"; // Set the language to Hindi (India)
        utterance.onstart = function (event) {
            resumeInfinity();
        };

        utterance.onend = function (event) {
            clearTimeout(setTimeout(resumeInfinity, 1000));
        };
        utterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === "hi-IN");

        speechSynthesis.speak(utterance);
    }
});



