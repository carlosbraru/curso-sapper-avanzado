<script>
    import { stores } from '@sapper/app';
    const { session } = stores();
    import Avatar from '../../static/avatar-peq.jpg';

    async function logout() {
        if($session.user) {
            await firebase.auth().signOut();
            console.log("Te has des-autenticado");
            $session.user = false;
            $session.photoURL = null;
        }
    }
</script>

<style>

    .Search {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    
    input[type=text] {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid var(--white);
        background: transparent;
        outline: none;
        margin-top: 10px;
        width: 75%;
        margin-bottom: 10px;
        color: var(--white);
        margin-right: 10px;
    }
    ::placeholder {
        color: var(--white)
    }
    img {
        width: 40px;
        height: 40px;
        cursor: pointer;
        border: 1px solid gray;
    }
    .logged {
        border: 1px solid red;
    }
</style>


<div class="Search">
    <input type="text" placeholder="Busca tu peli...">
    <img src="{$session.photoURL || Avatar}" on:click={logout} alt="login" class="{!$session.user ? ''  : 'logged' }">
</div>