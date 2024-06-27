let a = Number(prompt("Введите сторону a:"));//3
let b = Number(prompt("Введите сторону b:"));//4
let c = Number(prompt("Введите сторону c:"));//5


if ((a < (b+c)) && (b < (a+c)) && (c < (a+b))) {
    alert("Да")
}
else  {
    alert("Нет")
}

