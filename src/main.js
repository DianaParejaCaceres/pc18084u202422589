import i18n from "./i18n.js";
import { createApp } from 'vue'
import './style.css'
import App from './app.vue'

createApp(App)
    .use(i18n)
    .mount('#app')
