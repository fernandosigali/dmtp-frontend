<template>
    <div class="flex justify-center items-center gap-2">
        <input
            class="rounded-full outline outline-2 -outline-offset-1 outline-g0 h-2 w-2 shadow-radio-button shadow-g12 appearance-none bg-g0 transition-all hover:cursor-pointer checked:py-1 checked:bg-h10 checked:-outline-offset-2 checked:shadow-h8" 
            type="radio" 
            value="delete" 
            :name="groupName" 
            :id="inputId"
        >
        <label :for="inputId">{{ label }}</label>
    </div>
</template>


<script setup lang="ts">

const props = defineProps<{
    label: string,
    groupName: string,
    inputId: string, 
}>()

</script>
