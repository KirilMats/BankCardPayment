document.querySelector('.card-number').addEventListener('input', e => {
    let val = e.currentTarget.value.split('-').join('');
    if (val.length > 0) {
        val = val.match(new RegExp('.{1,4}', 'g')).join('-');
    }
    e.currentTarget.value = val;

    let cardNum = e.currentTarget.value;
    if(cardNum.replace("-",'').trim().length > 5 && cardNum.replace("-",'').trim().length <= 6) {
        let cardInfo = new CardInfo(cardNum.replace("-",'').trim(), {
            banksLogosPath: './node_modules/card-info/dist/banks-logos/',
            brandsLogosPath: './node_modules/card-info/dist/brands-logos/'
        });
        console.log(cardInfo.bankLogo);
        console.log(cardInfo.brandLogo);
        document.querySelector('.bank-logo').src = cardInfo.bankLogo;
        document.querySelector('.brand-logo').src = cardInfo.brandLogo;
        document.querySelector('.card-front').style.backgroundColor = cardInfo.backgroundColor;
        document.querySelector('.card-back').style.backgroundColor = cardInfo.backgroundColor;
    }
});
