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
  <link rel ="stylesheet" href="./src/components/cardmasvendido/cardmasvendidos.css"
	<section id="card-mas-vendidos">
	<img id="imagen" src='${this.imagen}'></img>
	<h3 id="title">${this.title || 'por defecto'}</h3>
	<p id="fecha">${this.fecha || 'por defecto'}</p>
	<p id="oferta">${this.oferta}</p>
	<p id="[precio]">${this.precio}</p>
	<p id="device">${this.device}</p>
	<svg id="corazon">${this.corazon}</svg>
	</section>
  `;
	}

	//trabaje con los atributos que se le brindan titile,
	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}
}

customElements.define('card-mas-vendidos', cardMasVendidos);
export default cardMasVendidos;
