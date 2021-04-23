var kerdesek;
var k = 2;
var helyes;
window.onload = function () { letoltes(k) }

var letoltes = function (id) {
        fetch(`/questions/${id}`)
            .then(response => {
                if (!response.ok) {
                    console.error(`Hibás válasz: ${response.status}`)
                }
                else {
                    return response.json()
                }
            })
            .then(data => kerdesMegjelenites(data));
    }    


function kerdesMegjelenites(kerdes) {
    console.log(kerdes);
    document.getElementById("kérdés_szöveg").innerText = kerdes.questionText
    document.getElementById("válasz1").innerText = kerdes.answer1
    document.getElementById("válasz2").innerText = kerdes.answer2
    document.getElementById("válasz3").innerText = kerdes.answer3
    if (kerdes.image == null) {
        document.getElementById("kép1").src = "none";
    } else {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kerdes.image;
    }
    helyes = kerdes.correctAnswer;
    document.getElementById("válasz1").style.color = 'black';
    document.getElementById("válasz2").style.color = 'black';
    document.getElementById("válasz3").style.color = 'black';

   
}
/*
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
*/

function kattVissza() {
     if (k == 1) {
            k = 859;
            letoltes(k)
        } else {
         k--;
         letoltes(k);
        }
}
function kattElore() {
    if (k == 859) {
        k = 1;
        letoltes(k)
    } else {
        k++;
        letoltes(k);
    }
}
    
/*function kattElore() {
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
}*/


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

