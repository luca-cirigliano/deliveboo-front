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