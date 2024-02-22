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
  <link rel ="stylesheet" href="./scr/components/bannerGrande/bannerGrande.css"
	<h2>${this.titlebanner || 'por defecto'}</h2>
  <img src='${this.imagenbanner}'></img>
	<strong>${this.strong || 'por defecto'}</strong>
	<button>${this.buttonbanner || 'por defecto'}</button>
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
