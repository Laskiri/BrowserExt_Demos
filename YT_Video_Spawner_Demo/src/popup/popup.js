document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('action-button');
    const input = document.getElementById('youtube-url');

    button.addEventListener('click', () => {
        const url = input.value;
        const videoId = getYouTubeVideoId(url);
        
        if (videoId) {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, { videoId: videoId });
            });
        } else {
            alert('Det har ikke indtastet et validt URL.');
        }
    });

    const getYouTubeVideoId = (url) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)|youtu\.be\/([a-zA-Z0-9_-]+)/;
        const match = url.match(regex);
        return match ? (match[1] || match[2]) : null;
    };
});