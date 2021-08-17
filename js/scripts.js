// payable fields
function calculatePayment(){
    // get payable fields
    const subTotal = document.getElementById("sub-total-price");
    const tax = document.getElementById("tax");
    const totalPayable = document.getElementById("total-price");

    // update payable fields
    const totalPrice = calculatePrice("phone") + calculatePrice("case");
    subTotal.innerText = totalPrice;
    tax.innerText = totalPrice / 10;
    totalPayable.innerText = (totalPrice + (totalPrice / 10));
}

// orducts' price calculation
function calculatePrice(product){
    // get products' total price
    const productPriceText = document.getElementById(product + "-price");

    // update products' total price
    const productCounter = parseInt(document.getElementById(product + "-count").value);

    // const updatedPrice = productCounter * productPrice;
    if (product == "phone"){
        productPriceText.innerText = productCounter * 1259;
        return productCounter * 1259;
    }
    else{
        productPriceText.innerText = productCounter * 59;
        return productCounter * 59;
    }
}

// common counter function with updation
function counterCalculator(product, isPlus){
    // get previous counter value
    const counterValueText = document.getElementById(product + "-count");
    const counterValue = parseInt(counterValueText.value);

    // update counter value
    if(isPlus){
        counterValueText.value = counterValue + 1;
    }
    else if(counterValue > 0){
        counterValueText.value = counterValue - 1;
    }
    calculatePrice(product);
    calculatePayment();
}

// counter handling with event listener

// phone counter
document.getElementById("phone-plus").addEventListener("click", function(){
    counterCalculator("phone", true);
});

document.getElementById("phone-minus").addEventListener("click", function(){
    counterCalculator("phone", false);
});

// case counter
document.getElementById("case-plus").addEventListener("click", function(){
    counterCalculator("case", true);
});

document.getElementById("case-minus").addEventListener("click", function(){
    counterCalculator("case", false);
});