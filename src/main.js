import { createApp } from 'vue'
import {createPinia} from 'pinia'
import App from '../src/App.vue'
import './style.css'
import {router} from './routes/routes.js'

import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
const pinia = createPinia()
const app = createApp(App)


app.use(Quasar, {
  plugins: {}, 
})



app.use(router)
app.use(pinia)
app.mount('#app')
