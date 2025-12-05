// funções auxiliares
function hide(e) {
  return e.classList.add("hide");
}
function show(e) {
  return e.classList.remove("hide");
}

// header
const header = document.querySelector("header");
const headerChildren = document.querySelector("header > *");
headerChildren.style.transition = `0.35s ease-out`;
header.style.transition = `0.35s ease-out`;

document.addEventListener("scroll", () => {
  if (window.scrollY <= 0) {
    header.style.height = `100px`;
    headerChildren.style.transform = `scale(1)`;
  } else {
    header.style.height = `50px`;
    headerChildren.style.transform = `scale(0.6)`;
  }
});

// hero
function randomFrase() {
  const frasesHero = [
    "Escancarando de vez, a dois, a três...",
    "Quando a dor é de amor, o melhor é amar.",
    "O amor é vagabundo, meio tonto.",
    "Eu quero mais comer o fruto até o fim...",
    "Quem é que nunca recebeu uma cantada!?",
  ];
  const fraseElement = document.getElementById("frase-hero");
  const random = `\"${
    frasesHero[Math.floor(Math.random() * frasesHero.length)]
  }\"`;
  fraseElement.textContent = random;
}
randomFrase();

// scrollar...
let albuns = [];

function addAlbum(name, year, image, link) {
  const track = document.querySelector("#album-track");

  const anchor = document.createElement("a");
  anchor.href = link;
  anchor.target = "_blank";
  anchor.classList.add("album-link");

  const createdAlbum = document.createElement("div");
  createdAlbum.classList.add("album");

  const albumImg = document.createElement("img");
  albumImg.classList.add("album-img");
  albumImg.src = image;

  const albumDate = document.createElement("p");
  albumDate.classList.add("album-date");
  albumDate.textContent = `${year}`;

  const albumName = document.createElement("span");
  albumName.classList.add("album-name");
  albumName.textContent = name;

  track.appendChild(anchor);
  anchor.appendChild(createdAlbum);
  createdAlbum.appendChild(albumImg);
  createdAlbum.appendChild(albumName);
  createdAlbum.appendChild(albumDate);

  let albumObject = {
    element: createdAlbum,
    image: image,
    year: year,
    name: name,
    link: link,
  };
  if (!albuns.some((existingAlbum) => existingAlbum.name == albumObject.name)) {
    albuns.push(albumObject);
  }
  return albumObject;
}

