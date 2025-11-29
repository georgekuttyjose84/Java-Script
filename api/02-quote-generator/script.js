const container = document.querySelector('.container');
const loader = document.querySelector('.loader');

const btn   = container.children[2];
const p     = container.children[1];
const quote = container.children[0];

function loaderActive() {
    loader.hidden = false;
    container.hidden = true;
}

function loaderInactive() {
    loader.hidden = true;
    container.hidden = false;
}

btn.addEventListener('click', async () => {
    btn.hidden = true;
    loaderActive();

    try {
        let resp = await fetch('https://dummyjson.com/quotes/random');
        let data = await resp.json();

        p.innerHTML = data.author;
        quote.innerHTML = data.quote;
        btn.innerHTML = 'Next Quote';

    } catch (err) {
        alert("Something went wrong!");
    }

    loaderInactive();
    setTimeout(() => btn.hidden = false, 3000);
});
