import { createRouter, createWebHistory } from 'vue-router'
import home from '../view/home.vue'
import setup from '../view/setup.vue'
import reactive from '../view/reactive.vue'
import ref from '../view/ref.vue'
import computed from '../view/computed.vue'
import readonly from '../view/readonly.vue'
import watchEffect from '../view/watchEffect.vue'
import watch from '../view/watch.vue'
import lifeCycle from '../view/lifeCycle.vue'
import DependencyInjection from '../view/DependencyInjection.vue'
import Refs from '../view/Refs.vue'
import unref from '../view/unref.vue'
import toRef from '../view/toRef.vue'
import toRefs from '../view/toRefs.vue'
import isRef from '../view/isRef.vue'
import isProxy from '../view/isProxy.vue'
import isReactive from '../view/isReactive.vue'
import isReadonly from '../view/isReadonly.vue'
import customRef from '../view/customRef.vue'
import markRaw from '../view/markRaw.vue'
import shallowReactive from '../view/shallowReactive.vue'
import shallowReadonly from '../view/shallowReadonly.vue'
import shallowRef from '../view/shallowRef.vue'
import toRaw from '../view/toRaw.vue'



import notFond from '../view/notFond.vue'
const routerHistory = createWebHistory()

const Router = createRouter({
    history:routerHistory,
    routes:[
        {
            path:'',
            name:'home',
            component:home,
            children:[
                {
                    path:'setup',
                    name:'setup',
                    component:setup,
                },
                {
                    path:'reactive',
                    name:'reactive',
                    component:reactive
                },
                {
                    path:'ref',
                    name:'ref',
                    component:ref
                },
                {
                    path:'computed',
                    name:'computed',
                    component:computed
                },
                {
                    path:'readonly',
                    name:'readonly',
                    component:readonly
                },
                {
                    path:'watchEffect',
                    name:'watchEffect',
                    component:watchEffect
                },
                {
                    path:'watch',
                    name:'watch',
                    component:watch
                },
                {
                    path:'lifeCycle',// 生命周期
                    name:'lifeCycle',
                    component:lifeCycle
                },
                {
                    path:'DependencyInjection',// 依赖注入
                    name:'DependencyInjection',
                    component:DependencyInjection
                },
                {
                    path:'Refs',
                    name:'Refs',
                    component:Refs
                },
                {
                    path:'unref',
                    name:'unref',
                    component:unref
                },
                {
                    path:'toRef',
                    name:'toRef',
                    component:toRef
                },
                {
                    path:'toRefs',
                    name:'toRefs',
                    component:toRefs
                },
                {
                    path:'isRef',
                    name:'isRef',
                    component:isRef
                },
                {
                    path:'isProxy',
                    name:'isProxy',
                    component:isProxy
                },
                {
                    path:'isReactive',
                    name:'isReactive',
                    component:isReactive
                },
                {
                    path:'isReadonly',
                    name:'isReadonly',
                    component:isReadonly
                },
                {
                    path:'customRef',
                    name:'customRef',
                    component:customRef
                },
                {
                    path:'markRaw',
                    name:'markRaw',
                    component:markRaw
                },
                {
                    path:'shallowReactive',
                    name:'shallowReactive',
                    component:shallowReactive
                },
                {
                    path:'shallowReadonly',
                    name:'shallowReadonly',
                    component:shallowReadonly
                },
                {
                    path:'shallowRef',
                    name:'shallowRef',
                    component:shallowRef
                },
                {
                    path:'toRaw',
                    name:'toRaw',
                    component:toRaw
                },
                {
                    path:'404',
                    name:'404',
                    component:notFond
                },
                {
                    path:'*',
                    name:'err',
                    redirect:'404'
                }
            ]
        }
    ]
})

export default Router