import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router.ts'

const app = createApp(App)

app.use(createPinia()).use(router)

app.mount('#app')
