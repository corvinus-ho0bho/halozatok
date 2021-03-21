window.onload = function () {
    console.log("start");
    /*1. feladat *//*
    let n = document.getElementById("main");
    for (var i = 0; i < 10; i++) {
        let m = document.createElement("div");
        n.appendChild(m);
        m.innerText = (`${i + 1}`);
        m.style.background = `rgb(${255 - 15 * i}, ${255 - 15 * i}, ${255 - 15 * i})`;
    }
}*/

    
 /*   2. feladat */ 
    var faktoriálisR = function (n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * faktoriálisR(n - 1);
        }
    }

    let hova = document.getElementById("pascal");
    for (var sor = 0; sor < 10; sor++) {
        let sor = document.createElement("div");  //új div létrehozása az új sornak
        hova.classList.add("sor");                   //új div osztálylistájához add hozzá a "sor"-t
        hova.appendChild(sor);                         //új div-et add hozzá a "pascal" gyermekeihez
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            let elem = document.createElement("div");         //új div létrehozása az új elemnek
            elem.classList.add("elem");                       //új elem div osztálylistájához add hozzá az "elem"-et
            elem.innerText = faktoriálisR(sor) / (faktoriálisR(oszlop) * faktoriálisR(sor - oszlop));
            sor.appendChild(elem);
        }
    }

}