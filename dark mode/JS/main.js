let santaMod = document.getElementById("button_santa"); //récupération du bouton
let buttons = document.querySelectorAll("button"); //récupération de tous les boutons
let p = document.querySelectorAll("p"); //récupération de tous les p
let h3 = document.querySelectorAll("h3");
let h2 = document.querySelectorAll("h2");
let h1 = document.querySelectorAll("h1");
let footer = document.querySelector(".pied-de-page");


santaMod.addEventListener("click", function() { //ajout de l'event click sur le bouton
    buttons.forEach(button => {
        button.classList.toggle("button-santa-mod");
    });
    document.body.style.backgroundColor = "#180000";

    p.forEach(p => { //ajout de la classe p-santa-mod sur les p
        p.classList.toggle("p-santa-mod");
    });
    h3.forEach(h3 => {
        h3.classList.toggle("h-santa-mod");
    });
    h2.forEach(h2 => {
        h2.classList.toggle("h-santa-mod");
    });
    h1.forEach(h1 => {
        h1.classList.toggle("h-santa-mod");
    });
    footer.classList.toggle("pied-de-page-santa-mod"); //ajout de la classe pied-de-page-santa-mod sur le footer

});


