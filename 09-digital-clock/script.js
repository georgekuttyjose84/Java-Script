const elems = document.querySelectorAll(".clock .time-element");
const format = document.querySelector(".format");
const hourTag = elems[0];
const minTag  = elems[1];
const secTag  = elems[2];

let twentyFourHours = true;
format.addEventListener("click", event => {

    if(twentyFourHours) {
        twentyFourHours = false;
        format.innerHTML = '24 hr';
    } else{
        twentyFourHours = true;
        format.innerHTML = '12 hr';
    }
})

setInterval(() => {
    const date = new Date();
    let hour =  parseInt(date.getHours().toString().padStart(2, '0'));

    if(!twentyFourHours && hour > 12) {
            hour = (hour - 12);
    }

    hourTag.innerHTML = hour.toString().padStart(2, '0');
    minTag.innerHTML  = date.getMinutes().toString().padStart(2, '0');
    secTag.innerHTML  = date.getSeconds().toString().padStart(2, '0');
}, 1000);
