import { writable } from 'svelte/store';

const store = {
    id: null,
    url: null,
    title: null,
    adult: null,
    detail: null,
    ranking: null,
    snackbar: {
        status: '',
        message: null
    }
}

export default writable(store);