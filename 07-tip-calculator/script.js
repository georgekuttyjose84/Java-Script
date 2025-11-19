const submitBtn = document.querySelector('#btn');
const amount = document.querySelector('#amount');
const tip = document.querySelector('#tip');
const result = document.querySelector('#result');

submitBtn.addEventListener('click', () => {


    let billAmount = amount.value;
    let tipPercentage = tip.value;

    if(!billAmount || !tipPercentage){
        alert('please enter a amount and percentage');
    }

    billAmount = parseFloat(billAmount);
    tipPercentage = parseFloat(tipPercentage);


    let totalAmount = billAmount + ((tipPercentage * billAmount)/100) ;

    result.innerText = 'Total Amount be to Paid is '+totalAmount;

});
