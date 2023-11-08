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
        results : [],

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
            this.results = [...this.cart.reduce( (mp, o) => {
            const key = JSON.stringify([o.name, o.description, o.price]);
                if (!mp.has(key)) mp.set(key, { ...o, count: 0 });
                mp.get(key).count++;
                return mp;
            }, new Map).values()];

           
        },

        CalculateTotalPrice(cart){

            this.TotalPrice = 0

            cart.forEach(element => {
                
                this.TotalPrice = this.TotalPrice + parseFloat(element.price) 



            });

            

        }
    },

    // computed: {
    // // a computed getter
    //     productSubtotals: function () {
    //     var subtotals = {};
    //     for (var i = 0; i < this.cart.length; i++) {
    //         subtotals [this.cart[i]] = 1 + (subtotals[this.cart[i]] || 0);
    //     }
    //     return subtotals; //A list of product/count pairs may be a more appropriate data structure
    //     }
    // },

    created(){

        this.setCartShow();

    }
}
</script>

<template>

    

    <button type="button" class="m-3 btn btn-primary position-absolute top-0 end-0" @click.prevent="showOffcanvasMenu()" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
        <i class="fa-solid fa-cart-shopping"></i><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{{ cart.length }} <span class="visually-hidden">unread messages</span></span>
    </button>


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
            <div v-for="cartElement in results">
                <div>{{ cartElement.name }}</div>
                <div>{{ cartElement.price }}</div>
                
            </div>

                <div>
                   Quantità : {{ cartElement.count }}
                </div>
                <div>
                    Elimina
                </div>  
                
                
            </div> 

            <div>Total price =  &euro; {{ TotalPrice }} </div>
        </div>
    </div>


    <!-- /prova offancavas -->


</template>