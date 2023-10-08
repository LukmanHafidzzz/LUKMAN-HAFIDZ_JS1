// for (let x = 10; x <= 12; x++) {
//     switch (x) {
//         case 10:
//             console.log("Kamu " + x);
//             break;
//         case 11:
//             console.log("Aku " + x);
//             console.log("Kamu selingkuh Aku balas");
//             console.log("");
//             console.log("Kamu " + x);
//             break;
//         case 12:
//             console.log("Aku " + x);
//             console.log("Kamu tak jelas Aku lepas");
//             console.log("");

//             console.log("Bukan satu kali Kamu buat begini");
//             console.log("Bukan satu kali Kamu bikin makan hati");
//             break;
//     }
// }

let result = "";

for (let energy = 10; energy >= 0; energy--) {
    result += "Your energy is " + energy + "<br>";
}

document.getElementById("result").innerHTML = result;