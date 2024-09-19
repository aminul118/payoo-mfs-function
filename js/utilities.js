/***
 * Common Shared Function
 */

// ! Input Field Value getting Function + convert it String to Number

function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

// ! Any Text value getting function + convert it String to Number

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

// ! Show a section
function showSectionById(id){

    // * Hide All the section

    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    // * Show the section with with the provided id as parameter
    document.getElementById(id).classList.remove('hidden');
}