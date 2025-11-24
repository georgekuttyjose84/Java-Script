const expense = document.querySelector('.format');
const container = document.querySelector('.container');

expense.addEventListener('click', event => {

    const item = window.prompt('Enter the item');
    const amount = window.prompt('enter the total amount');


    if(!item || !amount) {
        return window.alert('Please enter the item!');
    }


    const h1 = document.createElement('h3');
    h1.innerText = item;

    const h2 = document.createElement('h3');
    h2.innerText = amount;

    const div = document.createElement('div');
    div.classList.add('expense-container');

    const button = document.createElement('button');
    button.innerText = 'X';
    button.classList.add('close');

    button.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        button.parentElement.remove();

    })
    div.append(h1);
    div.append(h2);
    div.append(button);
    container.append(div);

})