function addAllAlbums() {
  addAlbum(
    "Coração / Cachaça",
    1983,
    "assets/img/albuns/coracao-cachaca.png",
    "https://www.letras.mus.br/elymar-santos/discografia/coracao-cachaca-1983/"
  );
  addAlbum(
    "Cachaça / Assim Somos Nós",
    1986,
    "assets/img/albuns/cachaca-assim-somos-nos.png",
    "https://www.letras.mus.br/elymar-santos/discografia/cachaca-assim-somos-nos-1986/"
  );
  addAlbum(
    "Elymar no Canecão",
    1986,
    "assets/img/albuns/elymar-no-canecao.png",
    "https://www.letras.mus.br/elymar-santos/discografia/elymar-no-canecao-1986/"
  );
  addAlbum(
    "Coração",
    1987,
    "assets/img/albuns/coracao.png",
    "https://www.letras.mus.br/elymar-santos/discografia/elymar-santos-1987/"
  );
  addAlbum(
    "Elymar Missão: Ato de Amor",
    1990,
    "assets/img/albuns/elymar-missao-ato-de-amor.png",
    "https://www.letras.mus.br/elymar-santos/discografia/elymar-missao-ato-de-amor-1990/"
  );
  addAlbum(
    "Missão Ser Feliz",
    1991,
    "assets/img/albuns/missao-ser-feliz.png",
    "https://www.letras.mus.br/elymar-santos/discografia/missao-ser-feliz-1991/"
  );
  addAlbum(
    "Missão: Amor Amor",
    1992,
    "assets/img/albuns/missao-amor-amor.png",
    "https://www.letras.mus.br/elymar-santos/discografia/missao-amor-amor-1992/"
  );
  addAlbum(
    "Vida de Cigano",
    1993,
    "assets/img/albuns/vida-de-cigano.png",
    "https://www.letras.mus.br/elymar-santos/discografia/vida-de-cigano-1993/"
  );
  addAlbum(
    "Poemas que Todas as Mães se Reconheçam",
    1994,
    "assets/img/albuns/poemas-que-todas-as-maes-se-reconhecam.png",
    "https://www.letras.mus.br/elymar-santos/discografia/poemas-que-todas-as-mares-se-reconhecam-1994/"
  );
  addAlbum(
    "Elymar Popular",
    1996,
    "assets/img/albuns/elymar-popular.png",
    "https://www.letras.mus.br/elymar-santos/discografia/elymar-popular-1996/"
  );
  addAlbum(
    "Elymar Mais Popular",
    1996,
    "assets/img/albuns/elymar-mais-popular.png",
    "https://www.letras.mus.br/elymar-santos/discografia/elymar-mais-popular-1996/"
  );
  addAlbum(
    "No Canecão",
    1998,
    "assets/img/albuns/no-canecao.png",
    "https://www.letras.mus.br/elymar-santos/discografia/no-canecao-1998/"
  );
  addAlbum(
    "Ao vivo no Canecão - Segunda Parte",
    1998,
    "assets/img/albuns/ao-vivo-no-canecao-2-parte.png",
    "https://www.letras.mus.br/elymar-santos/discografia/ao-vivo-no-canecao-2a-parte-1998/"
  );
  addAlbum(
    "Elymar Brasileiro dos Santos",
    1998,
    "assets/img/albuns/elymar-brasileiro-dos-santos.png",
    "https://www.letras.mus.br/elymar-santos/discografia/elymar-brasileiro-dos-santos-ao-vivo-no-olympia-2001/"
  );
  addAlbum(
    "Para sempre: Elymar Santos",
    1998,
    "assets/img/albuns/para-sempre-elymar-santos.png",
    "https://www.letras.mus.br/elymar-santos/discografia/para-sempre-elymar-santos-2001/"
  );
  addAlbum(
    "Meus Momentos: Elymar Santos",
    1998,
    "assets/img/albuns/meus-momentos-elymar-santos.png",
    "https://www.letras.mus.br/elymar-santos/discografia/meus-momentos-elymar-santos-2002/"
  );
  addAlbum(
    "Série Identidade",
    2002,
    "assets/img/albuns/serie-identidade.png",
    "https://www.letras.mus.br/elymar-santos/discografia/serie-identidade-elymar-santos-2002/"
  );
  addAlbum(
    "Série Retratos: Elymar Santos",
    2004,
    "assets/img/albuns/serie-retratos-elymar-santos.png",
    "https://www.letras.mus.br/elymar-santos/discografia/serie-retratos-elymar-santos-2004/"
  );
  addAlbum(
    "Série Bis: Elymar Santos",
    2005,
    "assets/img/albuns/serie-bis-elymar-santos.png",
    "https://www.letras.mus.br/elymar-santos/discografia/serie-bis-elymar-santos-2005/"
  );
  addAlbum(
    "Elymar de Todos os Santos",
    2005,
    "assets/img/albuns/elymar-de-todos-os-santos.png",
    "https://www.letras.mus.br/elymar-santos/discografia/elymar-de-todos-os-santos-ao-vivo-no-olimpo-2005/"
  );
  addAlbum(
    "Elymar Amor e Dor: Acústico Vol. 1",
    2005,
    "assets/img/albuns/elymar-amor-e-dor-1.png",
    "https://www.letras.mus.br/elymar-santos/discografia/elymar-amor-e-dor-acustico-2005/"
  );
  addAlbum(
    "Elymar Amor e Dor: Acústico Vol. 2",
    2005,
    "assets/img/albuns/elymar-amor-e-dor-acustico-2.png",
    "https://www.letras.mus.br/elymar-santos/discografia/alymar-amor-e-dor-acustico-vol-2-2005/"
  );
  addAlbum(
    "Procura-se",
    2006,
    "assets/img/albuns/procura-se.png",
    "https://www.letras.mus.br/elymar-santos/discografia/procura-se-ao-vivo-2006/"
  );
  addAlbum(
    "Guerreiro Sonhador",
    2008,
    "assets/img/albuns/guerreiro-sonhador.png",
    "https://www.letras.mus.br/elymar-santos/discografia/guerreiro-sonhador-2008/"
  );
  addAlbum(
    "Avassalador",
    2011,
    "assets/img/albuns/avassalador.png",
    "https://www.letras.mus.br/elymar-santos/discografia/avassalador-2011/"
  );
  addAlbum(
    "Elymar Canta Marrom",
    2011,
    "assets/img/albuns/elymar-canta-marrom.png",
    "https://www.letras.mus.br/elymar-santos/discografia/elymar-canta-marrom-2011/"
  );
  addAlbum(
    "Homem de Sorte",
    2011,
    "assets/img/albuns/homem-de-sorte.png",
    "https://www.letras.mus.br/elymar-santos/discografia/homem-de-sorte-2011/"
  );
  addAlbum(
    "Fundamental",
    2013,
    "assets/img/albuns/fundamental.png",
    "https://www.letras.mus.br/elymar-santos/discografia/fundamental-2013/"
  );
  addAlbum(
    "Meu Coração É Brega",
    2019,
    "assets/img/albuns/meu-coracao-e-brega.png",
    "https://www.letras.mus.br/elymar-santos/discografia/meu-coracao-e-brega-2019/",
    "https://www.letras.mus.br/elymar-santos/discografia/meu-coracao-e-brega-2019/"
  );
}

