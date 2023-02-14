<template>

<div class="h-full w-full grid grid-cols-12 grid-rows-6 gap-5">
    <card 
        title="Peso (kg)" 
        class="col-start-4 col-span-3 row-start-2 place-self-start"
        :value="macrosCalculatorStore.weight"
        @update:value=""    
    ></card>
    <card 
        title="Calorias (kcal)" 
        class="col-start-7 col-span-3 row-start-2 place-self-end self-start"
        :value="macrosCalculatorStore.calories"
        @update:value=""
    ></card>

    <macros-calculator 
        class="col-start-2 col-span-10 row-start-3 row-span-3 place-self-start"
        @updateLastModifieds="updateLastModifieds"
        @updateModeSelected="updateModeSelected"
    ></macros-calculator>
</div>


</template>

<script setup lang="ts">
import Card from '@/components/MAcrosCalculatorCard.vue';
import MacrosCalculator from '@/components/MacrosCalculator.vue';
import { useMacrosCalculatorStore } from '@/stores/macrosCalculatorStore';
import { ref, type Ref } from 'vue';

const macrosCalculatorStore = useMacrosCalculatorStore()

const updateLastModifieds = (updatedProperty: string) => {
    macrosCalculatorStore.updateLastModifieds(updatedProperty)
}

const updateModeSelected = (newModeSelected: string) => {
    macrosCalculatorStore.changeSelectedMode(newModeSelected)
}

</script>