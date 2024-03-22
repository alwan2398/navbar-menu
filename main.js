const headerToggle = document.getElementById('header-toggle'),
      main = document.getElementById('main'),
      navClose = document.getElementById('nav-close')

// MENU SHOW
// VALIDASI MENU MUNCUL
if(headerToggle) {
    headerToggle.addEventListener('click', () =>{
        main.classList.add('show-menu')
    })
}

// MENU HIDDEN
// VALIDASI MENU REMOVE 
if(navClose) {
    navClose.addEventListener('click', () =>{
        main.classList.remove('show-menu')
    })
}

// MENU DI HP 
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const main = document.getElementById('main')
    // jika di click link maka mmenu tertutup
    main.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// CHANGE BACKGROUND COLOR
function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// SECTION ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)