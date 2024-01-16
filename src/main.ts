import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import './assets/main.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const i18n = createI18n({
  locale: 'en', // default language
  messages: {
    en: {
      // English translations
      about: 'About'
      // Add more translations as needed
    },
    id: {
      // Indonesian translations
      about: 'Tentang'
      // Add more translations as needed
    }
  }
})

const app = createApp(App)

app.use(router)
app.use(i18n) // Use the i18n instance

app.mount('#app')
