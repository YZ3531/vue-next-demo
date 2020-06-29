<template>
  <div>
    <button @click="handleClickRef">Click-Ref</button>
    <button @click="handleClickReadonly">Click-Readonly</button>
    <p>{{render}}</p>
  </div>
</template>

<script>
import {ref, watchEffect, readonly, watch} from 'vue';
export default {
  setup(){
    const demo = ref(0)
    const Readonly = readonly(demo)
    const render = ref(null)
    const handleClickRef = () => {
      demo.value++
    }
    const handleClickReadonly = () => {
      Readonly.value++ // waring
    }

    watch(()=>{
      render.value = demo.value
    },()=>{
      render.value = Readonly.value
    })

    return {
      demo,
      Readonly,
      handleClickRef,
      handleClickReadonly,
      render
    }
  }
}
</script>

<style>

</style>