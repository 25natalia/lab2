class cardDestacado extends HTMLElement {
	//crear constructor
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	//propiedades dinamicas
	static get observedAttributes() {
		return ['imagen', 'title', 'button', 'device'];
	}
	//conectar componente, lo que esta adentro de eso se conecta al dom
	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
  <link rel ="stylesheet" href="./src/components/cardDestacados/cardDestacados.css"
	<section id="tarjeta">
	<img id="imagen" src='${this.imagen}'></img>
	<h3 id="title">${this.title || 'por defecto'}</h3>
	<button id="button">${this.button || 'por defecto'}</button>
	<span id="nintendo-switch">${this.device || 'por defecto'}</span>
	</section>
  `;
	}

	//trabaje con los atributos que se le brindan titile,
	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}
}

customElements.define('card-destacado', cardDestacado);
export default cardDestacado;
