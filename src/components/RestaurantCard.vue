    <script>

    export default {
        data(){

            return{

                baseUrl : 'http://127.0.0.1:8000/',

            }
        },

        props : {

            restaurant : Object,
        },

        computed : {


            restaurantImage(){

                if(this.restaurant.photo == null){

                    return 'https://icon-library.com/images/no-image-available-icon/no-image-available-icon-7.jpg'

                } else {
                    
                    return this.baseUrl + 'storage/' + this.restaurant.photo;
                }

                

            }
        },

        methods: {
            
        },

    }   


    </script>


<template>

    <div class="container">
        <section class="mx-auto my-5" style="max-width: 23rem;">
            
            <div class="card card-form mt-2 mb-4">
                <div class="card-body rounded-top blue">
                    <div class="img-container">
                        <img :src="restaurantImage" alt="">
                    </div>
                </div>
            <div class="card card-form-2 min mb-0 z-depth-0">
                <div class="card-body">
                    <div class="text-center">
                        <h3><div>{{ restaurant.name }}</div></h3>
                        <div>{{ restaurant.address }}</div>  
                            <div v-for="typology in restaurant.types" :key="typology.id">
                                <i class="fa-solid fa-certificate"></i> {{ typology.name }}
                            </div>  
                        </div>
                    </div>
                    <router-link
                        :to="{
                        name: 'RestaurantShow',
                        params: { slug: restaurant.slug },
                        }"
                    class="text-center text-decoration-none">
                        Mostra dettagli
                    </router-link>
                </div>
            </div>  
        </section>
    </div>



</template>


<style lang="scss" scoped>
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

ul {
    list-style-type: none;
}

.min{
    min-height: 200px;
}

</style>
