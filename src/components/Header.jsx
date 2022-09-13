const Header=()=>{
    return <>
   <header class='header'>
	<nav class='header-nav'>
		<h1 class='header-logo'>
			<a href='/'>Puntos Culturales</a>
		</h1>
		<div class='header-left'>
			<li class='header-link'>
				<a href='/todo'>Lugares</a>
			</li>
			<li class='header-link'>
				<a href='/estanterias?shelf=8'>info básica sobre el museo</a>
			</li>
		</div>
		<div class='header-right'>
			{/* {{#if user}}
				<div class='header-pfp-container'>
					<div
						style='background-color: {{user.color}};'
						class='header-pfp'
					></div>
					<span class='header-pfp-down'>👇</span>
					<div class='user-dropdown-menu none'>
						<h5 class='user-dropdown-title'>{{user.username}}</h5>
						<a href='/p/{{user.username}}' class='user-dropdown-a'>Perfil</a>
						<a href='/settings' class='user-dropdown-a'>Configuracion</a>
						<a href='/about' class='user-dropdown-a'>Ayuda</a>
						<a class='user-dropdown-a' href='/users/logout'>Cerrar Sesion</a>
					</div>
				</div>
			{{else}} */}
				<li class='header-link header-link-signin'>
					<a href='/users/signin'>Ingresar</a>
				</li>
				<li class='header-link header-link-signup'>
					<a href='/users/signup'>Registrar</a>
				</li>
			{/* {{/if}} */}
		</div>

	</nav>
</header>
</>
}
export default Header;