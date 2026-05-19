"use strict";
const pricipal = document.getElementById('pricipal');
const rate = document.getElementById('rate');
const time = document.getElementById('time');
const calculateButton = document.getElementById('calculate');
const resultDisplay = document.getElementById('result');
calculateButton.addEventListener('click', () => {
    const p = parseFloat(pricipal.value);
    const r = parseFloat(rate.value);
    const t = parseFloat(time.value);
    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        alert('Please enter valid numbers for principal, rate, and time.');
        resultDisplay.textContent = 'Result: Invalid input';
        return;
    }
    const simpleInterest = (p * r * t) / 100;
    resultDisplay.textContent = `${simpleInterest.toFixed(2)}`;
    //alert(`The Simple Interest is: ${simpleInterest.toFixed(2)}`);
});
