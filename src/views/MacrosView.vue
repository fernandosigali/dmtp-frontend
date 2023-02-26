<template>
<div class="h-full w-full flex items-center justify-center flex-col">
    <div class="h-full w-full grid grid-cols-12 grid-rows-4 gap-5 max-w-6xl max-h-[792px]">
        <card 
            title="Peso (kg)" 
            class="col-start-4 col-span-3 row-start-1 place-self-start"
            :disabled="false"
            :value="macrosCalculatorStore.weight"
            @update:value="newWeight => updateWeight(newWeight)"    
        ></card>
        <card 
            title="Calorias (kcal)" 
            class="col-start-7 col-span-3 row-start-1 place-self-end self-start"
            :disabled="macrosCalculatorStore.selectedMode==('quantityPerKilogram' || '')  ? true : false"
            :value="macrosCalculatorStore.calories"
            @update:value="newCalories => updateCalories(newCalories)"    
        ></card>
    
        <macros-calculator 
            class="col-start-2 col-span-10 row-start-2 row-span-2 place-self-start"
            @updateLastModifieds="updateLastModifieds"
            @updateModeSelected="updateModeSelected"
        ></macros-calculator>

        <v-button
            class="col-start-11 row-start-4 place-self-end self-start text-xl"
            title="SALVAR"
            @click="saveMacros($event)"
        ></v-button>
    </div>
</div>


</template>

<script setup lang="ts">
import Card from '@/components/MacrosCalculatorCard.vue'
import MacrosCalculator from '@/components/MacrosCalculator.vue';
import vButton from '@/components/vPrimaryButton.vue';
import { useMacrosCalculatorStore } from '@/stores/macrosCalculatorStore';
import { ref, type Ref } from 'vue';

const macrosCalculatorStore = useMacrosCalculatorStore()

const updateLastModifieds = (updatedProperty: string) => {
    macrosCalculatorStore.updateLastModifieds(updatedProperty)
}

const updateModeSelected = (newModeSelected: string) => {
    macrosCalculatorStore.changeSelectedMode(newModeSelected)
}

const updateWeight = (weight: string) => {
    macrosCalculatorStore.updateWeight(weight)
}

const updateCalories = (calories: string) => {
    macrosCalculatorStore.updateCalories(calories)
}

const saveMacros = (event: Event) => {
    console.log('saving')
}

</script>