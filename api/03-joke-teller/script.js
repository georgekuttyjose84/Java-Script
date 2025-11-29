const container = document.querySelector('.container');

const h1 = container.children[0];
const btn= container.children[1];
const p  = container.children[2];

btn.addEventListener('click', async () => {
    btn.disabled = true;

    try {
        let resp = await fetch('https://v2.jokeapi.dev/joke/Any');
        let data = await resp.json();

        if (data.type === "single") {
            p.innerHTML = data.joke;
        } else {
            p.innerHTML = `${data.setup} <br><br> ${data.delivery}`;
        }

        btn.innerHTML = 'Next Joke';

    } catch (err) {
        alert("Something went wrong!");
        console.log(err);
    }

    setTimeout(() => btn.disabled = false, 2000);
});
