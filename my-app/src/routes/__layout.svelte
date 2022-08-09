<script lang="ts">
	interface MenuItem {
		name: string;
		path: string;
	}

	let menu: MenuItem[] = [
		{ name: 'Disco Hub', path: 'home' },
		{ name: 'Portfolio', path: 'portfolio' },
		{ name: 'DJ', path: 'dj' },
		{ name: 'About / Contact', path: 'about-contact' }
	];
</script>

<header class="row header s12">
	<input class="menu-btn" type="checkbox" id="menu-btn" />
	<label class="menu-icon" for="menu-btn"><p class="navicon">+</p></label>
	<h2 class="logo">Charlotte</h2>

	<div class="menu">
		{#each menu as item}
			<h3>
				<span class="star">★</span>
				<a class="menu-item" href={item.path}>{item.name}</a>
			</h3>
		{/each}
	</div>
</header>

<slot />
