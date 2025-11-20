const submitBtn = document.querySelector('#btn');
const task = document.querySelector('#task');

const targetDiv = document.querySelector(".container > div:last-child");

submitBtn.addEventListener('click', () => {

    let taskContent = task.value;

    if(!taskContent){
        window.alert('Enter a valid task');
    }

    const div = document.createElement("div");
    div.classList.add('list');

    const p = document.createElement("p");
    p.textContent = taskContent;
    const button = document.createElement("button");
    button.value = 'X';
    button.textContent = 'X';
    button.classList.add('close');


    button.addEventListener('click', () => {
        button.parentElement.remove();
    })


    div.append(p)
    div.append(button)

    targetDiv.append(div);

});
