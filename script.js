// pro level
function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    //const caseNewCount = caseCount - 1;
    let productNewCount = productCount;
    if(isIncrease == true){
       productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
        productNewCount = productCount - 1;
   }
   productInput.value = productNewCount;
   // const productTotalPrice = productNewCount * 59;
    let productTotalPrice  = 0;
    if(product == 'phone'){
        productTotalPrice = productNewCount * 1219;
    }
    if(product == 'case'){
        productTotalPrice = productNewCount * 59;
    }
    document.getElementById(product + 'UnitPrice').innerText = '$' + productTotalPrice;
    calculateTotal();
}


 
// calculate total
function calculateTotal() {
   const phoneCount = getInputValue('phone');

   const caseCount = getInputValue('case');

   const totalPrice = phoneCount * 1219 + caseCount * 59;
   document.getElementById('total-price').innerText = '$' + totalPrice;
   
   const totalTax = '$' +  totalPrice * .1;
   document.getElementById('total-tax').innerText = totalTax;

   const grandPrice =  totalPrice * 0.01 + phoneCount * 1219 + caseCount * 59;
   document.getElementById('grand-total').innerText = '$' + grandPrice ;
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
 
    return productCount;
}

// intermediet level
// phone count and price function
// function handlePhoneChange(isIncrease) {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneCount + 1;
//     let phoneNewCount = phoneCount;
//     if(isIncrease == true){
//        phoneNewCount = phoneCount + 1;
//     }
//     if(isIncrease == false && phoneCount > 0){
//          phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotalPrice = phoneNewCount * 1219;
//     document.getElementById('phoneUnitPrice').innerText = '$' + phoneTotalPrice;
// }

// // case count and price function
// function handleCaseChange(isIncrease) {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     //const caseNewCount = caseCount - 1;
//     let caseNewCount = caseCount;
//     if(isIncrease == true){
//        caseNewCount = caseCount + 1;
//     }
//     if(isIncrease == false && caseCount > 0){
//         caseNewCount = caseCount - 1;
//    }
//     caseInput.value = caseNewCount;
//     const caseTotalPrice = caseNewCount * 59;
//     document.getElementById('caseUnitPrice').innerText = '$' + caseTotalPrice;
// }


// primary level
// big way te phone ar kaj
// document.getElementById('phone-increase').addEventListener('click', function () {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount + 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotalPrice = phoneNewCount * 1219;
//     document.getElementById('phoneUnitPrice').innerText = '$' + phoneTotalPrice;
// });

// document.getElementById('phone-decrease').addEventListener('click', function () {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount - 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotalPrice = phoneNewCount * 1219;
//     document.getElementById('phoneUnitPrice').innerText = '$' + phoneTotalPrice;
// });


// big way te case ar kaj
// document.getElementById('case-increase').addEventListener('click', function(){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotalPrice = caseNewCount * 59;
//     document.getElementById('caseUnitPrice').innerText = '$' + caseTotalPrice;
// });

// document.getElementById('case-decrease').addEventListener('click', function(){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotalPrice = caseNewCount * 59;
//     document.getElementById('caseUnitPrice').innerText = '$' + caseTotalPrice;
// });