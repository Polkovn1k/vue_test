import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'

window.instance = createApp(App).mount('#app')
