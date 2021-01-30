
<script context="module">
    /* Captamos el user desde el servidor para informarle al cliente de que ya puede usarlo */
    export async function preload (page, session) {
        const { user } = session;
        return {
            user
        }
    }
</script>


<script>
    import { stores, goto } from '@sapper/app';
    import { onMount } from 'svelte';
    import Store from '../store/index';
    /* Cliente recibe la información de user */
    export let user;
    const { session } = stores();

    onMount( () => {
        firebase.auth().onIdTokenChanged(async (usr) => {
            try {
                if(!user) {
                    $session.user = false;
                    return;
                }

                const token = await usr.getIdToken();
                $session.user = token;
                console.log("Estás auntenticado");

            } catch (error) {
                console.error(error.message);
            }
        })
    });

    async function signWithGoogle () {
        try {
            const Provider = new firebase.auth.GoogleAuthProvider();
            await auth.signInWithPopup(Provider);
            $session.user = true;
            goto('./ticket');

        } catch (error) {
            console.error(error.message);
        }
    }
</script>

<style>
    .Ticket {
        text-align: justify;
        color: var(--black);
        height: var(--height);
        background-repeat: no-repeat !important;
        background-position: center !important;
        background-size: cover !important;
    }
    .gradient {
        top: 0;
        bottom: 0;
        right: 0;
        position: fixed;
        background-image: linear-gradient(var(--white, transparent));
        pointer-events: none;
    }
    .description {
        position: relative;
        padding: 10px;
        width: calc(100% - 20px);
        color: var(--white);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .return {
        padding: 10px;
        background: var(--transparent);
        border-top: 2px solid var(--red);
        border-bottom: 2px solid var(--red);
        color: var(--red);
        text-decoration: none;
        margin: 25px auto;
        text-align: center;
        /* margin-bottom: 25px; */
    }
    .google {
        background: var(--red);
        color: var(--white);
        padding: 10px;
        margin: auto;
        margin-bottom: 10px;
        outline: none;
        border-radius: 5px;
        border: none;
        width: 200px;
    }
</style>

<svelte:head>
    <title>Ticket</title>
</svelte:head>


<div class="Ticket" style="background: url({$session.URL_BIG_IMAGE}{$Store.url})">
    <div class="gradient" />
    <div class="description">
        <a href="./" class="return">Regresar a Home</a>
        {#if user}
            <div>Ya puedes ver el contenido</div>
        {:else}
            <div>Restringido</div>
            <button class="google" on:click={signWithGoogle}>Entrar con Google</button>
        {/if}
    </div>
</div>