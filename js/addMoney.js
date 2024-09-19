//! Add Money Button functionalities

document.getElementById('btn-add-money-submit')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number');

        if(isNaN(addMoney)){
            alert('Failed to add Money')
            return;
        }

        // Wrong Way to verify
        if (pinNumber === 1234) {
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance + addMoney;
            document.getElementById('account-balance').innerText = newBalance;

            // Add to transaction history
            const p = document.createElement('p');
            p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
            // Should be a common function
            document.getElementById('transaction-container').appendChild(p);
           
        }
        else {
            alert('Incorrect pin !')
        }

    })


