class hero { // class hero avec les attributs nom, attaque, précision et vie
    constructor(nom, attaque, precision, vie) {
        this.nom = nom;
        this.attaque = attaque;
        this.precision = precision;
        this.vie = vie;
    }

    infligerDegats(hero) {
        hero.vie = hero.vie - hero.attaque;
    }
}

const Maximus = new hero("Maximus", 10, 10, 100); // création de l'objet (hero) Maximus
const Acacius = new hero("Acacius", 8, 12, 100);

// https://coreui.io/blog/how-to-generate-a-random-number-in-javascript/
const getRandomIntegerInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min
}
// fin gen nombre aléatoire et test


let manche = 1;

while (Maximus.vie > 0 && Acacius.vie > 0) { // boucle while pour les manches 
    let genPrecision = getRandomIntegerInclusive(9, 14); 

    console.warn("Manche "+ manche + " la valeur de la précision est de " + genPrecision);
    manche = manche + 1;
    if (Maximus.precision === genPrecision) { // condition pour savoir si Maximus touche Acacius
        console.log("Maximus a touché Acacius");
        Maximus.infligerDegats(Acacius);
        console.log("⚔️ Maximus inflige 10 points de dégâts à Acacius.");
        console.log("Acacius a " +  Acacius.vie + " points de vie");
    } else {
        console.log("❌ Maximus a raté Acacius ❌");
    }

    if (Acacius.precision === genPrecision) {

        console.log("Acacius a touché Maximus");
        Acacius.infligerDegats(Maximus); // infliger des dégats a Maximus
        console.log("⚔️ Acacius inflige 8 points de dégâts à Maximus.");
        console.log("Maximus a " +  Maximus.vie + " points de vie");
    } else {
        console.log("❌ Acacius a raté Maximus ❌");
    }

    if (Maximus.vie <= 0) { // condition pour savoir si Maximus a perdu
        console.log("👑👑 Acacius a gagné 👑👑");
    } else if (Acacius.vie <= 0) {
        console.log("👑👑 Maximus a gagné 👑👑");
    }
}

