const word = document.querySelector(".word");
const result = document.querySelector(".meaning");
const submit = document.querySelector(".submit");

submit.addEventListener("click", () => {

    if (!word.value) {
        return alert("Please enter a word!");
    }

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`)
        .then(res => res.json())
        .then(data => {
            result.value = data[0].meanings[0].definitions[0].definition;

            // Auto resize the textarea AFTER inserting text
            result.style.height = "auto";
            result.style.height = result.scrollHeight + "px";
        })
        .catch(err => {
            result.value = "Something went wrong!";

            result.style.height = "auto";
            result.style.height = result.scrollHeight + "px";
        });
});
