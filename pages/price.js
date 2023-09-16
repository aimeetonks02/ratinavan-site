let price = 0.00
let usprice = 0.00
let type = 0
let colour = 4
let number = 2
let amount = 1
let style = 1

export function setSize(amount){
    let oldType = type
    type = amount
    increment(type, oldType)
}

export function noChara(number){
    price = getPrice()
    let oldChara = 1
    if (number == 2){
        oldChara = getChara()
        price = getDifference(oldChara, 2)
        price = price * 1.5
        setChara(2)
        toScreen(price)
    }
    else if (number == 3){
        oldChara = getChara()
        price = getDifference(oldChara, 3)
        price = price * 2
        setChara(3)
        toScreen(price)    }
    else if (number == 4){
        oldChara = getChara()
        price = getDifference(oldChara, 4)
        price = price * 2.5
        setChara(4)
        toScreen(price)    }
    else{
        oldChara = getChara()
        price = getDifference(oldChara, 1)
        setChara(1)
        toScreen(price)    }
}

export function setChara(number){
    if (number == 0){
        return amount
    }
    else{
        amount = number
    }
}

function getChara(){
    number = setChara(0)
    return number
}

function getDifference(oldChara, newChara){
    price = getPrice()
    if (oldChara == 2){
        price = price/1.5
    }
    else if (oldChara == 3){
        price = price/2
    }
    else if (oldChara == 4){
        price = price/2.5
    }
    else{
        return price
    }
    return price
}

// export function getPrice(){
//     // let string = priceEl.innerText
//     // let amount = string.replace("£", "")
//     price = parseFloat(amount)
//     return price
// }

function setStyle(type){
    style = previousStyle(0.00)
    price = getPrice()
    style = price / style
    price = style * type
    previousStyle(type)
    toScreen(price)
}

function previousStyle(type){
    if (type == 0.00){
        return style
    }
    else{
        style = type
    }
}

function increment(amount, oldAmount) {
    price = price - oldAmount
    price = price + amount
    toScreen(price)
}

export default function toScreen(price){
    price = Math.round(price).toFixed(2)
    usprice = Math.round(price*1.28).toFixed(2)
    // priceEl.innerText = "£" + price + "/$" + usprice
    return price
}