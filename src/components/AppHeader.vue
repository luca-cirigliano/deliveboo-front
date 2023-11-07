<script>
export default {
    name: "Header"
};
</script>
<template>
    <div class="background">
        <div class="container">
            <h3>
                Deliveboo
            </h3>
            <div>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <!-- <div class="dropdown">
                <i class="fa-solid fa-circle-user restaurant-type"></i>

                    
            </div> -->
            <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-circle-user restaurant-type"></i>
                </button>


                <ul class="dropdown-menu dropdown-menu-end ms-dropdown">
                    <li><a class="dropdown-item" href="http://127.0.0.1:8000/login">Login</a></li>
                    <li><a class="dropdown-item" href="http://127.0.0.1:8000/register">Register</a></li>
                </ul>
            </div>

        </div>
    </div>
</template>

<style scoped>
.background {
    background-color: orange;
}

.container {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;

}
</style>