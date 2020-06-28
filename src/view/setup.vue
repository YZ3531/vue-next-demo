<template>
  <div>
    <h1>setup</h1>
    <p>setup 函数是一个新的组件选项。作为在组件内使用 Composition API 的入口点。</p>
    <h4>调用时机</h4>
    <p>创建组件实例，然后初始化 props ，紧接着就调用setup 函数。从生命周期钩子的视角来看，它会在 beforeCreate 钩子之前被调用</p>
    <h4>模板中使用</h4>
    <p>如果 setup 返回一个对象，则对象的属性将会被合并到组件模板的渲染上下文：</p>
    <p>注意 setup 返回的 ref 在模板中会自动解开，不需要写 .value。</p>
    <h4>渲染函数 / JSX 中使用</h4>
    <p>setup 也可以返回一个函数，函数中也能使用当前 setup 函数作用域中的响应式数据：</p>
    <hr>
    <button @click="add(true)">+</button>&ensp;
    <button @click="add(false)">-</button>&ensp;
    <strong>ref:{{count}}</strong>
    <br>
    <strong>reactive:{{object}}</strong>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  setup(){
    const count = ref(0)
    const object = reactive({ foo: 'bar' })
    const add = (flag)=>{
      flag ? count.value++ : count.value--
    }
    return {
      count,
      object,
      add
    }
  }
}
</script>

<style>

</style>