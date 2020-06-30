<template>
  <div>
    toRaw:用于将响应式数据还原为原始数据(reactive,readonly)。<br>
    注：可用于临时读取，访问不会被代理/追踪。写入也不会触发更改。不建议一直持有原始对象的引用,慎用。
    <p>
      <input type="text" v-model="Rtemp.name">
      <input type="text" v-model="Ttemp.name">
    </p>
  </div>
</template>

<script>
import { reactive, toRaw} from 'vue'
export default {
  setup(){
    const temp = {
      name:'张三'
    }
    const Rtemp = reactive(temp)
    const Ttemp = toRaw(Rtemp)
    console.log('还原后是否为原对象');
    console.log(Ttemp===temp);
    console.log('响应式是否为愿对象');
    console.log(Rtemp===temp);
    return{
      Rtemp,
      Ttemp
    }
  }
}
</script>

<style>

</style>