<template>
  <div>
    toRefs：把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref ，和响应式对象 property 一一对应。
    <p>{{name}}{{age}}{{sex}}</p>
    <p>{{names}}{{ages}}{{sexs}}</p>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
export default {
  setup(){
    const temp1 = reactive({
      name:'张三',
      age:44,
      sex:'男'
    })
    const temp2 = reactive({
      names:'李四',
      ages:55,
      sexs:'女'
    })
    return{
      ...toRefs(temp1),
      ...toRefs(temp2)
    }
  }
}
</script>

<style>

</style>