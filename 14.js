let a = Number(prompt("Введите сторону a:"));//3
let b = Number(prompt("Введите сторону b:"));//4
let c = Number(prompt("Введите сторону c:"));//5

if ((a < (b+c)) && (b < (a+c)) && (c < (a+b))) {
if (a == b && b == c) {
    alert("Равносторонний треугольник")
}
else  if (a == b || b == c || a == c) {
    alert("Равнобедренный треугольник")
}
else if (a != b && b != c && a != c) {
    alert("Разносторонний треугольник")
}
}
else {
    alert("Несуществующий треугольник")
}

