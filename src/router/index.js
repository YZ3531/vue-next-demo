import Router from 'vue-router'
import {Vue} from 'vue'

import Login from '../views/login.vue'
import Home from '../views/home.vue'
import Err_404 from '../views/404.vue'
Vue.use(Router)
let router =  new Router({
    routes:[
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/home',
            name:'home',
            component:Home
        },
        {
            path:'*',
            name:'404',
            component:Err_404
        }
    ]
})
export default router