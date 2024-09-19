// ! Cash out Button Functionalities

document.getElementById('btn-cash-out-submit')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const cashOut = getInputFieldValueById('input-cash-out');
        const pinNumber = getInputFieldValueById('input-cash-out-pin');
        if (pinNumber === 1234) {
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance - cashOut;
            document.getElementById('account-balance').innerText = newBalance;
        }
        else {
            alert('Incorrect pin !')
        }

    })