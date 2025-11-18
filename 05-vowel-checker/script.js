const submitBtn = document.querySelector('#vowelCheck');
const content = document.querySelector('#vowel');
const vowelList = ['a','e','i','o','u'];
const result = document.querySelector('#result');


content.addEventListener('input', (e) => {

    const contentValue = content.value

    const totalLetters = contentValue.length;

    if(totalLetters === null || totalLetters === 0){
        alert('Please enter the content');
    }

    let count = 0;


    for (let i = 0; i < totalLetters; i++) {
        let letter = contentValue.charAt(i);
        letter = letter.toLowerCase()
        if(vowelList.includes(letter)) {
            count = count + 1;
        }
    }

    result.innerText = 'Total Number of Vowels is ' + count;

})