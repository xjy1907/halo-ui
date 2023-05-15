import {createRouter,createWebHashHistory} from 'vue-router'



export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/',component:()=>import('./views/Home.vue')},
        {path: '/doc',component:()=>import('./views/Doc.vue'),
        children:[{path:'switch',component:()=>import('./components/SwitchDoc.vue')}]
    }
    ]
})