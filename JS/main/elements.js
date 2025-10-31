import { hide, show, addClass, removeClass, log } from "./main.js";

export function randomFrase() {
    const frasesHero = [
        "Escancarando de vez, a dois, a três...",
        "Quando a dor é de amor, o melhor é amar.",
        "O amor é vagabundo, meio tonto",
        "Eu quero mais comer o fruto até o fim"
    ]
    const fraseElement = document.getElementById('frase-hero');
    const random = `\"${frasesHero[Math.floor(Math.random() * frasesHero.length)]}\"`;
    console.log(random);
    fraseElement.textContent = random;
}