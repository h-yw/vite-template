<script setup lang="ts">

import { onMounted } from '@vue/runtime-core'
import { ref } from 'vue'
// 变量声明
const env = import.meta.env.VITE_ENV_FILE
let dy =ref(0)

// 函数声明
function handleAlert(data: string) {
  alert(data)
}
function addDY(){
  dy.value++
}

onMounted(()=>{
  dy.value=10
})
</script>
<template>
  <div>
     <b>Index</b>
       <p>Current ENV: <b>{{env}}</b></p>
  <p>DY: <b>{{dy}}</b></p>
  <button @click="handleAlert('button')">Alert</button>
  <br/>
  <button @click="addDY">ADD DY</button>
  </div>
</template>
<style lang="scss" scoped>

</style>