'use strict';
document.addEventListener('DOMContentLoaded', () => document.documentElement.classList.add('loaded'));
const html = document.documentElement;

document.addEventListener('click', (e) => {
	if (e.target.closest('.header__burger')) {
		html.classList.toggle('menu-open');
		html.classList.contains('menu-open')
			? document.documentElement.classList.add('lock')
			: document.documentElement.classList.remove('lock');
	}
});

window.addEventListener('resize', () => {
	if (window.innerWidth > 767.98) {
		html.classList.remove('menu-open');
	}
});
