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

document.getElementById("mataKuliah").innerHTML = "Mata kuliah hari ini " + mataKuliah;