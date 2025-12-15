const url = document.getElementById('url');
const extract = document.getElementById('extract');
const imgTag = document.getElementById('image');
const download = document.getElementById('download');
const downloadContainer = document.querySelector('.youtube-container');

let finalThumbnail = "";

/**
 * Extract YouTube Video ID from ALL URL formats
 */
function getYouTubeVideoId(url) {
    const match = url.match(
        /(?:youtube\.com\/(?:.*v=|embed\/)|youtu\.be\/)([^?&/]+)/
    );
    return match ? match[1] : null;
}

/**
 * Extract & Display Thumbnail
 */
extract.addEventListener('click', () => {
    const urlValue = url.value.trim();
    const videoId = getYouTubeVideoId(urlValue);

    if (!videoId) {
        alert("Invalid YouTube URL");
        return;
    }

    const qualities = [
        "maxresdefault.jpg",
        "sddefault.jpg",
        "hqdefault.jpg",
        "mqdefault.jpg",
        "default.jpg"
    ];

    let index = 0;

    function loadThumbnail() {
        const thumbnail = `https://img.youtube.com/vi/${videoId}/${qualities[index]}`;
        imgTag.src = thumbnail;

        imgTag.onerror = () => {
            index++;
            if (index < qualities.length) {
                loadThumbnail(); // try next quality
            }
        };

        imgTag.onload = () => {
            finalThumbnail = thumbnail; // store valid image
            imgTag.alt = `youtube-thumbnail-${qualities[index]}`;
            downloadContainer.classList.remove('hide');
        };
    }

    loadThumbnail();
});

/**
 * FORCE DOWNLOAD (NO REDIRECT)
 */
download.addEventListener('click', async () => {
    if (!finalThumbnail) return;

    try {
        const response = await fetch(finalThumbnail);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = "youtube-thumbnail.jpg";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        URL.revokeObjectURL(blobUrl); // cleanup
    } catch (error) {
        alert("Download failed");
        console.error(error);
    }
});
