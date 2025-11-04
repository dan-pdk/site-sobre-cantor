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
let albuns = [];

function addAlbum(name, year, image) {
    const track = document.querySelector('#album-track');
    
    const createdAlbum = document.createElement('div');
    createdAlbum.classList.add('album');

    const albumImg = document.createElement('img');
    albumImg.classList.add('album-img');
    albumImg.src = image;

    const albumDate = document.createElement('p');
    albumDate.classList.add('album-date');
    albumDate.textContent = `${year}`;

    const albumName = document.createElement('span');
    albumName.classList.add('album-name');
    albumName.textContent = name;

    track.appendChild(createdAlbum);
    createdAlbum.appendChild(albumImg);
    createdAlbum.appendChild(albumName);
    createdAlbum.appendChild(albumDate);

    let albumObject = {
        element: createdAlbum,
        image: image,
        year: year,
        name: name
    }
    albuns.push(albumObject);
    return albumObject;
}

function addAllAlbums() {
    addAlbum("Coração / Cachaça", 1983, 'assets/img/albuns/coracao-cachaca.png');
    addAlbum("Cachaça / Assim Somos Nós", 1986, 'assets/img/albuns/cachaca-assim-somos-nos.png');
    addAlbum("Elymar no Canecão", 1986, 'assets/img/albuns/elymar-no-canecao.png');
    addAlbum("Coração", 1987, 'assets/img/albuns/coracao.png');
    addAlbum("Elymar Missão: Ato de Amor", 1990, 'assets/img/albuns/elymar-missao-ato-de-amor.png');
    addAlbum("Missão Ser Feliz", 1991, 'assets/img/albuns/missao-ser-feliz.png');
    addAlbum("Missão: Amor Amor", 1992, 'assets/img/albuns/missao-amor-amor.png');
    addAlbum("Vida de Cigano", 1993, 'assets/img/albuns/vida-de-cigano.png');
    addAlbum("Poemas que Todas as Mães se Reconheçam", 1994, 'assets/img/albuns/poemas-que-todas-as-maes-se-reconhecam.png');
    addAlbum("Elymar Popular", 1996, 'assets/img/albuns/elymar-popular.png');
    addAlbum("Elymar Mais Popular", 1996, 'assets/img/albuns/elymar-mais-popular.png');
    addAlbum("No Canecão", 1998, 'assets/img/albuns/no-canecao.png');
    addAlbum("Ao vivo no Canecão - Segunda Parte", 1998, 'assets/img/albuns/ao-vivo-no-canecao-2-parte.png');
    addAlbum("Elymar Brasileiro dos Santos", 1998, 'assets/img/albuns/elymar-brasileiro-dos-santos.png');
    addAlbum("Para sempre: Elymar Santos", 1998, 'assets/img/albuns/para-sempre-elymar-santos.png');
    addAlbum("Meus Momentos: Elymar Santos", 1998, 'assets/img/albuns/meus-momentos-elymar-santos.png');
    addAlbum("Série Identidade", 2002, 'assets/img/albuns/serie-identidade.png');
    addAlbum("Série Retratos: Elymar Santos", 2004, 'assets/img/albuns/serie-retratos-elymar-santos.png');
    addAlbum("Série Bis: Elymar Santos", 2005, 'assets/img/albuns/serie-bis-elymar-santos.png');
    addAlbum("Elymar de Todos os Santos", 2005, 'assets/img/albuns/elymar-de-todos-os-santos.png');
    addAlbum("Elymar Amor e Dor: Acústico Vol. 1", 2005, 'assets/img/albuns/elymar-amor-e-dor-1.png');
    addAlbum("Elymar Amor e Dor: Acústico Vol. 2", 2005, 'assets/img/albuns/elymar-amor-e-dor-acustico-2.png');
    addAlbum("Procura-se", 2006, 'assets/img/albuns/procura-se.png');
    addAlbum("Guerreiro Sonhador", 2008, 'assets/img/albuns/guerreiro-sonhador.png');
    addAlbum("Avassalador", 2011, 'assets/img/albuns/avassalador.png');
    addAlbum("Elymar Canta Marrom", 2011, 'assets/img/albuns/elymar-canta-marrom.png');
    addAlbum("Homem de Sorte", 2011, 'assets/img/albuns/homem-de-sorte.png');
    addAlbum("Fundamental", 2013, 'assets/img/albuns/fundamental.png');
    addAlbum("Meu Coração É Brega", 2019, 'assets/img/albuns/meu-coracao-e-brega.png');
}


function setupScrolling() {
    const track = document.querySelector('#album-track');

    track.addEventListener('mouseenter', () => {
        track.style.animationPlayState = `paused`;
    })
    track.addEventListener('mouseleave', () => {
        track.style.animationPlayState = `running`;
    })
}
// adicionar 2 vezes pra animação CSS funcionar
addAllAlbums();
addAllAlbums();
setupScrolling();