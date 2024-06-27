let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");

if (num1 > num2){
    alert(num1 + " наибольшее число");
}else if (num1 == num2) {
    alert("Они равны");
}else {
    alert(num2 + " наибольшее число");
}