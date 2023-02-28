<template>
<div 
    class="h-content w-60 bg-gradient-to-b rounded-md px-8 py-3 shadow-default transition-all"
    :class="{
        'from-h-5': disabled,
        'to-h-4': disabled,
        'from-h-4': !disabled,
        'to-h-3': !disabled,
    }"
    >
    <div class="w-full text-left font-nunito text-base font-semibold text-h8">
        <span>{{ title }}</span>
    </div>
    <div class="w-full text-right font-lato text-4xl text-h11">
        <input class="text-end w-full h-full bg-transparent caret-h6 focus:border-none focus:outline-none"
            :value="value"
            @input="$emit('update:value', ($event.target as HTMLInputElement)?.value)"
            :disabled="disabled"
        >
    </div>
</div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    title: string,
    value: string,
    disabled: boolean
}>(), {
    title: 'Title',
    value: 'Value',
    disabled: true
})

const emit = defineEmits(['update:value'])


</script>

<style scoped>
</style>