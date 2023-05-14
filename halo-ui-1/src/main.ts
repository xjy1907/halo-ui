import { createApp } from 'vue'
import {createRouter,createWebHashHistory} from 'vue-router'

import './style.css'
import App from './App.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/xu',component:()=>import('./components/Xu.vue')}
    ]
})

createApp(App).use(router).mount('#app')
