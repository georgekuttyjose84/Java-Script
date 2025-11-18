const submitBtn = document.querySelector('#vowelCheck');
const content = document.querySelector('#vowel');
const vowelList = ['a','e','i','o','u'];
const result = document.querySelector('#result');

const checker = document.querySelector('#checker');

// Track whether input listener is active
let isLiveCheckOn = false;

checker.addEventListener('click', () => {
    checker.classList.toggle('btn-class');

    // If turned ON → add input listener
    if (checker.classList.contains('btn-class')) {
        if (!isLiveCheckOn) {
            content.addEventListener('input', updateCount);
            isLiveCheckOn = true;
        }
    }

    // If turned OFF → remove input listener
    else {
        content.removeEventListener('input', updateCount);
        isLiveCheckOn = false;
    }
});

// Manual button click
submitBtn.addEventListener('click', () => {
    result.innerText = 'Total Number of Vowels is ' + count();
});

function updateCount() {
    result.innerText = 'Total Number of Vowels is ' + count();
}

function count() {
    const contentValue = content.value;

    if (!contentValue) {
        return 0;
    }

    let total = 0;

    for (let i = 0; i < contentValue.length; i++) {
        let letter = contentValue[i].toLowerCase();
        if (vowelList.includes(letter)) {
            total++;
        }
    }
    return total;
}
