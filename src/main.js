import './assets/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createI18n} from 'vue-i18n'
// import  animated  from 'animate.css'
import App from './App.vue'
import router from './router'
import en from '@/lenguage/en.json'
import ru from '@/lenguage/ru.json'
import uz from '@/lenguage/uz.json'
import AOS from "aos";
import 'aos/dist/aos.css';
import "animate.css"
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)

const i18n = createI18n({
    locale: 'en',
    legacy: false,
    fallbackLocale: 'en',
    messages: {
      en: en,
      ru: ru,
      uz: uz,
    }
  })


app.use(i18n)
AOS.init();
app.mount('#app')
