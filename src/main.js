import { createApp } from 'vue'
import '../public/main.css'
import App from './App.vue'
import router from './router/index.js'

createApp(App).use(router).mount('#app')
