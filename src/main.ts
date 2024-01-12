import './assets/main.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { firebaseApp } from './firebase'

const app = createApp(App)

app.use(router)

app.mount('#app')
