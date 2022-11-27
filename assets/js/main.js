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

/* ========= Testimonial Swiper ========== */ 
let testimonialSwiper = new Swiper(".testimonial__swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/* ========= New Swiper ========== */ 
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

/* ========= Scroll Sections Active Link ========== */ 
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const   sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId =current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ========= Show ScrollUp ========== */ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher then 400 viewport height, and the show-scroll class to the a tag with the scroll-top
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* ============ SHOW CART ========== */ 
const   cart = document.getElementById('cart'),
        cartShop = document.getElementById('cart-shop'),
        cartClose = document.getElementById('cart-close');
/* ===== Cart Show =====*/ 
// Validate when constants exist
if(cartShop){
    cartShop.addEventListener('click', ()=> {
        cart.classList.add('show-cart')
    })
}

/* ===== Cart Hidden =====*/ 
// validate when constants exist
if(cartClose){
    cartClose.addEventListener('click', ()=> {
        cart.classList.remove('show-cart')
    })
}

/* ============ DARK LIGHT THEME ========== */ 
const   themeButton = document.getElementById('theme-button'),
        darkTheme = 'dark-theme',
        iconTheme = 'bx-sun';

// Previously selcted topic (if user selected)
const   selectedTheme = localStorage.getItem('selected-theme'),
        selectedIcon = localStorage.getItem('selected-icon');

// when obtain the current theme that the interface has by validating the dark-theme class 
const getCurrentTheme = () => document.body.classList.contains   (darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'


// We validate if the user previously choose a topic
if(selectedTheme) {
    // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated dar-theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme) 
}

// Activated / deactivated the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme 
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})