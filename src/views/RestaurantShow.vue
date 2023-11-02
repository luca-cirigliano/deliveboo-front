<script>
import axios from 'axios';
export default {
    name: "RestaurantShow",

    data(){
        return{

        baseUrl : 'http://127.0.0.1:8000/',
        restaurant: {},
        restaurantSlug: '',

        }
    },

    mounted() {
        this.restaurantSlug = this.$route.params.slug;
        this.getRestaurant();
    },

    methods: {
        getRestaurant() {
            axios.get(this.baseUrl + 'api/restaurants/' + this.restaurantSlug).then(res => {
                this.restaurant = res.data.results;
                console.log(this.restaurant);
            });
        },
    },
}
</script>

<template>
    <div>
        <ul>
            <li v-for="dish in restaurant.dishes" :key="dish.id">
                {{ dish.name }} - {{ dish.description }} - Price: {{ dish.price }}
            </li>
        </ul>
        <p>{{ restaurant.name }}</p>
    </div>
</template>