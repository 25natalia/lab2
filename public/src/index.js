import * as components from './components/indexpadre.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowroot.innerHTML = `
    <cardDestacado>= "hola" </cardDestacado>
    `;
	}
}

customElements.define('app.container', AppContainer);
