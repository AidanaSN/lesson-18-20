let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");
let num3 = prompt("Введите третье число:");


if (num1 > num2 && num1 > num3){
    alert(num1 + " наибольшее число");
}else if (num2 > num1 && num2 > num3) {
    alert(num2 + " наибольшее число");
}else if (num3 > num1 && num3 > num2) {
    alert(num3 + " наибольшее число");
}