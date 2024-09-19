// ! Cash out Button Functionalities

document.getElementById('btn-cash-out-submit')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const cashOut = getInputFieldValueById('input-cash-out');
        const pinNumber = getInputFieldValueById('input-cash-out-pin');
        if (isNaN(cashOut)) {
            alert('Failed to add Money')
            return;
        }

        if (pinNumber === 1234) {
            const balance = getTextFieldValueById('account-balance');
            if(cashOut>balance){
                alert('You do not have enough Money!');
                return;
            }
            const newBalance = balance - cashOut;
            document.getElementById('account-balance').innerText = newBalance;
            // Transaction History
            const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.innerHTML = `
            <h4 class='text-2xl font-bold '>Cash Out</h4>
            <p> ${cashOut} Withdraw. New Balance: ${newBalance} </p>
            `
            document.getElementById('transaction-container').appendChild(div)

        }
        else {
            alert('Incorrect pin !')
        }

    })