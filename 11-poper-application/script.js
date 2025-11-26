const clickMe   = document.querySelector(".click-me");
const close     = document.querySelector(".close");
const container = document.querySelector(".container-1");
clickMe.addEventListener("click", (e) => {
    container.classList.remove('hidden');
    clickMe.classList.add('hidden');
})

close.addEventListener("click", (e) => {
    container.classList.add('hidden');
    clickMe.classList.remove('hidden');
})
