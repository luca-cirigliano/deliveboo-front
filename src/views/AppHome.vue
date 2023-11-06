<script>
import Jumbotron from '../components/Jumbotron.vue';

export default {
  components: { Jumbotron },
    name: "AppHome"
}
</script>



<template>
    <section>
        <div><router-link to="Show">Show</router-link></div>
        <Jumbotron></Jumbotron>
    </section>
</template>

<style scoped lang="scss">
    
</style>