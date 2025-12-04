const title = document.getElementById("title");
const dateTime = document.getElementById("datetime");
const submitBtn = document.getElementById("submit");

const secondElement = document.getElementById("second");
const minutesElement = document.getElementById("minute");
const hourElement = document.getElementById("hour");
const dayElement = document.getElementById("day");



let timer;

const res = document.getElementById("container-1");

const form = document.querySelector(".container");

const reset = document.querySelector(".reset");

const heading = document.getElementById('container-1').firstChild

reset.addEventListener("click", function () {
    form.hidden = false;
    form.classList.toggle( 'container');
    res.classList.toggle("container-1");
})




submitBtn.addEventListener("click", function () {
    // Get user input
    const dateTimeValue = dateTime.value;
    if (!dateTimeValue) {
        alert("Please select a date and time");
        return;
    }
    const heading = document.getElementById('container-1').firstElementChild;
    heading.innerHTML = title.value;
    form.hidden = true;
    form.classList.toggle( 'container');
    res.classList.toggle("container-1");

    const targetDate = new Date(dateTimeValue).getTime(); // ms timestamp
    // Clear old interval if user clicks again
    clearInterval(timer);

    // Start new countdown
    timer = setInterval(() => {

        const now = new Date().getTime();
        const diff = targetDate - now;

        // If time ended
        if (diff <= 0) {
            clearInterval(timer);
            secondElement.innerHTML = "00";
            minutesElement.innerHTML = "00";
            hourElement.innerHTML = "00";
            dayElement.innerHTML = "00";
            return;
        }

        // Convert
        let seconds = Math.floor((diff / 1000) % 60);
        let minutes = Math.floor((diff / 1000 / 60) % 60);
        let hours = Math.floor((diff / 1000 / 60 / 60) % 24);
        let days = Math.floor(diff / 1000 / 60 / 60 / 24);

        // UI update
        secondElement.innerHTML = seconds.toString().padStart(2, "0");
        minutesElement.innerHTML = minutes.toString().padStart(2, "0");
        hourElement.innerHTML = hours.toString().padStart(2, "0");
        dayElement.innerHTML = days.toString().padStart(2, "0");

    }, 1000);

    window.alert("Completed")

});
