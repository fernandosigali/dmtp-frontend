<template>
    <div class="flex flex-row w-full h-1 overflow-hidden rounded">
        <div class="bg-cho" :style="choBar"></div>
        <div class="bg-ptn" :style="ptnBar"></div>
        <div class="bg-lip" :style="lipBar"></div>
        <div class="bg-rest grow"></div>
    </div>
</template>

<script setup lang="ts">

import type { MacronutrientsQuantity } from '@/assets/interfaces';
import { computed } from 'vue';

const props = defineProps<{
    macros: MacronutrientsQuantity
}>()

const choBar = computed(() => {
    return {
        width: `${props.macros.cho*100}%`,
    }
})
const ptnBar = computed(() => {
    return {
        width: `${props.macros.ptn*100}%`,
    }
})
const lipBar = computed(() => {
    return {
        width: `${props.macros.lip*100}%`,
    }
})

</script>