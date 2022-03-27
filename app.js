const fivePercent = document.querySelector('.five-percent');
const tenPercent = document.querySelector('.ten-percent');
const fifteenPercent = document.querySelector('.fifteen-percent');
const twentyfivePercent = document.querySelector('.twentyfive-percent');
const fiftyPercent = document.querySelector('.fifty-percent');

const billAmt = document.querySelector('#bill-amt')
const tipPercentageBtn = document.querySelectorAll('[data-tip]');
const customTip = document.querySelector('.custom');
const peopleAmt = document.querySelector('#people-amt');
const tipTotal = document.querySelector('.tip-total');
const totalAmt = document.querySelector('.total-amt');

let tipPercent;
let bill;
let people;

//Changes button color when selected, using if else statement to remove and add class
tipPercentageBtn.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('percent-btn-selected');

        if(button.classList.contains('five-percent')) {
            tenPercent.classList.remove('percent-btn-selected');
            fifteenPercent.classList.remove('percent-btn-selected');
            twentyfivePercent.classList.remove('percent-btn-selected');
            fiftyPercent.classList.remove('percent-btn-selected');

            tipPercent = fivePercent.getAttribute('data-tip');

        } else if(button.classList.contains('ten-percent')) {
            fivePercent.classList.remove('percent-btn-selected');
            fifteenPercent.classList.remove('percent-btn-selected');
            twentyfivePercent.classList.remove('percent-btn-selected');
            fiftyPercent.classList.remove('percent-btn-selected');

            tipPercent = tenPercent.getAttribute('data-tip');
        } else if(button.classList.contains('fifteen-percent')) {
            fivePercent.classList.remove('percent-btn-selected');
            tenPercent.classList.remove('percent-btn-selected');
            twentyfivePercent.classList.remove('percent-btn-selected');
            fiftyPercent.classList.remove('percent-btn-selected');

            tipPercent = fifteenPercent.getAttribute('data-tip');
        } else if(button.classList.contains('twentyfive-percent')) {
            fivePercent.classList.remove('percent-btn-selected');
            tenPercent.classList.remove('percent-btn-selected');
            fifteenPercent.classList.remove('percent-btn-selected');
            fiftyPercent.classList.remove('percent-btn-selected');

            tipPercent = twentyfivePercent.getAttribute('data-tip');
        } else if(button.classList.contains('fifty-percent')) {
            fivePercent.classList.remove('percent-btn-selected');
            tenPercent.classList.remove('percent-btn-selected');
            fifteenPercent.classList.remove('percent-btn-selected');
            twentyfivePercent.classList.remove('percent-btn-selected');

            tipPercent = fiftyPercent.getAttribute('data-tip');
        }

        console.log(tipPercent);
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
customTip.addEventListener('input', () => tipPercent = customTip.value / 100);

//Gets bill amount
billAmt.addEventListener('input', () => bill = billAmt.value);

//Gets people amount
peopleAmt.addEventListener('input', () => people = peopleAmt.value);





