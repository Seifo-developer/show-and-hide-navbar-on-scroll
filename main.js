const hide = document.querySelector(".button");
const navbar = document.querySelector("nav");

hide.addEventListener('click', hideNav);

function hideNav(){
    navbar.classList.add('hide');
}

function showNav(){
    navbar.classList.remove('hide');
}

let prevScroll = window.pageYOffset;

function onScroll(){
    let currScroll = window.pageYOffset;
    if(currScroll > prevScroll){
        hideNav();
    }else{
        showNav();
    }
    prevScroll = currScroll;
}

window.addEventListener("scroll", onScroll);