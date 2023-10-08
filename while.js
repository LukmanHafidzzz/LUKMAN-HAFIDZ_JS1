let email = "lukman@gmail.com";
let pass = "123456";

alert("While or Do While")
let email2 = prompt("Masukan email");
let pass2 = prompt("Masukan password");

while ((email2 !== email)) {
    while ((pass2 !== pass)) {
        alert("Email atau password salah")
        email2 = prompt("Masukan email");
        pass2 = prompt("Masukan password");
    }
}
alert("Welcome Lukman");