<script>
import {store} from "../store.js";


export default {
    name: "AppHome",
    data(){
        return{
            store,
        }
    },

    methods : {

        setCartShow(){

            this.store.CartShow = 0
            },

    },

    created(){

        this.setCartShow();

    }
}
</script>



<template>
    <section>
        <div><router-link to="Show">Show</router-link></div>
        <router-link to="home">home</router-link>
    </section>
</template>

<style scoped lang="scss">
    
</style>