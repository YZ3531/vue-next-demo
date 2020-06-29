<template>
  <div>
      <ul>
          <li v-for="item in list" :key="item" @click="to(item)" class="item">{{item}}</li>
      </ul>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, getCurrentInstance } from 'vue'

export default {
    setup(){
        const store = useStore()
        const { ctx }  = getCurrentInstance()
        const list = computed(() => store.state.Config.RouterList.filter(item=>item!=='router' )) 
        const to = (router) => {
            ctx.$router.push('/'+router+'?id=555')
        }
        console.log('路由实例');
        console.log(ctx.$router.currentRoute.value);
        console.log('query传参');
        console.log(ctx.$router.currentRoute.value.query.id);

        // 页面拦截器
        ctx.$router.beforeEach((to, from,next)=>{
            console.log('路由的生命周期')
            next()
        })     
  
        return{
            list,
            to
        }   
    }
}
</script>

<style>
.item{
    width: 200px;
    height: 30px;
    line-height: 30px;
    margin: 10px auto;
    border: 1px solid #ccc;
    list-style-type: none;
    text-align: center;
}
.item:hover{
    background-color: #ccc;
    cursor: pointer;
    transition: .5s linear;
}
</style>