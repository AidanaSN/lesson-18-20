let weight = prompt("Укажите вес товара в кг:");
let country = prompt("Укажите страну доставки:");



if (weight <= 1) {
    alert("Стоимость доставки 10 долларов");
}
else if (weight > 1 && weight <= 5 && (country== "США" || country== "сша")) {
    alert("Стоимость доставки 20 долларов");
}
else if (weight > 1 && weight <= 5 && (country== "другая страна" || country== "Другая страна")) {
    alert("Стоимость доставки 30 долларов");
}
else if (weight > 5) {
    alert("Стоимость доставки 50 долларов");
}
