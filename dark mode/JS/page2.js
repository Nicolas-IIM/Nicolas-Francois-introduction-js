// meme chose que page1.js mais pour la page 2

let santaMod = document.getElementById("button_santa");
let buttons = document.querySelectorAll("button");
let p = document.querySelectorAll("p");
let h3 = document.querySelectorAll("h3");
let h2 = document.querySelectorAll("h2");
let h1 = document.querySelectorAll("h1");
let li = document.querySelectorAll("li");

let footer = document.querySelector(".pied-de-page");


santaMod.addEventListener("click", function() {
    buttons.forEach(button => {
        button.classList.toggle("button-santa-mod");
    });
    document.body.style.backgroundColor = "#a94343";

    p.forEach(p => {
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
    li.forEach(li => {
        li.classList.toggle("h-santa-mod");
    });
    footer.classList.toggle("pied-de-page-santa-mod");


});


