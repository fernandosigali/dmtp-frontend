<template>
    <div :style="clipClass">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

import { computed } from 'vue';

const props = withDefaults(defineProps<{
    width?: number,
    height?: number,
    XDirection?: 'left' | 'right',
    YDirection?: 'up' | 'down',
}>(), {
    width: 100,
    height: 100,
    XDirection: 'right',
    YDirection: 'up',
})

const clipClass = computed(() => {
    return {
        height: `${props.height}px`,
        width: `${props.width}px`,
        'clip-path': `path("${createSVGPath(props.height, props.width, props.XDirection, props.YDirection)}")`, 
    }
})

const createSVGPath = (height: number, width: number, XDirection: 'left' | 'right', YDirection: 'up' | 'down') => {
    let path
    if (XDirection == 'right' && YDirection == 'down') {
        path = `M 0 ${height} L ${0.85*width} ${height} q ${0.06*width} ${0.05*height} ${0.07*width} ${-0.2*height} L ${width} 0 0 0 Z`;
    } else if (XDirection == 'left' && YDirection == 'down') {
        path = `M ${width} ${height} L ${0.15*width} ${height} q ${-0.06*width} ${0.05*height} ${-0.07*width} ${-0.2*height} L 0 0 ${width} 0 Z`
    } else if (XDirection == 'right' && YDirection == 'up') {
        path = `M 0 0 L ${0.85*width} 0 q ${0.06*width} ${-0.05*height} ${0.07*width} ${0.2*height} L ${width} ${height} 0 ${height} Z`
    } else if (XDirection == 'left' && YDirection == 'up') {
        path = `M ${width} ${height} L ${0.15*width} ${height} q ${-0.06*width} ${0.05*height} ${-0.07*width} ${-0.2*height} L 0 0 ${width} 0 Z`
    }
    return path
}
</script>

<style scoped>
</style>