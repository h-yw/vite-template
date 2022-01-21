<script setup lang="ts">

import { onMounted, ref,} from 'vue'
// 变量声明
const env = import.meta.env.VITE_ENV_FILE
let dy = ref(0)

// 函数声明
function handleAlert(data: string) {
  alert(data)
}
function addDY() {
  dy.value++
}

onMounted(() => {
// console.log(Toast);

})
</script>
<template>
  <div>
    <b>Index</b>
    <p>
      Current ENV:
      <b>{{ env }}</b>
    </p>
    <p>
      DY:
      <b>{{ dy }}</b>
    </p>
    <button @click="handleAlert('button')">Alert</button>
    <br />
    <button @click="addDY">ADD DY</button>
  </div>
</template>
<style lang="scss" scoped>
.box {
  width: 750px;
  height: 360px;
  border: 1px solid #000;
  box-sizing: border-box;
}
</style>