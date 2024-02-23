class bannerGrande extends HTMLElement {
	//crear constructor
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	//propiedades dinamicas
	static get observedAttributes() {
		return ['titlebanner', 'imagenbanner', 'strong', 'buttonbanner'];
	}
	//conectar componente, lo que esta adentro de eso se conecta al dom
	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
  <link rel ="stylesheet" href="./src/components/bannerGrande/bannerGrande.css"
	<section id="banner-grande">
	<h2 id="title">${this.titlebanner || 'por defecto'}</h2>
	<section id="centrar">
  <img id="imagen" src='${this.imagenbanner}'></img>
	<section id="botones">
	<strong id="subtitulo">${this.strong || 'por defecto'}</strong>
	<button id="button">${this.buttonbanner || 'por defecto'}</button>
	</section>
	</section>
	</section>
  `;
	}

	//trabaje con los atributos que se le brindan titile,
	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}
}

customElements.define('banner-grande', bannerGrande);
export default bannerGrande;
