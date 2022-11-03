import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '~/styles/element/index.scss'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.mount('#app')
