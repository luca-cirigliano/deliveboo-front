    <template>
        <form action="" @submit.prevent>
            <div class="mt-5">
                <label for="name">Nome</label>
                <input v-model="this.order.name" type="text" id="name">
            </div>
            <div class="mt-5">
                <label for="surname">Cognome</label>
                <input v-model="this.order.surname" type="text" id="surname">
            </div>
            <div class="mt-5">
                <label for="address">Indirizzo</label>
                <input v-model="this.order.address" type="text" id="address">
            </div>
            <div class="mt-5">
                <label for="phone">Cellulare</label>
                <input v-model="this.order.phone" type="text" id="phone">
            </div>
            <button type="submit" @click="createNumber(); sendOrder(); ">invia</button>
        </form>
    </template>

    <script>
        import axios from 'axios';
        export default {
            data() {
                return {
                name: "payment",
                order: {
                    name: "",
                    surname: "",
                    address: "",
                    phone: "",
                    status: 1,
                    TotalPrice: 0
                },
                apiUrl: 'http://127.0.0.1:8000/api/payment'
                };
            },

            methods: {
                setTotalPrice(){
                    this.order.TotalPrice = parseInt(this.$route.params.TotalPrice)
                },

                sendOrder(){
                    axios.post(this.apiUrl, this.order).then((response) => {
                    console.log(response);
                    });
                },

                createNumber(){
                    this.order.phone = parseInt(this.order.phone)
                }
            },

            created() {
                this.setTotalPrice();
            },
        }

    </script>


    <style lang="scss" scoped>
    </style>