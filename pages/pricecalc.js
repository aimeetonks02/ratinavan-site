const order = new Map([
    ['price', 0.00],
    ['usprice', 0.00],
    ['type', 0],
    ['colour', 3],
    ['number', 1],
    ['error', false]
    // ['amount', 1],
    // ['style', 1]
]);
//UK and US price variables, set to zero
//type variable for the type of drawing, set to one, aka profile picture
//colour variable for the level of rendering, set to 4, aka fully rendered
//number variable for the number of characters, set to 2, aka two characters

//function for pushing the price to the screen
export function toScreen(){
    order.set('error', false);
    let price = calculatePrice();
    order.set('price', price);
    if (order.get('error') == true){
        return "This type is not available with this level of colour"
    }
    else{
        let price = order.get('price');
        price = Math.round(price).toFixed(2)
        let usprice = Math.round(price*1.28).toFixed(2)
        order.set('usprice', usprice);
        let screenprice = "£" + price + "/$" + usprice
        return screenprice;
    }
}

//function for finding the current price
export function getPrice(){
    let price = order.get('price');
    return price
}

//function for setting the style of the drawing
export function setSize(giventype){
    order.set('type', giventype);
    toScreen();
}

//function for setting the number of characters
export function setChar(number){
    order.set('number', number);
    toScreen();
}

//function for setting the rendering level of the drawing
export function setRender(level){
    order.set('colour', level);
    toScreen();
}

//function for calculating the current price
function calculatePrice(){
    order.set('price', 0.00);
    let type = order.get('type');
    let colour = order.get('colour');
    let number = order.get('number');
    let price = 0.00;
    //type is set to 0 when the form is loaded so that there is no estimated price
    if (type == 1){ //profile picture
        if (colour == 1){
            order.set('error', true);}
        else if (colour == 2){
            order.set('error', true);}
        else if (colour == 3){
            price = 3.00;}
        else{
            order.set('error', true);}
    }else if (type == 2){ //headshot
        if (colour == 1){
            order.set('error', true);}
        else if (colour == 2){
            order.set('error', true);}
        else if (colour == 3){
            price = 15.00;}
        else{
            price = 20.00;}
    }else if (type == 3){ //half body
        if (colour == 1){
            price = 5.00;}
        else if (colour == 2){
            price = 10.00;}
        else if (colour == 3){
            price = 25.00;}
        else{
            price = 35.00;}
    }else if (type == 4){ //full body
        if (colour == 1){
            price = 10.00;}
        else if (colour == 2){
            price = 15.00;}
        else if (colour == 3){
            price = 30.00;}
        else{
            price = 50.00;}
    }else if (type == 5 || type == 6){ //make an OC or Reference Sheet
        if (colour == 1){
            price = 15.00;}
        else if (colour == 2){
            price = 30.00}
        else if (colour == 3){
            price = 55.00;}
        else{
            price = 70.00;}
    }
    else{
        return price;
    }

    if (number == 2){
        price = price * 1.5;
    }
    else if (number == 3){
        price = price * 2;
    }
    else if (number == 4){
        price = price * 2.5;
    }
    else{
        price = price;
    }

    return price;
}
