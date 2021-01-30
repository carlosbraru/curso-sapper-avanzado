<script>
    import store from "../store";
    import Search from './Search.svelte';
    import Details from './Details.svelte';

    export let urlBig;
</script>

<style>
    .Page {
        height: var(--height);
        background-repeat: no-repeat !important;
        background-position: center !important;
        background-size: cover !important;
    }
    .gradient {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: fixed;
        background-image: linear-gradient(var(--yellow), transparent);
        pointer-events: none;
    }
</style>

<div class="Page" style="background: url({urlBig}{$store.url})">
    <div class="gradient"></div>
    <Search />
    <Details />
    <slot />
</div>