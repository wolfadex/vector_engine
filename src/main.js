import Renderer from './Renderer';

let renderer;

function init() {
	renderer = new Renderer({
		rootEl: document.querySelectorAll('#container')[0]
	});
}

function ready() {
	if (document.readyState != 'loading') {
		init();
	}
	else {
		document.addEventListener('DOMContentLoaded', init);
	}
};

ready();