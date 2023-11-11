<script>
import HomePage from './views/HomePage.vue';
import RestaurantShow from './views/RestaurantShow.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {

    components: {
        HomePage,
        RestaurantShow,
        AppHeader,
        AppFooter,

    }
};

</script>

<template>
    <div class="body">
        <AppHeader></AppHeader>
        <router-view></router-view>

        <AppFooter></AppFooter>


    </div>
</template>

<style scoped>
.body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: "Centaur";

}

</style>