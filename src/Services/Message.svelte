<script>
    import Snackbar, {Actions, Label} from '@smui/snackbar';
    import Store from '../store/index';

</script>

<style>

</style>


<Snackbar bind:this={$Store.snackbar.status}>
    <Label>{$Store.snackbar.message}.</Label>
</Snackbar>