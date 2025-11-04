// funções auxiliares
function hide(e) { return e.classList.add('hide'); }
function show(e) { return e.classList.remove('hide'); }
function addClass(c) { return c.classList.add(c); }
function removeClass(c) { return c.classList.remove(c); }

// header
const header = document.querySelector('header');
const headerChildren = document.querySelector('header > *');
headerChildren.style.transition = `0.35s ease-out`;
header.style.transition = `0.35s ease-out`;

document.addEventListener('scroll', () => {
    if (window.scrollY <= 0) {
        header.style.height = `100px`;
        headerChildren.style.transform = `scale(1)`;
    } else {
        header.style.height = `50px`;
        headerChildren.style.transform = `scale(0.6)`;
    }
})

// hero
function randomFrase() {
    const frasesHero = [
        "Escancarando de vez, a dois, a três...",
        "Quando a dor é de amor, o melhor é amar.",
        "O amor é vagabundo, meio tonto.",
        "Eu quero mais comer o fruto até o fim...",
        "Quem é que nunca recebeu uma cantada!?"
    ]
    const fraseElement = document.getElementById('frase-hero');
    const random = `\"${frasesHero[Math.floor(Math.random() * frasesHero.length)]}\"`;
    fraseElement.textContent = random;
}
randomFrase();

// scrollar...

function setupScrolling() {
    const track = document.querySelector('#album-track');

    track.addEventListener('mouseenter', () => {
        track.style.animationPlayState = `paused`;
    })
    track.addEventListener('mouseleave', () => {
        track.style.animationPlayState = `running`;
    })
}

setupScrolling();