import { createApp } from 'vue'
import {createRouter,createWebHashHistory} from 'vue-router'

import './index.scss'
import App from './App.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/',component:()=>import('./views/Home.vue')},
        {path: '/doc',component:()=>import('./views/Doc.vue')}
    ]
})

createApp(App).use(router).mount('#app')
