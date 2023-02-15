<template>
<div class="h-content w-64 bg-gradient-to-b from-h-5 to-h-4 rounded-sm px-8 py-3 shadow-default">
    <div class="w-full text-left font-nunito text-base font-semibold text-h8">
        <span>{{ title }}</span>
    </div>
    <div class="w-full text-right font-lato text-4xl text-h11">
        <input class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
            :value="value"
            @input="$emit('update:value', ($event.target as HTMLInputElement)?.value)"
        >
    </div>
</div>
</template>

<script setup lang="ts">

import { useMacrosCalculatorStore } from '@/stores/macrosCalculatorStore';

const props = withDefaults(defineProps<{
    title: string,
    value: string,
}>(), {
    title: 'Title',
    value: 'Value'
})

const macrosCalculatorStore = useMacrosCalculatorStore()

const emit = defineEmits(['update:value'])


</script>

<style scoped>
</style>