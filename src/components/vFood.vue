<template>
    <div class="flex flex-row px-6 font-nunito font-normal text-base h-12 leading-[3] relative">
        <span class="basis-2/5 grow">{{ foodTotals.food.food.name }}</span>
        <span class="basis-1/5 shrink">{{ foodTotals.food.quantity }}g</span>
        <span class="basis-1/5 shrink">{{ foodTotals.totals.calories }}kcal</span>
        <!-- <div class="basis-1/5 grow flex flex-row justify-between"> -->

        <food-macro-nutrients
            :totalMacros="foodTotals.totals.macros"
            :proportionalMacros="foodTotals.food.food.macros"
        ></food-macro-nutrients>
    </div>
</template>

<script setup lang="ts">

import type { FoodTotal } from '@/assets/interfaces';
import FoodMacroNutrients from '@/components/FoodMacroNutrients.vue'


const props = defineProps<{
    foodTotals: FoodTotal,
}>() 


</script>