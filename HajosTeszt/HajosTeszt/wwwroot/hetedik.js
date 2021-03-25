var kerdesek;
var k = 0;
var helyes;
window.onload = function (){ letoltes() }

var letoltes = function () {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letoltesBefejezodott(data)
    );
    
}
var letoltesBefejezodott = function (d) {
    
    console.log("Sikeres letöltés")
    console.log(d)
    kerdesek = d;
    kerdesMegjelenites(k);
    
}
var kerdesMegjelenites = function (kerdes) {
    document.getElementById("kérdés_szöveg").innerHTML = kerdesek[kerdes].questionText;
    document.getElementById("válasz1").innerHTML = kerdesek[kerdes].answer1;
    document.getElementById("válasz2").innerHTML = kerdesek[kerdes].answer2;
    document.getElementById("válasz3").innerHTML = kerdesek[kerdes].answer3;
    document.getElementById("kép1").src = kerdesek[kerdes].image;
    console.log(k);
    helyes = kerdesek[kerdes].correctAnswer;
    document.getElementById("válasz1").style.color = 'black';
    document.getElementById("válasz2").style.color = 'black';
    document.getElementById("válasz3").style.color = 'black';
    
}
    
function kattElore() {
    if (k == 0) {
        k = 1;
        kerdesMegjelenites(k);  
        return;
    }
    if (k==1) {
        k = 2;
        kerdesMegjelenites(k);
        return;
    }
    if (k==2) {
        k = 0;
        kerdesMegjelenites(k);
        return;
    }
}
   
    function kattVissza() {
    if (k == 0) {
        k = 2;
        kerdesMegjelenites(k);
        return;
    }
    if (k == 1) {
        k = 0;
        kerdesMegjelenites(k);
        return;
    }
    if (k == 2) {
        k = 1;
        kerdesMegjelenites(k);
        return;
    }
}


function valaszElso() {
    if (helyes == 1) {
        document.getElementById("válasz1").style.color = 'green';
    }
    else {
        document.getElementById("válasz1").style.color = 'red';
        
    }
   
}
function valaszMasodik() {
    if (helyes == 2) {
        document.getElementById("válasz2").style.color = 'green';
    }
    else {
        document.getElementById("válasz2").style.color = 'red';
        
    }
   
}
function valaszHarmadik() {
    if (helyes == 3) {
        document.getElementById("válasz3").style.color = 'green';
    }
    else {
        document.getElementById("válasz3").style.color = 'red';
        
    }
   
}

