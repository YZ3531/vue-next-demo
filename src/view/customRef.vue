<template>
  <div>
    <input type="text" v-model="text" />
  </div>
</template>

<script>
import { customRef } from "vue";
function useDebouncedRef(value,cb, delay = 2000) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          cb()
          trigger()
        }, delay)
      }
    }
  })
}

export default {
  setup() {
    return {
      text: useDebouncedRef('hello',()=>{
        console.log('触发回调');
      })
    }
  }
}
</script>