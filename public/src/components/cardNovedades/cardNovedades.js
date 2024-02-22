class cardNovedades extends HTMLElement {
	//crear constructor
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	//propiedades dinamicas
	static get observedAttributes() {
		return ['imagennovedades', 'fecha', 'subtitle', 'parrafo', 'leermas'];
	}
	//conectar componente, lo que esta adentro de eso se conecta al dom
	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
  <link rel ="stylesheet" href="./scr/components/cardNovedades/cardNovedades.css"
	<img src='${this.imagennovedades}'></img>
	<p>${this.fecha || 'por defecto'}</p>
	<h3>${this.subtitle || 'por defecto'}</h3>
	<p>${this.buttonbanner || 'por defecto'}</p>
	<span>${this.leermas}</span>
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
