let hour = prompt("Введите время: ");

if(hour >= 6 && hour < 12) {
    alert("Доброе утро!");
}
else if (hour >= 12 && hour < 18){
    alert("Добрый день!");
}
else if ( hour > 18) {
    alert("Доброй ночи!");
}
