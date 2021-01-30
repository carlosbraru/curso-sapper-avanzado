<script>
    /* import { onMount } from "svelte";

    // store (de Svelte)
    import Store from '../store/index';

    onMount( () => {
        $Store.snackbar.status.open();
        $Store.snackbar.message = 'pasó algo';
    }) */
</script>

<style>
    .Main {
        padding: 0;
        margin: 0;
    }
</style>

<div class="Main">
    <slot></slot>
</div>