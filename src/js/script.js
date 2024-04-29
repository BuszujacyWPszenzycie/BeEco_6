const hamburgerBtn = document.querySelector('.header__mobile--hamburger')
const headerBottomIcon = document.querySelector('.header__mobile--iconBottom')
const navMobile = document.querySelector('.nav__mobile')
const allSpanBottom = document.querySelectorAll('.header__desktop--spanBottom')
const allSegregateIconsWrappers = document.querySelectorAll('.segregate__mobile--iconWrapper')
const allSegregateIcons = document.querySelectorAll('.segregate__mobile--icon')
const allDesktopItems = document.querySelectorAll('.segregate__desktop--item')
const allDesktopItemsTitles = document.querySelectorAll('.segregate__desktop--title')
const allDesktopItemsShadows = document.querySelectorAll('.segregate__desktop--shadow')

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

// Funcion for checking selected segregate icon

const checkWhatSegregateIconClickedFunction = e => {
	if (e.target === allSegregateIconsWrappers[0] || e.target === allSegregateIcons[0]) {
		removeAcitveClassesFromSegregateIconsFunction()
		allSegregateIcons[0].classList.add('icon-active')
		allSegregateIconsWrappers[0].classList.add('iconWrapper-active')
	} else if (e.target === allSegregateIconsWrappers[1] || e.target === allSegregateIcons[1]) {
		removeAcitveClassesFromSegregateIconsFunction()
		allSegregateIcons[1].classList.add('icon-active')
		allSegregateIconsWrappers[1].classList.add('iconWrapper-active')
	} else if (e.target === allSegregateIconsWrappers[2] || e.target === allSegregateIcons[2]) {
		removeAcitveClassesFromSegregateIconsFunction()
		allSegregateIcons[2].classList.add('icon-active')
		allSegregateIconsWrappers[2].classList.add('iconWrapper-active')
	} else if (e.target === allSegregateIconsWrappers[3] || e.target === allSegregateIcons[3]) {
		removeAcitveClassesFromSegregateIconsFunction()
		allSegregateIcons[3].classList.add('icon-active')
		allSegregateIconsWrappers[3].classList.add('iconWrapper-active')
	} else if (e.target === allSegregateIconsWrappers[4] || e.target === allSegregateIcons[4]) {
		removeAcitveClassesFromSegregateIconsFunction()
		allSegregateIcons[4].classList.add('icon-active')
		allSegregateIconsWrappers[4].classList.add('iconWrapper-active')
	}
}

// Remove active classes from icons

const removeAcitveClassesFromSegregateIconsFunction = () => {
	allSegregateIcons.forEach(icon => {
		icon.classList.remove('icon-active')
	})
	allSegregateIconsWrappers.forEach(icon => {
		icon.classList.remove('iconWrapper-active')
	})
}

// Remove active from desktop items

function removeActiveClassesFromDesktop() {
	console.log('test')
	allDesktopItems.forEach(item => {
		item.classList.remove('item-active')
		const shadow = item.querySelector('div')
		const title = item.querySelector('h3')
		shadow.classList.remove('shadow-active')
		title.classList.remove('title-active')
	})
}

// Event Listeners
hamburgerBtn.addEventListener('click', showMobileNavFunction)
allSegregateIconsWrappers.forEach(iconWrapper => {
	iconWrapper.addEventListener('click', checkWhatSegregateIconClickedFunction)
})

allDesktopItems.forEach(item => {
	item.addEventListener('click', () => {
		removeActiveClassesFromDesktop()
		item.classList.add('item-active')
		const shadow = item.querySelector('div')
		const title = item.querySelector('h3')
		shadow.classList.add('shadow-active')
		title.classList.add('title-active')
	})
})
