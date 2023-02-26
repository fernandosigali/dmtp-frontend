<template>
<div 
    class="fixed top-0 left-0 flex justify-center items-center h-full w-full transition-colors"
    :class="{
                'bg-transparent': !mounted,
                'bg-backdrop': (hasBackdrop && mounted)
            }"
    @click="backdropClick()"
    >
    <div 
        class="text-center bg-g-1 h-fit w-fit transition-all"
        :class="{
                    'max-h-0': !mounted,
                    'max-h-full': mounted,
                    'max-w-0': !mounted,
                    'max-w-full': mounted
                }"
        @click.stop
        >
        <slot>
            
        </slot>
    </div>
</div>
</template>

<script setup lang="ts">

import { defineEmits, onMounted, ref } from 'vue';

const props = withDefaults(defineProps<{
    hasBackdrop?: boolean,
    disableClose?: boolean
}>(), {
    hasBackdrop: true,
    disableClose: false
})

const mounted = ref(false)
console.log('consigo')
const emit = defineEmits(['close'])

const backdropClick = () => {
    if (!props.disableClose) {
        close()
    }
}

const close = () => {
    emit('close')
}

onMounted(() => {
    setTimeout(() => {
        mounted.value = true
    })
})

</script>