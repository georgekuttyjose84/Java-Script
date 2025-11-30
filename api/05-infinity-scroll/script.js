const mainContainer = document.querySelector('.container');
const loader = document.getElementById('loader');
const accessKey = "xKSsvHGKM6ULf9BPv1QAy7PYkd4UF2AH7Ah5RsjBrzU"; // Unsplash API key
const count = 20; // images per fetch
let isLoading = false;

// Fetch and render photos
async function getPhotos() {
    if (isLoading) return;

    isLoading = true;
    loader.style.display = "block";

    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`);
        const data = await response.json();

        const fragment = document.createDocumentFragment();

        data.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.urls.regular;
            img.alt = photo.alt_description || "Unsplash Image";
            img.loading = "lazy";
            fragment.appendChild(img);
        });

        mainContainer.appendChild(fragment);

    } catch (error) {
        console.error("Error fetching photos:", error);
    } finally {
        isLoading = false;
        loader.style.display = "none";
    }
}

// Throttle scroll event
let throttleTimer;
window.addEventListener('scroll', () => {
    if (throttleTimer) return;

    throttleTimer = setTimeout(() => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const threshold = document.body.scrollHeight - 300;

        if (scrollPosition >= threshold) {
            getPhotos();
        }

        throttleTimer = null;
    }, 300);
});

// Initial load
getPhotos();
