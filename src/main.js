// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

// Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// Global styles
import './styles/main.css'

createApp(App).use(router).mount('#app')
