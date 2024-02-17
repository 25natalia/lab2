class cardDestacados extends HTMLElement {
	//crear constructor
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	//propiedades dinamicas
	static get observedAttributes() {
		return ['card'];
	}
	//conectar componente
	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
  <link rel ="stylesheet" href="./scr/components/cardDestacados/cardDestacados.css"
  <p>hola</p>
  `;
	}

	//trabaje con los atributos que se le brindan
	attributeChangedCallback(propName, oldVale, newValue) {
		this[propName] = newValue;
		this.render();
	}
}

customElements.define('cardDestacados', cardDestacados);
export default cardDestacados;
