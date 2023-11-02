<script>
import axios from 'axios';
import RestaurantCard from '../components/RestaurantCard.vue';

export default {
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000/',
            restaurants: [],
            filters: [],
        };
    },

    computed: {
        filteredRestaurants() {
            if (this.filters.length === 0) {
            return this.restaurants;
            } else {
            return this.restaurants.filter(restaurant => {
                return this.filters.every(filter => restaurant.types.some(type => type.name === filter));
            });
            }
        },
    },  

    methods: {
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
        },
        getUniqueTypes() {
            const types = [];
            this.restaurants.forEach(restaurant => {
            restaurant.types.forEach(type => {
                if (!types.includes(type.name)) {
                types.push(type.name);
                }
            });
            });
            return types;
        },
    },

    created() {
        this.getRestaurants();
    },
    
    components: { RestaurantCard }
}


</script>
<template>
    <section>

        <div>HomePage</div>

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
                <i class="fa-solid fa-bread-slice restaurant-type" @click="toggleFilter('Piadineria')" :class="{ active: filters.includes('type') }"></i>
                <p>Piadineria</p>
            </div>
            <div class="text-center">
                <i class="fa-solid fa-ice-cream restaurant-type" @click="toggleFilter('Gelateria')" :class="{ active: filters.includes('Gelateria ') }"></i>
                <p>Gelateria</p>
            </div>
            <div class="text-center">
                <i class="fa-solid fa-cookie restaurant-type" @click="toggleFilter('Cornetteria')" :class="{ active: filters.includes('Cornetteria ') }"></i>
                <p>Cornetteria</p>
            </div>
            <div class="text-center">
                <i class="fa-solid fa-drumstick-bite restaurant-type" @click="toggleFilter('Kebab')" :class="{ active: filters.includes('Kebab ') }"></i>
                <p>Kebab</p>
            </div>
            <div class="text-center"    >
                <i class="fa-solid fa-bowl-food restaurant-type" @click="toggleFilter('Pokeria')" :class="{ active: filters.includes('Pokeria ') }"></i>
                <p>Pokeria</p>
            </div>
        </div>

        <div class="card-container">

            <div v-for="restaurant in filteredRestaurants" :key="restaurant.id">
                <RestaurantCard :restaurant="restaurant"></RestaurantCard>
            </div>

        </div>


    </section>
</template>

<style scoped lang="scss">


    .card-container{
        margin-top: 100px;
        display: flex;
        gap: 20px;
    }


</style>