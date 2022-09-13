const Footer=()=>{
    return (<footer class='footer'>
	<div class='footer-container'>
		<nav class='footer-nav'>
			<ul>
				<li><a href='/about/'>Acerca</a></li>
				<li><a href='/about/#privacy'>Privacidad</a></li>
				<li><a href='/about/#api'>API</a></li>
				<li><a href='/about/#contact'>Contacto</a></li>
			</ul>
		</nav>
		<section class='social'>
			<a
				href='https://www.facebook.com/tecnica26/'
				target='_blank'
				class='facebook'
				title='facebook'
			>
				<span></span>
			</a>
			<i class='slash'></i>
			<a
				href='https://www.instagram.com/lasuizacompu'
				target='_blank'
				class='instagram'
				title='instagram'
			>
				<span></span>
			</a>
		</section>
		<p class='copyright'>
			Por los alumnos
			<a
				class='mute'
				href='https://instagram.com/puntosculturales'
				target='_blank'
			>luciando,danilo y brandon</a>
			para las olimpiadasss
		</p>
	</div>
</footer>)
}
export default Footer;