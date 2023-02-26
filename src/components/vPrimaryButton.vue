<template>
    <div 
        class="bg-gradient-to-b from-h10 to-h11 px-8 py-4 rounded-sm shadow-default font-lato cursor-pointer transition-transform"
        :class="{'scale-95': pressing}"
        @mousedown="pressButton($event)"
        @mouseup="confirmClick($event)"
        @mouseleave="releaseButton($event)"
        >
        <span class="text-h-5">
            {{ title }}
        </span>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const props = withDefaults(defineProps<{
    title: string,
}>(), {
    title: 'Title'
})

const pressing = ref(false)

const pressButton = (event: Event) => {
    pressing.value = true
}

const releaseButton = (event: Event) => {
    pressing.value = false
}

const confirmClick = (event: Event) => {
    releaseButton(event)
}

</script>

