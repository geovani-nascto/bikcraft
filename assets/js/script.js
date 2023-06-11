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