
import primero from '../components/primero.vue'
import datospoke from "../components/datospoke.vue"


import { createRouter, createWebHashHistory} from 'vue-router';


const routes = [
{path:"/", component:primero},
{path:"/datospoke", component: datospoke }
]


export const router = createRouter({
   history: createWebHashHistory(),
   routes
});