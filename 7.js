let userLogin = prompt("Введите логин: ");
let userPass = prompt("Введите пароль: ");

let login = "aidana";
let password = "12345";

if (login == userLogin && password == userPass) {
    alert("Доступ разрешен");
} else {
    alert("Доступ запрещен");
}

