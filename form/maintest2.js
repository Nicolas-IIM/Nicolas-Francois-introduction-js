let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let pseudo = document.querySelector("#pseudo");
    let pseudoValue = pseudo.value;
    console.log(pseudo);
    let pseudoCalcul = pseudo.value.length; //récupération de la longueur du pseudo
    if (pseudoCalcul >= 6) {
        console.log("Bon pseudo");
        pseudo.classList.add("message-success");
        document.getElementById("bonjour-pseudo").innerHTML = "✌️ Bonjour " + pseudoValue;
    }
    else { //ajout de la classe message-success
            pseudo.classList.add("message-error");
            console.log("Pseudo pas assez long");
            document.getElementById("pseudo-avert").innerHTML = "Pseudo pas assez long ! Minimum 6 caractères"; //affichage du message d'erreur
    }

    let motsDePasse = document.querySelector("#password"); //récupération de l'input password
    let motDePasseCalcul = motsDePasse.value.length; //récupération de la longueur du mot de passe
    let mdp1Value = motsDePasse.value;
    if (motDePasseCalcul >= 8) {
        console.log("Bon mot de passe");
        motsDePasse.classList.add("message-success");
    }
    else { //ajout de la classe message-error
        console.log("Mot de passe pas assez compler");
        motsDePasse.classList.add("message-error");
        document.getElementById("motdepasstest").innerHTML = "Mot de passe pas assez long ! Minimum 8 caractères"; //affichage du message d'erreur
    }


    let email = document.querySelector("#email"); //récupération de l'input email
    let emailValue = email.value;
    if (emailValue.includes("@" && ".")) { //https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange/includes
        console.log("email valide");
        email.classList.add("message-success");
    }
    else {
        console.log("email invalide");
        email.classList.add("message-error");
        document.getElementById("email-avert").innerHTML = "Email invalide";
    }

    let mdp2 = document.querySelector("#password2"); //récupération de l'input password2
    let mdp2Value = mdp2.value;

    if (mdp2Value === mdp1Value) { //comparaison des deux mots de passe
        console.log("mdp identique");
        mdp2.classList.add("message-success");
    }
    else { //ajout de la classe message-error
        console.log("mdp non identique");
        mdp2.classList.add("message-error");
        document.getElementById("motdepasstest2").innerHTML = "Les mots de passe ne sont pas identiques";
    }




});





