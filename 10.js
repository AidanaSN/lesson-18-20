let age = prompt("Напишите месяц: ");

if (age >= 1 && age <= 2 || age == 12) {
    alert("Зима");
}
else if (age >= 3 && age <= 5) {
    alert("Весна");
}
else if (age >= 6 && age <= 8) {
    alert("Лето");
}
else if (age >= 9 && age <= 11) {
    alert("Осень");
}
else {
    alert("Неккоректный месяц");
}