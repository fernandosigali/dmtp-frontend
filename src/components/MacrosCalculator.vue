<template>
    <div class="h-72 w-full bg-gradient-to-b from-h-5 to-h-4 rounded-sm px-8 py-3 shadow-default">
        <div class="w-full flex gap-28 justify-center font-nunito text-base font-semibold text-h8">
            <v-styled-radio-button 
                group-name="macros-radio-group"
                label="Carboidratos"
                inputId="CHO"
            ></v-styled-radio-button>
            <v-styled-radio-button 
                group-name="macros-radio-group"
                label="Proteínas"
                inputId="PTN"
            ></v-styled-radio-button>
            <v-styled-radio-button 
                group-name="macros-radio-group"
                label="Lipídeos"
                inputId="LIP"
            ></v-styled-radio-button>
        </div>

    </div>
</template>

<script setup lang="ts">
import VStyledRadioButton from './vStyledRadioButton.vue';

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