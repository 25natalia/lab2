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
		this.shadowRoot.innerHTML = `
		<section>
		<img id="logoimg" src="imagenes/imagenlogo.png" alt="">

		<nav class="menu">

		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg>
<input type="text" value="Buscar" />

  <ul>
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"></path></svg>
<li><a href="#">Soporte</a></li>
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>
<li><a href="#">Lista de deseos</a></li>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path></svg>
<li><a href="#">Iniciar sesion/Registrarse</a></li>

<svg xmlns="http://www.w3.org/2000/svg" height="14" width="17.5" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"/></svg>
<li><a href="#">Games/Registrarse</a></li>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" id="nintendo-switch"><path d="M13.15 6A7.15 7.15 0 0 0 6 13.15V27a6.94 6.94 0 0 0 6.94 7h6.57V6Zm4.09 25.71h-4.3A4.67 4.67 0 0 1 8.27 27V13.23a5 5 0 0 1 5-5h4ZM27.06 6h-4.65v28h4.65A6.94 6.94 0 0 0 34 27.06V13a6.94 6.94 0 0 0-6.94-7Zm.84 18.26a2.83 2.83 0 1 1 2.83-2.83 2.83 2.83 0 0 1-2.83 2.85ZM13 17.05a2.62 2.62 0 1 1 2.62-2.62A2.61 2.61 0 0 1 13 17.05Z" data-name="Nintendo Switch"></path></svg>
<li><a href="#">Nintendo switch/Registrarse</a></li>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19.875 3H4.125C2.953 3 2 3.897 2 5v14c0 1.103.953 2 2.125 2h15.75C21.047 21 22 20.103 22 19V5c0-1.103-.953-2-2.125-2zm0 16H4.125c-.057 0-.096-.016-.113-.016-.007 0-.011.002-.012.008L3.988 5.046c.007-.01.052-.046.137-.046h15.75c.079.001.122.028.125.008l.012 13.946c-.007.01-.052.046-.137.046z"></path><path d="M6 7h6v6H6zm7 8H6v2h12v-2h-4zm1-4h4v2h-4zm0-4h4v2h-4z"></path></svg>
<li><a href="#">Noticias/Registrarse</a></li>
  </ul>
</nav>



<section>
<h2>Destacados</h2>
		<card-destacado imagen="imagenes/imagenprincesspeachshowtime.jpg" title='Princess Peach Showtime' button='Reserva ya' device='Nintendo switch'></card-destacado>
		<card-destacado title='Pon a prueba el juego de muestra!' button='Mas informacion' device='Nintendo switch'></card-destacado>
		<card-destacado title='Endless Ocean Luminous' button='Reserva ya' device='Nintendo switch'></card-destacado>
		<card-destacado title='Splatoon 3: Pase de expansion-La cara del orden DLC' button='Proximos lanzamientos' device='Nintendo switch'></card-destacado>
    <card-destacado title='Another Code: Recollection' button='Disponible ya' device='Nintendo switch'></card-destacado>
		<card-destacado title='The Hidden Treasure of Area Zero' button='Disponible ya' device='Nintendo switch'></card-destacado>

</section>

		`;
	}
}

customElements.define('app-container', AppContainer);
