<script setup lang="ts">
import { onMounted, ref, } from 'vue'
import {Toast} from '@/components/Toast/Toast'
// 变量声明
const env = import.meta.env.VITE_ENV_FILE
let dy = ref(0)

// 函数声明
function handleAlert(data: string) {
  Toast({
    type: 'info',
    message:'轻轻的我走了\n正如我轻轻的来',
    duration:0,
    position: 'middle',
    icon:'success'
  })
}
const closeAlert = () => {
  // Toast.close()
  console.log(Toast);
  
}
function addDY() {
  dy.value++
}

onMounted(() => {

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
    <button @click="closeAlert">关闭</button>
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