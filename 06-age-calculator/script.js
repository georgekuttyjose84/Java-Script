const submitBtn = document.querySelector('#btn');
const dateTime = document.querySelector('#datetime');
const result = document.querySelector('#result');

submitBtn.addEventListener('click', () => {

    // If no date is selected
    if (!dateTime.value) {
        result.textContent = "Please select a valid date.";
        return;
    }

    const selectedYear = new Date(dateTime.value).getFullYear();
    const currentYear = new Date().getFullYear();

    const age = currentYear - selectedYear;

    // Prevent negative age
    if (age < 0) {
        result.textContent = "Invalid date of birth.";
        return;
    }

    result.textContent = "Age = " + age;
});
