const principal = document.getElementById('principal');
const interest = document.getElementById('interest');
const tenure = document.getElementById('tenure');
const calculateBtn = document.getElementById('calculate');
const resultDisplay = document.getElementById('result');
const resetBtn = document.getElementById('reset');

let p = 0, r = 0, t = 0, result = 0;

calculateBtn.addEventListener('click', (event) => {
    let p = principal.value;
    let r = interest.value;
    let t = tenure.value;

    if (!p || !r || !t) {
        let msg = 'Please fill: ';
        if (!p) msg += 'Principal ';
        if (!r) msg += 'Rate ';
        if (!t) msg += 'Time ';
        alert(msg.trim());
        return;
    }

    p = parseFloat(p);
    r = parseFloat(r);
    t = parseFloat(t);

    result = p * ((1 + (r / 100)) ** t);

    const content = 'Maturity Amount will be ' + result.toFixed(2);
    resultDisplay.textContent = content;
});

resetBtn.addEventListener('click', () => {
    principal.value = '';
    interest.value = '';
    tenure.value = '';
    resultDisplay.textContent = 'Maturity Amount will be displayed here.';
});
