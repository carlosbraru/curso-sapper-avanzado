<script>
    import { stores } from '@sapper/app';
    const { session } = stores();
    import Store from '../store/index';
</script>


<style>
    .Information {
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
    .title {
        font-size: 2rem;
        color: var(--yellow);
        text-align: center;
        font-weight: bold;
        margin: auto;
        width: 90%;
    }
    .description {
        position: relative;
        padding: 10px;
        width: calc(100% - 20px);
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
</style>

<svelte:head>
    <title>Descripción</title>
</svelte:head>


<div class="Information" style="background: url({$session.URL_BIG_IMAGE}{$Store.url})">
    <div class="gradient"></div>
    <div class="description">
        <a href="./" class="return">Regresar a Home</a>
        <div class="title">{$Store.title}</div>
        {$Store.detail}
    </div>
</div>