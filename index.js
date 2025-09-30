const Resultat =  document.querySelector("#Resultat");
const Ordi =  document.querySelector("#Ordi");
const Score =  document.querySelector("#Score");
const Tour =  document.querySelector("#Tour");
const choix = ['pierre',"feuille","ciseaux"]
let Tourrr = 0;
let score = { joueur: 0, ordinateur: 0, draw: 0};
function Appuyer(values) {

    const random = Math.floor(Math.random() * choix.length);
    const choisi = choix[random];

    if (choisi === values) {
        Resultat.innerHTML = "Draw"
        Ordi.innerHTML = choisi
        score.draw ++;
    }else if (choisi === "pierre" && values === "feuille"
        || choisi === "ciseaux" && values === "pierre"
        || choisi === "feuille" && values === "ciseaux") {
        Resultat.innerHTML = "joueurWIn"
        Ordi.innerHTML = choisi
        score.joueur ++;
    }else{
        Resultat.innerHTML = "OrdiWin"
        Ordi.innerHTML = choisi
        score.ordinateur ++;
    }
    Tourrr = Tourrr + 1;
    Score.innerHTML = "Ordinateur :" + score.ordinateur + " Joueur :" + score.joueur + " Draw :" + score.draw;
    Tour.innerHTML = "Tour : "+ Tourrr;
}
function DixMilleClique (){
    for (let i = 0; i < 10000; i++) {
        const random = Math.floor(Math.random() * choix.length);
        const choisi22 = choix[random];
        const appuyer = document.getElementById(choisi22);
        appuyer.click();
    }
}
