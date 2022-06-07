window.addEventListener("load", sidenVises);
  
//siden starter med at vise projekt 02 web//
//skjuler de andre projekter (add hide) og definerer eventlisteners = click funktionerne//

function sidenVises(){
document.querySelector("#projekt_03").classList.add("hide");
document.querySelector("#projekt_04").classList.add("hide");
document.querySelector("#projekt_05").classList.add("hide");

document.querySelector("#knap02").addEventListener("click", click2);
document.querySelector("#knap03").addEventListener("click", click3);
document.querySelector("#knap04").addEventListener("click", click4);
document.querySelector("#knap05").addEventListener("click", click5);
}

// skjuler de andre projekter, og fjerne hide fra projektet man klikker på//

function click2(){
    document.querySelector("#projekt_02").classList.remove("hide");
    document.querySelector("#projekt_03").classList.add("hide");
    document.querySelector("#projekt_04").classList.add("hide");
    document.querySelector("#projekt_05").classList.add("hide");
}

function click3(){
    document.querySelector("#projekt_02").classList.add("hide");
    document.querySelector("#projekt_03").classList.remove("hide");
    document.querySelector("#projekt_04").classList.add("hide");
    document.querySelector("#projekt_05").classList.add("hide");
}

function click4(){
    document.querySelector("#projekt_02").classList.add("hide");
    document.querySelector("#projekt_03").classList.add("hide");
    document.querySelector("#projekt_04").classList.remove("hide");
    document.querySelector("#projekt_05").classList.add("hide");
}

function click5(){
    document.querySelector("#projekt_02").classList.add("hide");
    document.querySelector("#projekt_03").classList.add("hide");
    document.querySelector("#projekt_04").classList.add("hide");
    document.querySelector("#projekt_05").classList.remove("hide");
}

