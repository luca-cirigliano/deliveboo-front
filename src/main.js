import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'

const app = createApp(App)


createApp(App).use(router).mount('#app')