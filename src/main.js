import './assets/styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'

const app = createApp(App)


createApp(App).use(router).mount('#app')