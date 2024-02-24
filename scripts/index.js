document.addEventListener('DOMContentLoaded', () => document.documentElement.classList.add('loaded'));

document.addEventListener('click', (e) => {
	if (e.target.closest('.header__burger')) {
		document.documentElement.classList.toggle('lock');
		document.documentElement.classList.toggle('menu-open');
	}
});
