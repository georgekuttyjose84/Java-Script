const detect = document.querySelector('.submit');
const letter = document.getElementById('text');
const result = document.getElementById('result');
let content;


detect.addEventListener('click', (e) => {
    if(!letter.value){
        return window.alert("Empty")
    }
    if(letter.value.charCodeAt(0) <= 127) {
        content = 'Ascii Code'
    } else {
        content = 'Unicode Code';
    }
    result.innerText = content;
})