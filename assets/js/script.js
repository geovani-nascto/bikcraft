// Ativar links do menu
const links = document.querySelectorAll('.header--menu a');

function linkActive(link){
    const url = location.href;
    const href = link.href;

    if(url.includes(href)){
        link.classList.add('active');
    }
}

links.forEach(linkActive);

// Ativar itens do orçamento
const params = new URLSearchParams(location.search);

function productActive(param){
    const element = document.getElementById(param);
    if(element){
        element.checked = true;
    }
}

params.forEach(productActive);

// Perguntas frequentes
const asking = document.querySelectorAll('.asking button');

function askActive(event){
    const ask = event.currentTarget;
    const controls = ask.getAttribute('aria-controls');
    const response = document.getElementById(controls);

    response.classList.toggle('active');
    const actived = response.classList.contains('active')
    ask.setAttribute('aria-expanded', actived)
    // console.log(response);
}

function eventAsking(ask){
    ask.addEventListener('click', askActive);
}

asking.forEach(eventAsking);

// Galeria de Bicicletas
const gallery = document.querySelectorAll('.bike--imgs img');
const galleryContainer = document.querySelector('.bike--imgs');

function alterateImg(event){
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;
    if(media){
        galleryContainer.prepend(img);
    }
}

function eventsGallery(img){
    img.addEventListener('click', alterateImg);
}

gallery.forEach(eventsGallery);

// Animação
if(window.SimpleAnime){
    new SimpleAnime();
}