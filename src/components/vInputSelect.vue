<template>

<div class="text-left">
    <label for="input" class="font-nunito font-regular pl-1">{{ title }}</label>
    <input id="input" class="font-nunito font-regular rounded-sm h-full w-full bg-h-5 text-h11 appearance-none shadow-select-input outline-none py-1 pl-1">
</div>

</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    title: string,
}>(), {
    title: 'Title',
})


</script>