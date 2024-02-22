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
  <link rel ="stylesheet" href="./scr/components/cardDestacados/cardDestacados.css"
  <img src='${this.imagen}'></img>
	<h3>${this.title || 'por defecto'}</h3>
	<button>${this.button || 'por defecto'}</button>
	<span>${this.device || 'por defecto'}</span>
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
