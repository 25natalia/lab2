class cardNovedades extends HTMLElement {
	//crear constructor
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	//propiedades dinamicas
	static get observedAttributes() {
		return ['imagen', 'fecha', 'subtitle', 'parrafo', 'leermas'];
	}
	//conectar componente, lo que esta adentro de eso se conecta al dom
	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
  <link rel ="stylesheet" href="./src/components/cardNovedades/cardNovedades.css"
	<section id="card-novedades">
	<img id="imagen" src='${this.imagen}'></img>
	<p id="fecha">${this.fecha || 'por defecto'}</p>
	<h3 id="subtitulo">${this.subtitle || 'por defecto'}</h3>
	<p id="parrafo">${this.parrafo || 'por defecto'}</p>
	<span id="leermas">${this.leermas}</span>
	</section>
  `;
	}

	//trabaje con los atributos que se le brindan titile,
	attributeChangedCallback(propName, oldVale, newValue) {
		this[propName] = newValue;
		this.render();
	}
}

customElements.define('card-novedades', cardNovedades);
export default cardNovedades;
