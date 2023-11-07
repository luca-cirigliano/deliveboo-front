<script>
import axios from 'axios';
import RestaurantCard from '../components/RestaurantCard.vue';
import {store} from "../store.js";

export default {
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000/',
            restaurants: [],
            filters: [],
            noResults: false,
            store,
            
        };
    },

    computed: {
        filteredRestaurants() {
            if (this.filters.length === 0) {
            return this.restaurants;
            } else {
            return this.restaurants.filter(restaurant => {
                return this.filters.every(filter => restaurant.types.some(typology => typology.name === filter));
            });
            }
        },
    },  

    methods: {

        setCartShow(){

            this.store.CartShow = 0
            },

        
        getRestaurants() {
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
        },
        toggleFilter(filter) {
            console.log('Toggle filter:', filter);
            console.log(this.filters)
            if (this.filters.includes(filter)) {
                const index = this.filters.indexOf(filter);
            if (index > -1) {
                this.filters.splice(index, 1);
            }
            } else {
                this.filters.push(filter);
            }
            this.noResults = this.filteredRestaurants.length === 0;
        },
        getUniqueTypes() {
            const types = [];
            this.restaurants.forEach(restaurant => {
            restaurant.types.forEach(typology => {
                if (!types.includes(typology.name)) {
                types.push(typology.name);
                }
            });
            });
            return types;
        },
    },

    created() {
        this.getRestaurants();
        console.log(this.store.CartShow);
        this.setCartShow();
    },
    
    components: { RestaurantCard }
}


</script>
<template>
    <section class="bg-svg">
        <h1 class="text-center pt-5">Cosa vuoi mangiare oggi?</h1>
        <h5 class="text-center mt-5">clicca su quello che più ti ispira e ti consiglieremo noi i migliori locali!</h5>
        <div class="d-flex gap-5 justify-content-center mt-5">
            <div class="text-center">
                <i class="fa-solid fa-burger restaurant-type" @click="toggleFilter('Hamburgeria')" :class="{ active: filters.includes('Hamburgeria') }"></i>
                <p>Hamburgeria</p>
            </div>
            <div class="text-center">
                <i class="fa-solid fa-bowl-rice restaurant-type" @click="toggleFilter('Sushi')" :class="{ active: filters.includes('Sushi') }"></i>
                <p>Sushi</p>
            </div>
            <div class="text-center">
                <i class="fa-solid fa-pizza-slice restaurant-type" @click="toggleFilter('Pizzeria')" :class="{ active: filters.includes('Pizzeria') }"></i>
                <p>Pizzeria</p>
            </div>
            <div class="text-center">
                <i class="fa-solid fa-bread-slice restaurant-type" @click="toggleFilter('Piadineria')" :class="{ active: filters.includes('Piadineria') }"></i>
                <p>Piadineria</p>
            </div>
            <div class="text-center">
                <i class="fa-solid fa-ice-cream restaurant-type" @click="toggleFilter('Gelateria')" :class="{ active: filters.includes('Gelateria') }"></i>
                <p>Gelateria</p>
            </div>
            <div class="text-center">
                <i class="fa-solid fa-cookie restaurant-type" @click="toggleFilter('Cornetteria')" :class="{ active: filters.includes('Cornetteria') }"></i>
                <p>Cornetteria</p>
            </div>
            <div class="text-center">
                <i class="fa-solid fa-drumstick-bite restaurant-type" @click="toggleFilter('Kebab')" :class="{ active: filters.includes('Kebab') }"></i>
                <p>Kebab</p>
            </div>
            <div class="text-center"    >
                <i class="fa-solid fa-bowl-food restaurant-type" @click="toggleFilter('Pokeria')" :class="{ active: filters.includes('Pokeria') }"></i>
                <p>Pokeria</p>
            </div>
        </div>
        <div v-if="noResults" class="text-center mt-5">
            <p>Nessun ristorante trovato per i filtri selezionati.</p>
        </div>

        <div class="card-container">

            <div class="card-widht" v-for="restaurant in filteredRestaurants" :key="restaurant.id">
                <RestaurantCard :restaurant="restaurant"></RestaurantCard>
            </div>

           


         

            



        </div>

        





    </section>
</template>

<style scoped lang="scss">


    .card-container{
        width: 80%;
        margin: 100px auto;
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
    }

    .card-widht{
        width: calc((100% / 5) - 40px);
    }

    .bg-svg{
        background-image: url(../../public/img/Animated\ Shape.svg);
        background-size: cover;
        min-width: 100%;
    }

</style>