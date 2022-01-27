<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
    name: {
        type: String,
        default: '',
    },
    prefix: {
        type: String,
        default: 'icon',
    },
    color: {
        type: String,
        default: '#fff',
    },
    size: {
        type: [Number, String],
        default:32,
    },
})
const symbolId = computed(() => {
    console.log(props);
    
    return `#${props.prefix}-${props.name}`
})
</script>
<template>
    <svg class="Icon" aria-hidden="true" :style="{color,width:size,height:size}">
        <use :xlink:href="symbolId"/>
    </svg>
</template>
<style lang="scss" scoped>
.Icon{
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    // stroke: currentColor;
    overflow: hidden;
}
</style>