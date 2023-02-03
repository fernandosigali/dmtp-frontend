<template>
<div class="h-content w-64 bg-gradient-to-b from-h-5 to-h-4 rounded-sm px-8 py-3 shadow-default">
    <div class="w-full text-left font-nunito text-base font-semibold text-h8">
        <span>{{ title }}</span>
    </div>
    <div class="w-full text-right font-lato text-4xl text-h11">
        <span>{{ value }}</span>
    </div>
</div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    title: string,
    value: string,
}>(), {
    title: 'Title',
    value: 'Value'
})

</script>

<style scoped>
</style>