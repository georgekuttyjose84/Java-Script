const word = document.querySelector(".word");
const result = document.querySelector(".meaning");
const submit = document.querySelector(".submit");

submit.addEventListener("click", async () => {

    if (!word.value) {
        return alert("Please enter a word!");
    }

    try {
        // Await API response
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`);

        // Convert to JSON
        const data = await res.json();

        // Extract meaning
        result.value = data[0].meanings[0].definitions[0].definition;

    } catch (err) {

        // If error occurred, show fallback message
        result.value = "Something went wrong!";
    }

    // Auto resize textarea after updating text
    result.style.height = "auto";
    result.style.height = result.scrollHeight + "px";
});
