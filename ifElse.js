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

document.getElementById("ekspresi").innerHTML = ekspresi;