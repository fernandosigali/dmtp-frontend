<template>
    <div class="flex flex-row px-6 font-nunito font-normal text-base h-12 leading-[3] relative">
        <span class="basis-2/5 grow"></span>
        <span class="basis-1/5 shrink font-semibold">{{ mealTotal.totals.quantity }}g</span>
        <span class="basis-1/5 shrink font-semibold">{{ mealTotal.totals.calories }}kcal</span>
        <!-- <div class="basis-1/5 grow flex flex-row justify-between"> -->
        <food-macro-nutrients
            :totalMacros="mealTotal.totals.macros"
            :proportionalMacros="macrosRatio"
        ></food-macro-nutrients>    
    </div>
</template>

<script setup lang="ts">

import type { MealTotal } from '@/assets/interfaces';
import MacrosBar from '@/components/MacrosBar.vue'
import FoodMacroNutrients from './FoodMacroNutrients.vue';
import { computed } from 'vue';

const props = defineProps<{
    mealTotal: MealTotal,
}>() 

const macrosRatio = computed(() => {
    return {
        cho: props.mealTotal.totals.macros.cho / props.mealTotal.totals.quantity,
        ptn: props.mealTotal.totals.macros.ptn / props.mealTotal.totals.quantity,
        lip: props.mealTotal.totals.macros.lip / props.mealTotal.totals.quantity,
    }
})
console.log(props.mealTotal)

</script>