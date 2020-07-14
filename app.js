// Submit
document.querySelector('#loan-form').addEventListener('submit', calculateResults);

// Calculate Results

function calculateResults(e) {
    console.log('Calculating...');
    // UI Vars
    const amount = document.querySelector('#amount').value; //Principal value
    const interest = document.querySelector('#interest').value / 100; //Rate
    const years = document.querySelector('#years').value; //Time
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');

    /* Calculate Simple Interest
     Interest = principal * percentage-rate * time
     */
    totalInterest.value = (amount * interest * years).toFixed(2);
    totalPayment.value = (amount * (interest + 1) * years).toFixed(2);
    monthlyPayment.value = ((amount * (interest + 1) * years) / 12).toFixed(2);

    e.preventDefault();
}