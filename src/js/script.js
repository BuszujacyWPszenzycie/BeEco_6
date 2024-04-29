const hamburgerBtn = document.querySelector('.header__mobile--hamburger')
const headerBottomIcon = document.querySelector('.header__mobile--iconBottom')
const navMobile = document.querySelector('.nav__mobile')
const allSpanBottom = document.querySelectorAll('.header__desktop--spanBottom')

document.addEventListener('DOMContentLoaded', function () {
	// Get all <span> elements within the container
	const spans = document.querySelectorAll('#container span')

	// Function to add class with delay
	function addClassWithDelay(spanElement, className, delay) {
		setTimeout(() => {
			spanElement.classList.add(className)
		}, delay)
	}

	// Loop through each <span> element and add class with delay
	allSpanBottom.forEach((span, index) => {
		// Calculate delay for each span (1 second delay per span)
		const delay = (index + 1) * 1000 // index + 1 to start delay from 1 second onwards

		// Add class 'your-class-name' with calculated delay
		addClassWithDelay(span, 'active-spanBottom', delay)
	})
})

// Funcion for opening NAV__MOBILE

const showMobileNavFunction = () => {
	hamburgerBtn.classList.toggle('is-active')
	headerBottomIcon.classList.toggle('header-bottom-icon-rotate')
	navMobile.classList.toggle('nav-mobile-is-active')
}

hamburgerBtn.addEventListener('click', showMobileNavFunction(allSpanBottom))
