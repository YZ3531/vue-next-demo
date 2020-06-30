<template>
  <div>
    watchEffect
    <p>{{count}}</p>
    <p v-if="status">侦听中</p>
  </div>
</template>

<script>
import { ref, watchEffect} from 'vue'
export default {
  setup(){
    const count = ref(0)
    const status = ref(true)
    const stop = watchEffect(() => console.log(count.value))
    // -> 打印出 0

    const timer = setInterval(() => {
      count.value++
      // -> 打印出 1
    }, 100);

    setTimeout(() => {
      stop() // 停止侦听
      console.log(count.value++);
      status.value = false
    },2000)
    setTimeout(()=>{
      clearInterval(timer)
    },4000)

    return{
      count,
      status
    }
  }
}
</script>

<style>

</style>