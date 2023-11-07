<script>
import axios from 'axios';
import {store} from "../store.js"


export default {
    name: "RestaurantShow",

    data(){
        return{

        baseUrl : 'http://127.0.0.1:8000/',
        restaurant: {},
        restaurantSlug: '',
        cart : [],
        showMenu : false,
        TotalPrice : 0,
        store,

        }
    },

    mounted() {
        
        this.restaurantSlug = this.$route.params.slug;
        this.getRestaurant();
        
    },

    methods: {

        setCartShow(){

            this.store.CartShow = 1
        },

        showOffcanvasMenu(){
            this.showMenu ? this.showMenu = false : this.showMenu = true;
        },

        getRestaurant() {
            axios.get(this.baseUrl + 'api/restaurants/' + this.restaurantSlug).then(res => {
               
                this.restaurant = res.data.results;
              
                
            });
        },


       

        AddItemToCart(dish){

            this.cart.push(dish);
            console.log(this.cart)
        },

        CalculateTotalPrice(cart){

            this.TotalPrice = 0

            cart.forEach(element => {
                
                this.TotalPrice = this.TotalPrice + parseFloat(element.price) 



            });

            

        }
    },

    created(){

        this.setCartShow();

    }
}
</script>

<template>

    <div>
        <button class="btn btn-primary" @click.prevent="showOffcanvasMenu()" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>


    <h1 class="text-center">{{ restaurant.name }}</h1>

    <div>{{ cart.length }} piatti nel tuo carrello</div>

    <div v-if="restaurant.dishes" class="d-flex gap-3">
        
        
            <div v-for="dish in restaurant.dishes" :key="dish.id" class="list-unstyled">
                <div>
                    {{ dish.name }} 
                </div>
                <div>
                    {{ dish.description }} 
                </div>
                <div>
                    Price: {{ dish.price }}
                </div>
                <div><button @click="AddItemToCart(dish), CalculateTotalPrice(cart)">Add to cart</button></div>
            </div>
        

    </div>

    
            
       
    <div v-else>

        <div>Nessun piatto</div>

    </div>


    <!-- prova offcanvas -->


    

    <div class="offcanvas offcanvas-end" :class="showMenu ? 'show' : ''" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
            <button type="button" class="btn-close" @click.prevent="showOffcanvasMenu()" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div v-for="cartElement in cart">
                <div>{{ cartElement.name }}</div>
                <div>{{ cartElement.price }}</div>
                
            </div>

            <div>Total price = {{TotalPrice }} </div>
        </div>
        </div>


    <!-- /prova offancavas -->


</template>