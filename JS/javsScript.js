
function memoryClicked(product, price, isIncreasing) {

    const productInput = document.getElementById(product + '-cost');
    const productInnerValue = parseInt(productInput.innerText);
    if (isIncreasing == false) {
        productCheckFinal = 0;
        productInput.innerText = productCheckFinal;
    }
    else {
        productCheckFinal = price;
        productInput.innerText = productCheckFinal;
    }

    totalAdd()
}

/* Total ADD */
function totalAdd() {

    const bestPrice = parseInt(document.getElementById('bestPrice').innerText);
    const extramemory = parseInt(document.getElementById('exMem-cost').innerText);
    const extraStorage = parseInt(document.getElementById('exStor-cost').innerText);
    const extraDelivery = parseInt(document.getElementById('delivery-cost').innerText);
    const TotalPriceofPc = extramemory + extraStorage + extraDelivery + bestPrice;
    document.getElementById('total-cost').innerText = TotalPriceofPc;
    document.getElementById('total-balance').innerText = TotalPriceofPc;


    buttonFunction()

}
function buttonFunction() {

    const promo = document.getElementById('promoCode');
    const promoValue = promo.value;
    promo.value = '';
    const promotion = document.getElementById('total-balance');
    const promptionExtra = promotion.innerText;
    const all = ['sadhinota', 'joyvangla', 'bongobondhu'];

    for (allFile of all) {
        if (promoValue == allFile) {

            const promotionConvert = parseInt(promptionExtra) - 100;
            promotion.innerText = promotionConvert;
            console.log(promotionConvert);
            document.getElementById('button-apply').hidden = true;
        }
    }
}

/* Button Click and add Price */
document.getElementById('8gbMem-btn').addEventListener('click', function () {
    memoryClicked('exMem', 0, false)
});

document.getElementById('16gbMem-btn').addEventListener('click', function () {
    memoryClicked('exMem', 100, true)
});

document.getElementById('256gbStor-btn').addEventListener('click', function () {
    memoryClicked('exStor', 0, false)
});
document.getElementById('512gbStor-btn').addEventListener('click', function () {
    memoryClicked('exStor', 150, true)
});
document.getElementById('1TBStor-btn').addEventListener('click', function () {
    memoryClicked('exStor', 200, true)
});

document.getElementById('free-btn').addEventListener('click', function () {
    memoryClicked('delivery', 0, false)
});
document.getElementById('Nofree-btn').addEventListener('click', function () {
    memoryClicked('delivery', 20, true)
});
document.getElementById('button-apply').addEventListener('click', function () {
    buttonFunction()
});
