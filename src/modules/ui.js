// import List from './list'
// import Task from './task'
import ListsManager from './manage';

export default class UI {
	static load() {
		UI.hamburgerMenuControl();
	}

	static hamburgerMenuControl() {
		const hamburger = document.querySelector('#hamburger');
		const main = document.querySelector('.main');

		const manualToggle = () => {
			main.classList.toggle('sidebar-toggle');
			hamburger.classList.toggle('change');
		};

		const autoToggle = () => {
			if (window.matchMedia('(min-width: 800px)').matches) {
				main.classList.remove('sidebar-toggle');
				hamburger.classList.add('change');
			} else {
				main.classList.add('sidebar-toggle');
				hamburger.classList.remove('change');
			}
		};
		autoToggle();

		hamburger.addEventListener('click', manualToggle);
		window.addEventListener('resize', autoToggle);
	}
}
