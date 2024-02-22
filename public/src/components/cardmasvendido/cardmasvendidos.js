class cardMasVendidos extends HTMLElement {
	//crear constructor
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	//propiedades dinamicas
	static get observedAttributes() {
		return ['imagen', 'title', 'fecha', 'oferta', 'precio', 'device', 'corazon'];
	}
	//conectar componente, lo que esta adentro de eso se conecta al dom
	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
  <link rel ="stylesheet" href="./scr/components/cardmasvendidos/cardmasvendidos.css"
	<img src='${this.imagen}'></img>
	<h3>${this.title || 'por defecto'}</h3>
	<p>${this.fecha || 'por defecto'}</p>
	<p>${this.oferta}</p>
	<p>${this.precio}</p>
	<p>${this.device}</p>
	<svg>${this.corazon}</svg>
  `;
	}

	//trabaje con los atributos que se le brindan titile,
	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}
}

customElements.define('banner-grande', cardMasVendidos);
export default cardMasVendidos;
