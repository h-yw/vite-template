<script setup lang="ts">import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
    message: {
        type: String,
        default: '提示',
    },
    duration: {
        type: Number,
        default: 3000,
    },
})
const show = ref(false)
const timer = ref(0)
onMounted(() => {
    show.value = true
    timer.value = setTimeout(() => {
        show.value = false
    }, props.duration)
})
onUnmounted(() => {
    clearTimeout(timer.value)
})
</script>

<template>
    <teleport to="body">
        <Transition>
            <div v-show="show" class="Toast">
                <div class="Toast-content">{{ props.message }}</div>
            </div>
        </Transition>
    </teleport>
</template>

<style lang="scss" scoped>
.Toast {
    position: fixed;
    display: flex;
    max-width: env(full-width);
    min-height: 128px;
    top: 50%;
    left: 50%;
    justify-content: center;
    align-items: center;
    padding: 50px;
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    .Toast-content {
        color: rgba(255, 255, 255, 1);
    }
}
</style>