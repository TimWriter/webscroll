<template>
<div class="cookies" v-if="!accepted">
    <p>{{ $t("site.home.cookies") }}</p>
    <button v-on:click.prevent="setItem()" >{{ $t("site.home.accept") }}</button>
</div>
</template>

<script>
export default {
    name: 'Cookies',
    data() {
        return {
            accepted: false,
        }
    },
    mounted(){
        if(localStorage.getItem('Cookies')){
            this.accepted = true;
        }
    },
    methods: {
        setItem(){
            localStorage.setItem('Cookies', true);
            const cookies = document.querySelector('.cookies');
            cookies.classList.add('hide');
            setTimeout(() =>{
            this.accepted = true;
        }, 1500)
        }
    }

}
</script>

<style lang="scss" >
.cookies{
    font-size: 1em;
    color: #E4E4E4;
    transition: 1.5s;

    p{
        margin: 0;
    }

    button{
        -webkit-appearance: none;
        -moz-appearance: none;
        background-color: rgba($color: #000000, $alpha: 0);
        color: #E4E4E4;
        font-family: Poppins, sans-serif;
        font-weight: 700;
        font-size: 1.1em;
        border: none;
        margin: 0;
        padding: 0;
        cursor: pointer;

        &:hover{
            color: #fff;
            text-shadow: #00000036 0 0 10px;
        }
    }
}

.hide{
    left: -30% !important;
    opacity: 0;
}
</style>