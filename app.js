/*
====================================================
                Get Phone Button
====================================================
 */

//handle phone plueBtn
document.getElementById('phonePlus').addEventListener('click', function () {
    const phoneInput = document.getElementById('phoneInput');
    const phoneNumber = parseInt(phoneInput.value) + 1;
    phoneInput.value = phoneNumber;
    //handle total onPress Plus Btn
    document.getElementById('phoneAmount').innerText = phoneNumber * 1259;
    // call Total
    handleAllTotal();

})

//handle phone minasBtn
document.getElementById('phoneMinas').addEventListener('click', function () {
    const phoneInput = document.getElementById('phoneInput');
    const phoneNumber = parseInt(phoneInput.value);
    const getValue = phoneNumber - 1;
    if (phoneNumber > 0) {
        phoneInput.value = getValue;
    } else {
        alert("You can't buy O Balance..Please buy and try aggain");
    }
    //handle total onPress Plus Btn
    document.getElementById('phoneAmount').innerText = phoneNumber * 1259;
    // call Total
    handleAllTotal();
})



/*
====================================================
                Get Case Function Start
====================================================
 */


//handle phone plueBtn
document.getElementById('casePlus').addEventListener('click', function () {
    const phoneInput = document.getElementById('caseInput');
    const phoneNumber = parseInt(phoneInput.value) + 1;
    phoneInput.value = phoneNumber;
    //handle total onPress Plus Btn
    document.getElementById('caseAmount').innerText = phoneNumber * 59;
    // call Total
    handleAllTotal();

})

//handle phone minasBtn
document.getElementById('caseMinas').addEventListener('click', function () {
    const phoneInput = document.getElementById('caseInput');
    const phoneNumber = parseInt(phoneInput.value);
    const getValue = phoneNumber - 1;
    if (phoneNumber > 0) {
        phoneInput.value = getValue;
    } else {
        alert("You can't buy O Balance..Please buy and try aggain");
    }
    //handle total onPress Plus Btn
    document.getElementById('caseAmount').innerText = phoneNumber * 59;

    // call Total
    handleAllTotal();
})





function handleAllTotal() {


    //handle All Total
    const getInput = document.getElementById('phoneInput');
    const phoneNumberTotal = parseInt(getInput.value) * 1259;

    const caseInput = document.getElementById('caseInput');
    const getNumberTotal = parseInt(caseInput.value) * 59;

    //total add
    const total = phoneNumberTotal + getNumberTotal;

    //subTotal
    const subTotal = document.getElementById('subTotal');
    subTotal.innerText = total;

    //tax
    const subTax = document.getElementById('tax');
    const totalTax = total / 50;
    tax.innerText = totalTax;

    //total 
    const totalWithTax = document.getElementById('totalAmount');
    const totalWithTaxValue = total + totalTax;
    totalWithTax.innerText = totalWithTaxValue;
}


//handle Checkout Button 
function handleCheckOut() {
    alert('Your order Done..Please Wait for untill delivery product...Thanks You')
}


//Remove Product 
function phoneRemove() {
    const phoneContainer = document.getElementById('phoneContainer');
    phoneContainer.style.display = "none";
}
function caseRemove() {
    const caseContainer = document.getElementById('caseContainer');
    caseContainer.style.display = "none";
}

