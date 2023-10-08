// If Else
let kondisiPerut = "Kosong";
let ekspresi;

if (kondisiPerut = "Kosong") {
    ekspresi = "Agus lapar Bu";
    
    kondisiPerut = "Masih Kosong";
    
    if (kondisiPerut != "Masih Kosong") {
        ekspresi = "Agus masih lapar bu"
    }
} else {
    ekspresi = "Agus tidak lapar Bu";
}
// If Else

// Switch Case
let mataKuliah;
switch (new Date().getDay()) {
    case 0:
        mataKuliah = "Hari Libur"
        break;
    case 1:
        mataKuliah = "Mobile App Development"
        mataKuliah = "Mobile App Development Laboratory Work"
        break;
    case 2:
        mataKuliah = "Probability Theory"
        break;
    case 3:
        mataKuliah = "Human Computer Interaction"
        break;
    case 4:
        mataKuliah = "Web Application Laboratory Work"
        break;
    case 5:
        mataKuliah = "Web Application Theory"
        break;
    case 6:
        mataKuliah = "Hari Libur"
        break;
}
// Switch Case

// For Statement
let result = "";

for (let energy = 10; energy >= 0; energy--) {
    result += "Your energy is " + energy + "<br>";
}
// For Statement

// While, Do While
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
// While, Do While

// Function
function dadu(bawah, atas) {
    return Math.floor(Math.random() * (atas - bawah + 1)) + bawah;
}
// Function



document.getElementById("ekspresi").innerHTML = ekspresi;
document.getElementById("mataKuliah").innerHTML = "Mata kuliah hari ini " + mataKuliah;
document.getElementById("result").innerHTML = result;