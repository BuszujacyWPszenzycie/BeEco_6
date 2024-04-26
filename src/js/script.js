const hamburgerBtn = document.querySelector('.header__mobile--hamburger')
const headerBottomIcon = document.querySelector('.header__mobile--iconBottom')
const navMobile = document.querySelector('.nav__mobile')

const showMobileNavFunction = () => {
	hamburgerBtn.classList.toggle('is-active')
	headerBottomIcon.classList.toggle('header-bottom-icon-rotate')
	navMobile.classList.toggle('nav-mobile-is-active')
}

hamburgerBtn.addEventListener('click', showMobileNavFunction)
