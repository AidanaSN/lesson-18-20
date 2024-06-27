let year = prompt("Введите год:");

if(year%4 == 0 && year != 1700 && year != 1800 && year != 1900 
    && year != 2100 && year != 2200 && year != 2300 && year != 2500 && year != 2600) {
    alert(year + " високосный год");
} 
else {
    alert(year + " не високосный год");
}