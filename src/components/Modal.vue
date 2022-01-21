<script setup lang="ts">
let props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: "标题"
    },
    content: {
        type: String,
        default: "内容"
    },
    onClose: {
        type: Function,
        default: () => { }
    },
    showClose: {
        type: Boolean,
        default: true
    }
})

</script>

<template>
    <teleport to="body">
        <transition name="modal" :duration="250">
            <div v-if="props.visible" class="Modal">
                <div class="Modal-content">
                    <slot></slot>
                    <div v-if="showClose" class="Modal-content__close" @click="props.onClose()">
                    </div>
                </div>
                <div class="Modal-overly"></div>
            </div>
        </transition>
    </teleport>
</template>

<style lang="scss" scoped>
.Modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
}
.Modal-content {
    position: fixed;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.Modal-content__close {
}
.Modal-overly {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.4);
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>