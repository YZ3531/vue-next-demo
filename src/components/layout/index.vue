<template>
  <div id="box">
      <div class="title">
        <div>DEMO</div>
      </div>
      <div class="flx">
        <div class="flx-item" v-for="item in list" :key="item">
          <router-link :to="`/`+item">{{item}}</router-link>
        </div>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
  </div> 
</template>

<script>
import { 
  /*两种声明方式*/
  ref, 
  reactive ,
  /*转响应式*/
  toRef ,
  /*计算属性*/
  computed ,
  /*监听*/
  watch, 
  watchEffect,
  /*生命周期*/
  onBeforeMount, 
  onMounted, 
  onBeforeUpdate, 
  onUpdated, 
  onBeforeUnmount, 
  onUnmounted, 
  onActivated, 
  onDeactivated, 
  onErrorCaptured,
  /**只读 */
  readonly,
  /**/
  unref,
  /*响应式转普通对象*/
  toRefs,
  /*检测是否为响应式*/  
  isRef,
  /**/ 
  isReactive
} from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const list = computed(()=>store.state.Config.RouterList)
    return {
      list
    }
  }
}
</script>

<style scoped>
#box ,body,html{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
.title{
  text-align: center;
  font-weight: 700;
  /* position: fixed; */
  width: 100%;
  background-color: #ccc;
  top: 0;
  left: 0;
  height: 8%;
  /* line-height: 400%; */
  margin: 0;
  position: relative;
}
.title div{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.flx{
  width: 20%;
  float: left;
  overflow: scroll;
  height: 92%;
}
.flx-item{
  height: 50px;
  line-height: 50px;
  text-align: center;

}
a{
  color: #000;
  text-decoration: none;
}
a:hover{
  color: red;
  /* font-size: 24px; */
  transition: linear .2s;
}
.right{
  width:80%;
  height: 92%;
  overflow: scroll;
  padding: 50px;
  box-sizing: border-box;
}
</style>
