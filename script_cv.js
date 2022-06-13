window.addEventListener("load", sidenVises);


function sidenVises(){
    //skjuler alle teksterne bag boksene//
    document.querySelector("#cv_1_tekst").classList.add("hide");
    document.querySelector("#cv_2_tekst").classList.add("hide");
    document.querySelector("#cv_3_tekst").classList.add("hide");
    document.querySelector("#cv_4_tekst").classList.add("hide");
    document.querySelector("#cv_5_tekst").classList.add("hide");
    document.querySelector("#cv_6_tekst").classList.add("hide");
    document.querySelector("#cv_7_tekst").classList.add("hide");
    document.querySelector("#cv_8_tekst").classList.add("hide");
    document.querySelector("#cv_9_tekst").classList.add("hide");

    //definerer eventlistenere (click funktioner)//
    document.querySelector("#cv_1_forside").addEventListener("mouseover", click1);
    document.querySelector("#cv_1_tekst").addEventListener("mouseout", click11);

    document.querySelector("#cv_2_forside").addEventListener("mouseover", click2);
    document.querySelector("#cv_2_tekst").addEventListener("mouseout", click22);

    document.querySelector("#cv_3_forside").addEventListener("mouseover", click3);
    document.querySelector("#cv_3_tekst").addEventListener("mouseout", click33);

    document.querySelector("#cv_4_forside").addEventListener("mouseover", click4);
    document.querySelector("#cv_4_tekst").addEventListener("mouseout", click44);

    document.querySelector("#cv_5_forside").addEventListener("mouseover", click5);
    document.querySelector("#cv_5_tekst").addEventListener("mouseout", click55);

    document.querySelector("#cv_6_forside").addEventListener("mouseover", click6);
    document.querySelector("#cv_6_tekst").addEventListener("mouseout", click66);

    document.querySelector("#cv_7_forside").addEventListener("mouseover", click7);
    document.querySelector("#cv_7_tekst").addEventListener("mouseout", click77);

    document.querySelector("#cv_8_forside").addEventListener("mouseover", click8);
    document.querySelector("#cv_8_tekst").addEventListener("mouseout", click88);

    document.querySelector("#cv_9_forside").addEventListener("mouseover", click9);
    document.querySelector("#cv_9_tekst").addEventListener("mouseout", click99);
}


    //skjuler forsider og viser tekst ved click på bokse (og omvendt)//
    function click1(){
        document.querySelector("#cv_1_tekst").classList.remove("hide");
        document.querySelector("#cv_1_forside").classList.add("hide");
    }
    function click11(){
        document.querySelector("#cv_1_tekst").classList.add("hide");
        document.querySelector("#cv_1_forside").classList.remove("hide");
    }

    function click2(){
        document.querySelector("#cv_2_tekst").classList.remove("hide");
        document.querySelector("#cv_2_forside").classList.add("hide");
    }
    function click22(){
        document.querySelector("#cv_2_tekst").classList.add("hide");
        document.querySelector("#cv_2_forside").classList.remove("hide");
    }

    function click3(){
        document.querySelector("#cv_3_tekst").classList.remove("hide");
        document.querySelector("#cv_3_forside").classList.add("hide");
    }
    function click33(){
        document.querySelector("#cv_3_tekst").classList.add("hide");
        document.querySelector("#cv_3_forside").classList.remove("hide");
    }

    function click4(){
        document.querySelector("#cv_4_tekst").classList.remove("hide");
        document.querySelector("#cv_4_forside").classList.add("hide");
    }
    function click44(){
        document.querySelector("#cv_4_tekst").classList.add("hide");
        document.querySelector("#cv_4_forside").classList.remove("hide");
    }

    function click5(){
        document.querySelector("#cv_5_tekst").classList.remove("hide");
        document.querySelector("#cv_5_forside").classList.add("hide");
    }
    function click55(){
        document.querySelector("#cv_5_tekst").classList.add("hide");
        document.querySelector("#cv_5_forside").classList.remove("hide");
    }
    
    function click6(){
        document.querySelector("#cv_6_tekst").classList.remove("hide");
        document.querySelector("#cv_6_forside").classList.add("hide");
    }
    function click66(){
        document.querySelector("#cv_6_tekst").classList.add("hide");
        document.querySelector("#cv_6_forside").classList.remove("hide");
    }

    function click7(){
        document.querySelector("#cv_7_tekst").classList.remove("hide");
        document.querySelector("#cv_7_forside").classList.add("hide");
    }
    function click77(){
        document.querySelector("#cv_7_tekst").classList.add("hide");
        document.querySelector("#cv_7_forside").classList.remove("hide");
    }

    function click8(){
        document.querySelector("#cv_8_tekst").classList.remove("hide");
        document.querySelector("#cv_8_forside").classList.add("hide");
    }
    function click88(){
        document.querySelector("#cv_8_tekst").classList.add("hide");
        document.querySelector("#cv_8_forside").classList.remove("hide");
    }

    function click9(){
        document.querySelector("#cv_9_tekst").classList.remove("hide");
        document.querySelector("#cv_9_forside").classList.add("hide");
    }
    function click99(){
        document.querySelector("#cv_9_tekst").classList.add("hide");
        document.querySelector("#cv_9_forside").classList.remove("hide");
    }