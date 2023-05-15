import {createRouter,createWebHashHistory} from 'vue-router'



export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/',component:()=>import('./views/Home.vue')},
        {path: '/doc',component:()=>import('./views/Doc.vue'),
        children:[
            {path:'',component:()=>import('./components/DocDefault.vue')},
            {path:'switch',component:()=>import('./components/SwitchDoc.vue')},
            {path:'button',component:()=>import('./components/ButtonDoc.vue')},
            {path:'dialog',component:()=>import('./components/DialogDoc.vue')},
            {path:'tabs',component:()=>import('./components/TabsDoc.vue')},
        ]
    }
    ]
})