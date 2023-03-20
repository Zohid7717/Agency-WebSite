const burgerMenu = document.querySelector('.header__burger')
const burgerMenuExit = document.querySelector('.header__burger-exit')
const headerHiddenNavbar = document.querySelector('.header__hidden-navbar')
const html = document.querySelector('html')
const themeBgCercle = document.querySelector('.header__theme-bg-cercle')
const headerTheme = document.querySelector('.header__theme')
const sun = document.querySelector('.header__theme-box-sun')
const moon = document.querySelector('.header__theme-box-moon')
const screenWidth = window.screen.width;
console.log(screenWidth);

burgerMenu.addEventListener('click', () => {
  burgerMenu.style.display = 'none'
  burgerMenuExit.style.opacity = '1'
  burgerMenuExit.style.visibility = 'visible'
  headerHiddenNavbar.style.left = -'0'
  headerHiddenNavbar.style.opacity = '1'
})
burgerMenuExit.addEventListener('click', () => {
  burgerMenuExit.style.opacity = '0'
  burgerMenuExit.style.visibility = 'hidden'
  burgerMenu.style.display = 'flex'
  headerHiddenNavbar.style.left = '-100%'
  headerHiddenNavbar.style.opacity = '0'
})

headerTheme.addEventListener('click', (e) => {
  // e.preventDefault;
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme')
  } else {
    localStorage.setItem('theme', 'dark')
  }
  addDarkAtrToHtml()
})

function addDarkAtrToHtml() {
  if (localStorage.getItem('theme') === 'dark') {
    html.setAttribute('data-theme', 'dark')
    themeBgCercle.classList.add('active-theme')
    if (screenWidth <= 760) {
      sun.style.display = 'none'
      moon.style.display = 'flex'
    }
  } else {
    html.removeAttribute('data-theme')
    themeBgCercle.classList.remove('active-theme')
    if (screenWidth <= 760) {
      sun.style.display = 'flex'
      moon.style.display = 'none'
    }
  }
}
addDarkAtrToHtml()