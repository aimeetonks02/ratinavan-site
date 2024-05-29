let price = 0.00
let usprice = 0.00
let type = 0
let colour = 4
let number = 2
let amount = 1
let style = 1

export function toScreen(){
    price = Math.round(price).toFixed(2)
    usprice = Math.round(price*1.28).toFixed(2)
    let screenprice = "£" + price + "/$" + usprice
    return screenprice
}

export function getPrice(){
    let stringprice = document.getElementById('price').value;
    let amount = stringprice.replace("£", "")
    price = parseFloat(amount)
    return price
}