function loadAlbumList() {
  const listElement = document.querySelector("#album-list");

  albuns.forEach((albumObject) => {
    const anchor = document.createElement("a");
    anchor.href = albumObject.link;
    anchor.target = "_blank";
    anchor.title = "Ver no Letras.mus.br";
    anchor.classList.add("album-display-link");

    const albumElement = document.createElement("div");
    albumElement.classList.add("album-display");

    const albumImage = document.createElement("img");
    albumImage.src = albumObject.image;
    albumImage.classList.add("album-display-img");

    const albumName = document.createElement("p");
    albumName.textContent = albumObject.name;
    albumName.classList.add("album-display-name");

    const albumYear = document.createElement("span");
    albumYear.textContent = albumObject.year;
    albumYear.classList.add("album-display-year");

    // árvore DOM
    listElement.appendChild(anchor);
    anchor.appendChild(albumElement);
    albumElement.appendChild(albumImage);
    albumElement.appendChild(albumName);
    albumElement.appendChild(albumYear);
  });
}

function setupScrolling() {
  const track = document.querySelector("#album-track");

  track.addEventListener("mouseenter", () => {
    track.style.animationPlayState = `paused`;
  });
  track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = `running`;
  });
}
// adicionar 2 vezes pra animação CSS funcionar
addAllAlbums();
addAllAlbums();
setupScrolling();

// menuzinho do header

function navButtonSetup() {
  const button = document.querySelector("nav > button");
  const img = button.querySelector("img");
  const content = document.querySelector("#nav-content");

  button.addEventListener("click", () => {
    if (content.classList.contains("hide")) {
      img.src = `assets/img/menu-close.svg`;
    } else {
      img.src = `assets/img/menu-icon.svg`;
    }
    content.classList.toggle("hide");
  });
}
navButtonSetup();

// filtrar string do usuário

function searchAlbums() {
  const searchValue = document.querySelector("#search").value.toLowerCase();
  const listElement = document.querySelector("#album-list");
  listElement.innerHTML = "";

  const filteredAlbums = albuns.filter((albumObject) =>
    albumObject.name.toLowerCase().includes(searchValue)
  );

  filteredAlbums.forEach((albumObject) => {
    const albumElement = document.createElement("a");
    albumElement.classList.add("album-display");
    albumElement.href = albumObject.link;
    albumElement.target = `_blank`;

    const albumImage = document.createElement("img");
    albumImage.src = albumObject.image;
    albumImage.classList.add("album-display-img");

    const albumName = document.createElement("p");
    albumName.textContent = albumObject.name;
    albumName.classList.add("album-display-name");

    const albumYear = document.createElement("span");
    albumYear.textContent = albumObject.year;
    albumYear.classList.add("album-display-year");

    albumElement.appendChild(albumImage);
    albumElement.appendChild(albumName);
    albumElement.appendChild(albumYear);

    listElement.appendChild(albumElement);
  });
}

