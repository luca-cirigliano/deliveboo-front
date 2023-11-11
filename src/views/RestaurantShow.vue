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
        finalCart : [],
       

        }
    },
    
    mounted() {
        
        
      
        
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
            this.finalCart = [...this.cart.reduce( (mp, o) => {
            const key = JSON.stringify([o.name, o.description, o.price]);
                if (!mp.has(key)) mp.set(key, { ...o, quantity: 0 });
                mp.get(key).quantity++;
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

    created(){

        this.restaurantSlug = this.$route.params.slug;
        
        this.getRestaurant();
        
        this.setCartShow();
       
       
        
       
        
        
        
       

    }
}
</script>

<template>

    <div class="bg-img vh-100">

        <button type="button" class="m-3 btn btn-primary position-absolute top-0 end-0 z-2" @click.prevent="showOffcanvasMenu()" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
        <i class="fa-solid fa-cart-shopping"></i><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{{ cart.length }} <span class="visually-hidden">unread messages</span></span>
        </button>


        <h1 class="text-center text-white">{{ restaurant.name }}</h1>

        <div class="text-white">{{ cart.length }} piatti nel tuo carrello</div>

        <div v-if="restaurant.dishes" class="d-flex gap-3">
            
            
                <div v-for="dish in restaurant.dishes" :key="dish.id" class="list-unstyled">
                    <div class="container">
                        <section class="mx-auto my-5" style="max-width: 23rem;">
                            <div class="card card-form mt-2 mb-4">
                                <div class="card-body rounded-top blue">
                                    <div class="img-container">
                                        <img :src="baseUrl + 'storage/' + dish.image" alt="">
                                    </div>
                                </div>
                            
                                <div class="card card-form-2 min mb-0 z-depth-0">
                                    <div class="card-body" style="max-width: 13rem;">
                                        <div class="text-center">
                                            <h3><div>{{ dish.name }} </div></h3>
                                            <div>{{ dish.description }}</div>
                                            <div>Price: {{ dish.price }}</div> 
                                        </div>
                                    </div>
                                    <div><button class="btn btn-warning" style="width: 100%;" @click="AddItemToCart(dish), CalculateTotalPrice(cart)">Add to cart</button></div>  
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            

        </div>

        
                
        
        <div v-else class="color-white">

            <div>Nessun piatto</div>

        </div>


        <!-- prova offcanvas -->


        

        <div class="offcanvas offcanvas-end" :class="showMenu ? 'show' : ''" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                <button type="button" class="btn-close" @click.prevent="showOffcanvasMenu()" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div v-for="(CartElement, index) in finalCart" :key="index" class="d-flex justify-content-between">
                    <div>{{ CartElement.name }}</div>
                    
                    
                    <div>
                        Quantità : {{ CartElement.quantity }}
                    </div> 
                    <div>
                        Elimina
                    </div>  
                </div>
                <div>
                    <button>
                        <router-link
                            :to="{
                            name: 'payment',
                            params: { TotalPrice: this.TotalPrice},
                            query : { finalCart : JSON.stringify(this.finalCart)}
                            }"
                            class="text-center text-decoration-none">
                                Check out
                        </router-link>
                    </button>
                    
                </div>
            </div> 
                <div>Total price =  &euro; {{ TotalPrice }} </div>
        </div>  

    </div>
                
    <!-- /prova offancavas -->


</template>

<style lang="scss" scoped>

    .bg-img {
        background-image: url("https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4MTM2OTgxMy1pbWFnZS1rd3Z4eHA5MS5qcGc.jpg");
        background-size: cover;
        background-repeat: no-repeat;
    }
    .img-container{
        width: 200px;
        height: 200px;

        img{

            width: 100%;
            height: 100%;
            object-fit: cover;
        }

    }


body {
	background-color: #f5f7fa;
}

.blue {
  background-color: #02ccbc;
}

i{
    color: #02ccbc;
} 

.card-form .form-check {
  margin-left: .32rem;
}

.card-form .card-form-2 {
  -webkit-border-top-left-radius: 21px;
  border-top-left-radius: 21px;
  -webkit-border-top-right-radius: 21px;
  border-top-right-radius: 21px;
  margin-top: -35px;
}

.min{
    min-height: 200px;
}

</style>