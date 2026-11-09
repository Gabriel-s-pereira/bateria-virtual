// COLETAS:
let q = document.querySelector("#q");
let w = document.querySelector("#w");
let e = document.querySelector("#e");
let a = document.querySelector("#a");
let s = document.querySelector("#s");
let d = document.querySelector("#d");
let z = document.querySelector("#z");
let x = document.querySelector("#x");
let c = document.querySelector("#c");

// FUNÇÕES:
function getbutton() {
    document.addEventListener("keyup", function (event) {
        if (event.key == "q") {
            q.setAttribute("background-color", "yellow");
            console.log("q");  
        }if (event.key == "w") {
            w.setAttribute("color", "yellow");  
        }if (event.key == "e") {
            e.setAttribute("color", "yellow");  
        }if (event.key == "a") {
            a.setAttribute("color", "yellow");  
        }if (event.key == "s") {
            s.setAttribute("color", "yellow");  
        }if (event.key == "d") {
            d.setAttribute("color", "yellow");  
        }if (event.key == "z") {
            z.setAttribute("color", "yellow");  
        }if (event.key == "x") {
            x.setAttribute("color", "yellow");  
        }if (event.key == "c") {
            c.setAttribute("color", "yellow");  
        }
    });
};

getbutton();