document
  .querySelector("#search-button")
  .addEventListener("click", searchAlbums);

document.querySelector("#search").addEventListener("keyup", (event) => {
  if (event.key === "Enter") searchAlbums();
});
loadAlbumList();

// parte de sucessos. eu tô louco, tô louco

function addSucesso(name, year, link) {
  const parent = document.querySelector("#sucesses > div");

  const disc = document.createElement("img");
  disc.src = `assets/img/disco.png`;
  disc.classList.add("spinning-disc");

  const anchor = document.createElement("a");
  anchor.classList.add("sucesso");
  anchor.href = link;
  anchor.target = "_blank";
  anchor.title = "Ver no YouTube";

  const title = document.createElement("h1");
  title.textContent = name;

  const ano = document.createElement("span");
  ano.textContent = year;

  const arrow = document.createElement("img");
  arrow.src = `assets/img/listen.svg`;
  arrow.classList.add("headfoneswow");

  anchor.appendChild(disc);
  anchor.appendChild(title);
  anchor.appendChild(ano);
  anchor.appendChild(arrow);

  parent.append(anchor);
}

function addAllSucessos() {
  addSucesso(
    "Escancarando de Vez",
    2011,
    "https://www.youtube.com/watch?v=TYDV4ynq6h4&t=1s"
  );
  addSucesso(
    "Taras e Manias",
    2011,
    "https://www.youtube.com/watch?v=RcmArfQxjts"
  );
  addSucesso("Dez a Dez", 2005, "https://www.youtube.com/watch?v=LGNLjc4D9PI");
  addSucesso("Dona", 2005, "https://www.youtube.com/watch?v=dQfUXpe8Ibg");
  addSucesso(
    "Mal De Amor",
    2005,
    "https://www.youtube.com/watch?v=FFi_634QzcU"
  );
  addSucesso(
    "A Letra",
    2011,
    "https://www.youtube.com/watch?v=nKBxk4xaxmQ&t=2s"
  );
  addSucesso("Cachaça", 2008, "https://www.youtube.com/watch?v=bkel0aLAKdY");
  addSucesso("Teu Jogo", 2001, "https://www.youtube.com/watch?v=rgrGFhU6scg");
  addSucesso(
    "Amor Sem Censura",
    2008,
    "https://www.youtube.com/watch?v=EPFeBygOEJY"
  );
}

addAllSucessos();

function initCarrossels() {
  const slideContainer = document.getElementById("carrossel-wrapper");
  const slides = Array.from(slideContainer.querySelectorAll(".carrossel-slide"));
  const buttonPrev = document.getElementById("carrossel-button-prev");
  const buttonNext = document.getElementById("carrossel-button-next");

  let currentSlideIndex = 0;

  function updateSlidePosition() {
    const offset = currentSlideIndex * -100;
    slideContainer.style.transform = `translateX(${offset}%)`;
  }

  buttonNext.addEventListener("click", () => {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
      currentSlideIndex = 0;
    }
    updateSlidePosition();
  });

  buttonPrev.addEventListener("click", () => {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
      currentSlideIndex = slides.length - 1;
    }
    updateSlidePosition();
  });
}

initCarrossels();

function toggleModal(id) {
  const modal = document.getElementById(id);
  const backdrop = document.getElementById('bg-blur');
  
  if (modal.classList.contains('hide')) {
    show(modal);
    show(backdrop);
  } else {
    hide(modal);
    hide(backdrop);
  }
}

document.getElementById('contato-button').addEventListener('click', () => {
  toggleModal('contato');
});
// um dia antes da entrega eu percebi que criar elementos assim no JS é uma má-prática extremamente prejudicial. ah, como eu amo o front end! digitar letrinhas de raio de borda! hahaha! olha, a cor desse negócio tá... azul! arco-íris! haha! ops, sua base de dados foi vazada para ladros maliciosos tanzanianos! oh, que pena... você deveria ter tratado seus inputs SQL Daniel, hahahaha! Adiciona esse elemento no DOM, Daniel! Eu vou inspecionar elemento na hora da apresentação e colocar a foto do CJ farmando esmegma!
// cara, eu tô ficando maluco
// meu aviso? nunca, nunca procrastine. sério. por favor.