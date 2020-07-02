<template>
  <div>
    {{list}}   <br>  {{REF}}<br>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
import { reactive, toRefs, unref, ref } from 'vue'
export default {
  setup(){
    const temp = reactive({
      list:'111'
    })
    const REF = ref(0)
    const handleClick = ()=>{
      console.log(unref(temp.list));
      console.log(unref(REF));
    }
    return{
      ...toRefs(temp),
      handleClick,
      REF
    }
  }
}
</script>

<style>

</style>