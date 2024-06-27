let cake = prompt("Введите количество гостей: ");

if (cake % 2 == 0) {
    alert(cake/2 + " разрезов");
}
else if (cake % 2 == 1) {
    alert(cake + " разрезов");
}