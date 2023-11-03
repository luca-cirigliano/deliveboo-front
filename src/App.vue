<script>
import HomePage from './views/HomePage.vue';
import RestaurantShow from './views/RestaurantShow.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue'
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
    <AppHeader></AppHeader>
    <router-view></router-view>
    <AppFooter></AppFooter>
</template>

<style scoped></style>