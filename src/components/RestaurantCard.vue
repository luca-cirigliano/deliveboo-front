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


    created(){


    }
 }   


</script>

<template>

    <div>
    
        <div>{{ restaurant.name }}</div>
        <div>{{ restaurant.address }}</div>
        <div>{{ restaurant.piva }}</div>

        <ul>
        <li v-for="type in restaurant.types" :key="type.id">{{ type.name }}</li>
        </ul>
        
        <div class="img-container">
            <img :src="restaurantImage" alt="">
        </div>

    </div>

</template>

<style scoped lang="scss">

.img-container{
    width: 200px;
    height: 200px;

    img{

        width: 100%;
        height: 100%;
        object-fit: cover;
    }

}


</style>