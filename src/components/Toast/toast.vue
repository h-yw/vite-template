<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue';
import Icon from '../Icon/Icon.vue';
// type ToastType = 'success' | 'error' | 'warning' | 'info';
const props = defineProps({
    type: {
        type: String,
        default: 'info',
        validator: (val: string) => ['success', 'error', 'warning', 'info', 'loading'].includes(val),
    },
    title: {
        type: String,
        default: '',
    },
    position: {
        type: String,
        default: 'top',
        validator: (val: String) => {
            return ['top', 'middle', 'bottom'].includes(val as string)
        },
    },
    message: {
        type: String,
        default: '',
    },
    duration: {
        type: Number,
        default: 3000,
    },
    to: {
        type: String,
        default: 'body',
    },
    icon: {
        type: String,
        default: '',
    },
    close: {
        type: Function,
        default: () => { },
    },
})

const show = ref(false)
const timer = ref(0)
const toastTime = () => {
    show.value = true
    if (props.duration > 0) {
        timer.value = window.setTimeout(() => {
            show.value = false
        }, props.duration)
    }
}
const typeIcon = computed(() => {
    switch (props.type) {
        case 'success':
            return 'success'
        case 'error':
            return 'error'
        case 'warning':
            return 'warning'
        case 'info':
            return 'information'
        case 'loading':
            return 'spinner'
        default:
            return ''
    }
})
const onClose = ()=>{
    show.value = false
    window.clearTimeout(timer.value)
}
onMounted(() => {
    toastTime()
    // console.log(props);  
})
onUnmounted(() => {
    timer.value && clearTimeout(timer.value)
})
defineExpose({
    onClose
})
</script>

<template>
    <teleport :to="to">
        <Transition>
            <div v-if="show" class="Toast" :class="['position-' + props.position]" @click="onClose">
                <div v-if="title" class="Toast-title">
                    <span>{{ title || props.type }}</span>
                </div>
                <div>
                    <Icon :name="props.icon || typeIcon" />
                </div>
                <div v-if="props.message" class="Toast-content">{{ message }}</div>
            </div>
        </Transition>
    </teleport>
</template>

<style lang="scss" scoped>
.Toast {
    position: fixed;
    // width:128px;
    padding: 10px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    box-sizing: border-box;
    .Toast-title {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        border-radius: 12px 12px 0 0;
        background-color: #fff;
        color: #000;
        font-size: 16px;
        font-weight: bold;
        .Toast-title-icon {
            margin-right: 10px;
        }
    }
    .Toast-content {
        padding: 10px;
        font-size: 14px;
        white-space: pre-wrap;
        text-align: center;
        word-break: break-all;
        color: rgb(255, 255, 255);
    }
}
.position-top {
    top: 0;
}
.position-bottom {
    bottom: 0;
}
.position-middle {
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
}
</style>