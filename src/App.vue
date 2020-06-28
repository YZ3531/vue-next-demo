<template>
  <div id="box">
      <p class="title">XXX</p>
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

export default {
  setup() {
      const list = reactive([
        'setup',
        'reactive',
        'ref',
        'computed',
        'readonly',
        'watchEffect',
        'watch',
        'lifeCycle',// 生命周期
        'DependencyInjection',// 依赖注入
        'Refs',
        'unref',
        'toRef',
        'toRefs',
        'isRef',
        'isProxy',
        'isReactive',
        'isReadonly',
        'customRef',
        'markRaw',
        'shallowReactive',
        'shallowReadonly',
        'shallowRef',
        'toRaw',
      ])
    return {
      list
    }
  }
}
</script>

<style scoped>
#box ,body{
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
  background-color: #fff;
  top: 0;
  left: 0;
  height: 8%;
  line-height: 400%;
}
.flx{
  width: 20%;
  float: left;
  overflow: scroll;
  height: 90%;
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
  font-size: 24px;
  transition: linear .2s;
}
.right{
  width:80%;
  height: 90%;
  overflow: scroll;
  padding: 50px;
  box-sizing: border-box;
}
</style>
