<template>
  <div>
    <button @click="addn1">n1增加--{{n1}}</button>
    <button @click="addn2">n2增加--{{n2}}</button>
    <button @click="addn3">n3增加--{{n3}}</button>
    <h1>{{text}}</h1>
  </div>
</template>

<script>
import { watch, ref } from "vue";
export default {
  setup() {
    const n1 = ref(1);
    const n2 = ref(1);
    const n3 = ref(1);
    // 1: 监听一个
    // 第一个参数是函数返回值, 当然也可以 直接写n1 
    // 如果监听的是一个对象里面的某个属性, 那就需要这种函数的写法了, 比2.x的字符串写法高明很多
    const text = ref('');

    watch(
      () => text.value = n1.value,
      (val, oldVal) => {
        text.value = `"新值", ${val},"老值", ${oldVal}`
        console.log("新值", val);
        console.log("老值", oldVal);
      }
    );
    // 2: 监听多个
    // 数组的形式定义多个, 这就出现问题了吧, 如果我观察的对象就是个数组, 并且每一项都是一个返回值的函数, 岂不是会被他误认为是多监控的结构, 苦恼
    watch(
      [() => text.value = n2.value, ()=>text.value = n3.value],
      ([val, val3],[val2, val4]) => {
        // val 是 n2的新值   val2是 n2的老值
        // val3 是 n3的新值  val4是 n3的老值
        console.log("n2的新值 与 老值 是这种对应关系", val, val2);
        console.log("n3的新值 与 老值 是这种对应关系", val3, val4);
      }
    );

    function addn1() {
      n1.value++;
    }
    function addn2() {
      n2.value++;
    }
     function addn3() {
      n3.value++;
    }
    return {
      addn1,
      addn2,
      addn3,
      n1,
      n2,
      n3,
      text
    };
  }
};
</script>