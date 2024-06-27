let age = prompt("Напишите ваш возраст: ");

if (age < 12) {
    alert("Детский возраст");
}
else if (age >= 12 && age < 18) {
    alert("Подростковый возраст");
}
else if (age >= 18 && age < 65) {
    alert("Взрослый возраст");
}
else if (age >= 65) {
    alert("Пожилой возраст");
}