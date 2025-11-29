const key = 'TIqEva2xthZTa1ZIVVXJpIizId2YNbHWIWCpIjP82yDv9oY49UxqXprN'

const containerMain = document.querySelector('.image-grid');

const searchBtn = document.querySelector('.src-btn');
const close     = document.querySelector('.close');
const input     = document.querySelector('.search');

const more     = document.querySelector('.more');

const heading     = document.querySelector('.image-container > h2');
let pageNumber = 1;
let lastSearchItem = null

close.addEventListener('click', (e) => {
    input.value = '';
    lastSearchItem = null;
})

more.addEventListener('click', (e) => {
    pageNumber = pageNumber + 1;
    trendingImages(lastSearchItem)
        .then(sucess(),failure())

})


function sucess() {
    return 'success';
}

function failure() {
    return 'Error';
}

searchBtn.addEventListener('click', (e) => {
    pageNumber = 1;
    containerMain.replaceChildren();
    lastSearchItem = input.value;
    heading.innerText = lastSearchItem;
    trendingImages(input.value)
        .then(sucess(),failure())
})




async function trendingImages(fetchMode) {

    try {
        const url = fetchMode === null
            ? `https://api.pexels.com/v1/curated?per_page=5&page=${pageNumber}`
            : `https://api.pexels.com/v1/search?query=${fetchMode}&per_page=5&page=${pageNumber}`;

        const request = await fetch(url, {
            headers: {
                Authorization: key
            }
        });

        const posts = await request.json();

        let images = posts.photos
        images.forEach(image => {
            let imageUrl = image.url
            let imageSrc = image.src.original
            let imageAlt = image.src.original


            let div = document.createElement('div');
            div.classList.add('images');

            let a = document.createElement('a');
            a.setAttribute('href', imageUrl);
            a.setAttribute('target', '_blank');

            let img = document.createElement('img');
            img.src = imageSrc;
            img.alt = imageAlt;

            let btn = document.createElement('button');
            btn.innerHTML = 'Download';

            a.appendChild(img);
            a.appendChild(btn);
            div.appendChild(a);

            containerMain.appendChild(div);

        })

    }catch(err) {
        window.alert('Sorry something went wrong.');
    }
}

trendingImages();