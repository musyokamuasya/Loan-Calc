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

    // This method has a bug, I'll figure out later. The method is not accurate

    const amountPayable = (amount * (interest + 1) * years);
    if (amountPayable > amount) {
        // Assumes no zero interest
        totalInterest.value = (amount * interest * years).toFixed(2);
        totalPayment.value = amountPayable.toFixed(2);
        monthlyPayment.value = ((amount * (interest + 1) * years) / 12).toFixed(2);
    } else {
        showError('Please check your numbers');
    }


    e.preventDefault();
}

function showError(message) {
    // Create an error div
    const errorDiv = document.createElement('div');
    // Give it classes of alert and alert danger to make it red
    errorDiv.className = 'alert alert-danger';
    // Get the parent card and the heading 
    const parentCard = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    // Create textnode and append it in the card before the heading
    errorDiv.appendChild(document.createTextNode(message));
    parentCard.insertBefore(errorDiv, heading);
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
}