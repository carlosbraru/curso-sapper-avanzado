<script context='module'>
	export async function preload (page, session)  {
		const { API_KEY_MOVIEDB, user } = session;
		if( !user ) {
			//this.redirect(303, '/');
		}
		return { API_KEY_MOVIEDB }
	}
</script>



<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>

<p>This is the 'about' page. There's not much here.</p>