/* ============ SHOW MENU ========== */ 
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');
/* ===== Menu Show =====*/ 
// Validate when constants exist
if(navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu')
    })
}

/* ===== Menu Hidden =====*/ 
// validate when constants exist
if(navClose){
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu')
    })
}

/* ========= Remove Menu Mobile ========== */ 
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click each nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ========= Change Background Header ========== */ 
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater then 50 viewport height, and the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)