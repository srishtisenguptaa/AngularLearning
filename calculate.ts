const pricipal = document.getElementById('pricipal') as HTMLInputElement;
const rate = document.getElementById('rate') as HTMLInputElement;
const time = document.getElementById('time') as HTMLInputElement;
const calculateButton = document.getElementById('calculate') as HTMLButtonElement;
const resultDisplay = document.getElementById('result') as HTMLElement;

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