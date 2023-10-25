function replaceName() {
        let name = prompt("Halo, siapakah anda","");
        document.getElementById("name").innerHTML = name;       
}
    replaceName();

function validateForm() {
    const waktu = Date();
    const nama = document.forms["message-form"]["nama"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["pesan"].value;

    if (waktu == "" || nama == "" || birthDate == "" || gender == "" || messages == ""){
        alert("tidak boleh kosong");
        return false;
    };

    setSenderUI(waktu,nama,birthDate,gender,messages);
    return false;
}

function setSenderUI(waktu,nama,birthDate,gender,messages) {
    document.getElementById("waktu").innerHTML = waktu;
    document.getElementById("sender-full-name").innerHTML = nama;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n)
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) {slideIndex = 1}
    if (n < 1) {slideIndex = imgList.length} ;
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideIndex-1].style.display = "block";
}

setInterval(() =>{
    plusDivs(1)
},5000)