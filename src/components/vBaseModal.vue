<template>
<div 
    class="fixed top-0 left-0 flex justify-center items-center h-full w-full transition-colors"
    :class="{
                'bg-transparent': !mounted,
                'bg-backdrop': (hasBackdrop && mounted)
            }"
    @mousedown="backdropMousedownEvent($event)"
    @mouseup="backdropMouseupEvent($event)"
    >
    <div 
        class="text-center bg-transparent h-fit w-fit transition-all duration-150"
        :class="{
                    'max-h-0': !mounted,
                    'max-h-full': mounted,
                    'max-w-0': !mounted,
                    'max-w-full': mounted
                }"
        @mousedown.stop
        @mouseup="modalContentMouseupEvent($event)"
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
let backdropMousedownOcurred = false;
const emit = defineEmits(['close'])
 
const backdropMousedownEvent = (event: Event) => {
    backdropMousedownOcurred = true;
} 

const modalContentMouseupEvent = (event: Event) => {
    backdropMousedownOcurred = false;
}
 
const backdropMouseupEvent = (event: Event) => {
    if (backdropMousedownOcurred){
        backdropClick()
    }
} 

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