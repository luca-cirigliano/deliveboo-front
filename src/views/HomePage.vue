<script>
import axios from 'axios';
import RestaurantCard from '../components/RestaurantCard.vue';




export default {
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000/',
            restaurants: [],
        };
    },

    methods: {
        getRestuarants() {
            axios.get(this.baseUrl + 'api/restaurants/').then(res => {
                this.restaurants = res.data.results;
                console.log(this.restaurants);
            });
        },
        restaurantImage() {
            if (this.restaurant.photo == null) {
                return 'https://icon-library.com/images/no-image-available-icon/no-image-available-icon-7.jpg';
            }
            else {
                return this.baseUrl + 'storage/' + this.restaurant.photo;
            }
        }
    },

    created() {
        this.getRestuarants();
    },
    
    components: { RestaurantCard }
}


</script>
<template>
    <section>

        <div>HomePage</div>

        <div class="card-container">

            <div v-for="restaurant in restaurants">
                <RestaurantCard :restaurant="restaurant"></RestaurantCard>
            </div>

        </div>


    </section>
</template>

<style scoped lang="scss">


    .card-container{

        display: flex;
        gap: 20px;
    }


</style>