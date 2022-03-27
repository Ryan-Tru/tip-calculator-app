const fivePercent = document.querySelector('.five-percent');
const tenPercent = document.querySelector('.ten-percent');
const fifteenPercent = document.querySelector('.fifteen-percent');
const twentyfivePercent = document.querySelector('.twentyfive-percent');
const fiftyPercent = document.querySelector('.fifty-percent');

const billAmt = document.querySelector('#bill-amt')
const tipPercentageBtn = document.querySelectorAll('[data-tip]');
const customTip = document.querySelector('.custom');
const peopleAmt = document.querySelector('#people-amt');
const tipTotalText = document.querySelector('.tip-total');
const totalAmtText = document.querySelector('.total-amt');
const resetButton = document.querySelector('.reset-btn');

let tipPercent = 0;
let bill = 0;
let people = 0;

//Changes button color when selected, using if else statement to remove and add class
tipPercentageBtn.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('percent-btn-selected');

        if(button.classList.contains('five-percent')) {
            tenPercent.classList.remove('percent-btn-selected');
            fifteenPercent.classList.remove('percent-btn-selected');
            twentyfivePercent.classList.remove('percent-btn-selected');
            fiftyPercent.classList.remove('percent-btn-selected');

            tipPercent = parseFloat(fivePercent.getAttribute('data-tip'));
        } else if(button.classList.contains('ten-percent')) {
            fivePercent.classList.remove('percent-btn-selected');
            fifteenPercent.classList.remove('percent-btn-selected');
            twentyfivePercent.classList.remove('percent-btn-selected');
            fiftyPercent.classList.remove('percent-btn-selected');

            tipPercent = parseFloat(tenPercent.getAttribute('data-tip'));
        } else if(button.classList.contains('fifteen-percent')) {
            fivePercent.classList.remove('percent-btn-selected');
            tenPercent.classList.remove('percent-btn-selected');
            twentyfivePercent.classList.remove('percent-btn-selected');
            fiftyPercent.classList.remove('percent-btn-selected');

            tipPercent = parseFloat(fifteenPercent.getAttribute('data-tip'));
        } else if(button.classList.contains('twentyfive-percent')) {
            fivePercent.classList.remove('percent-btn-selected');
            tenPercent.classList.remove('percent-btn-selected');
            fifteenPercent.classList.remove('percent-btn-selected');
            fiftyPercent.classList.remove('percent-btn-selected');

            tipPercent = parseFloat(twentyfivePercent.getAttribute('data-tip'));
        } else if(button.classList.contains('fifty-percent')) {
            fivePercent.classList.remove('percent-btn-selected');
            tenPercent.classList.remove('percent-btn-selected');
            fifteenPercent.classList.remove('percent-btn-selected');
            twentyfivePercent.classList.remove('percent-btn-selected');

            tipPercent = parseFloat(fiftyPercent.getAttribute('data-tip'));
        }
        appendTotals();
        reset();
    });
});

//removes styling when the custom option is selected
customTip.addEventListener('click', () => {
    fivePercent.classList.remove('percent-btn-selected');
    tenPercent.classList.remove('percent-btn-selected');
    fifteenPercent.classList.remove('percent-btn-selected');
    twentyfivePercent.classList.remove('percent-btn-selected');
    fiftyPercent.classList.remove('percent-btn-selected');
});

//Gets percentage
customTip.addEventListener('input', () => {
    tipPercent = parseFloat(customTip.value / 100);
    appendTotals();
    reset();
});

//Gets bill amount
billAmt.addEventListener('input', () => {
    bill = parseFloat(billAmt.value);
    appendTotals();
    reset();
});


//Gets people amount
peopleAmt.addEventListener('input', () => {
    people = parseFloat(peopleAmt.value);
    appendTotals();
    reset();
});

//Appends totals
function appendTotals() {  
    let tipTotal = bill * tipPercent / people;
    let total = bill / people;
    if(people >= 1) {
        tipTotalText.innerHTML = `\$${tipTotal.toFixed(2)}`;
        totalAmtText.innerHTML = `\$${total.toFixed(2)}`;
    } else {
        tipTotalText.innerHTML = `\$0.00`;
        totalAmtText.innerHTML = `\$0.00`;
    }
}

function reset() {
    if(tipPercent > 0 || people > 0 || bill > 0) {
        resetButton.style.backgroundColor = 'var(--strong-cyan)';
    } else {
        resetButton.style.backgroundColor = 'rgb(15, 104, 109)';
    }
}





