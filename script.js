// FUNÇÕES:
function actionbutton(buttonclick) {
        if (buttonclick == "q") {
            actioncomp(q);
              
        }else if (buttonclick == "w") {
            actioncomp(w);
   
        }else if (buttonclick == "e") {
            actioncomp(e);
     
        }else if (buttonclick == "a") {
            actioncomp(a);
        
        }else if (buttonclick == "s") {
            actioncomp(s);
          
        }else if (buttonclick == "d") {
            actioncomp(d);
       
        }else if (buttonclick == "z") {
            actioncomp(z);
          
        }else if (buttonclick == "x") {
            actioncomp(x);
           
        }else if (buttonclick == "c") {
            actioncomp(c);
        }else{
            return;
        }
    };

function actioncomp(button) {
    button.setAttribute("style", "border: 2px solid yellow;");
    
    let audio = sons[button.id];
    audio.currentTime = 0;
    audio.play();

    setTimeout(function () {
        button.setAttribute("style", "border: 2px solid black;");
    }, 500);
};

const sons = {
    q: new Audio("assets/keyq.wav"),
    w: new Audio("assets/keyw.wav"),
    e: new Audio("assets/keye.wav"),
    a: new Audio("assets/keys.wav"),
    s: new Audio("assets/keys.wav"),
    d: new Audio("assets/keyd.wav"),
    z: new Audio("assets/keyz.wav"),
    x: new Audio("assets/keyx.wav"),
    c: new Audio("assets/keyc.wav")
};

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

let areacomp = document.querySelector("#areacomp");
let botao = document.querySelector("#botao-tocar");


botao.addEventListener("click", function () {
    let comp = areacomp.value;

    if(!comp){console.log("vazio");
    }else{
        for(let i = 0; i < comp.length; i++) {
            if(comp[i] != " "){
                setTimeout(() => actionbutton(comp[i]),(i*500));
            }else{
                setTimeout(() => {},(i*500));
            }
        }
    };
    areacomp.value = "";
    });

document.addEventListener("keyup", function (event) {
    actionbutton(event.key)});