function calculatePrice(product){
    // get products' total price
    const productPriceText = document.getElementById(product + "-price");

    // update products' total price
    const productCounter = parseInt(document.getElementById(product + "-count").value);

    // const updatedPrice = productCounter * productPrice;
    if (product == "phone"){
        productPriceText.innerText = productCounter * 1259;
    }
    else{
        productPriceText.innerText = productCounter * 59;
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