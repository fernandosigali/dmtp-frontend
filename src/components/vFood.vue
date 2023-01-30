<template>
    <div class="flex flex-row px-6 font-nunito font-normal text-base h-12 leading-[3] relative">
        <span class="basis-2/5 grow">{{ foodTotals.food.name }}</span>
        <span class="basis-1/5 shrink">{{ foodTotals.food.quantity }}g</span>
        <span class="basis-1/5 shrink">{{ foodTotals.totals.calories }}kcal</span>
        <!-- <div class="basis-1/5 grow flex flex-row justify-between"> -->
        <div class="basis-1/5 grow flex flex-row gap-5 relative">
            <div class="basis-1/3 flex flex-row justify-start gap-1">
                <span class="font-light">C</span>  
                <span>{{foodTotals.totals.macros.cho ?? 0}}g</span>  
            </div>
            <div class="basis-1/3 flex flex-row justify-start gap-1">
                <span class="font-light">P</span>
                <span>{{foodTotals.totals.macros.ptn ?? 0}}g</span>
            </div>
            <div class="basis-1/3 flex flex-row justify-start gap-1">
                <span class="font-light">L</span>
                <span>{{foodTotals.totals.macros.lip ?? 0}}g</span>
            </div>
            <macros-bar class="absolute bottom-2" :macros="foodTotals.food.macros">
    
            </macros-bar>
        </div>
    </div>
</template>

<script setup lang="ts">

import type { FoodTotal } from '@/assets/interfaces';
import MacrosBar from '@/components/MacrosBar.vue'

const props = defineProps<{
    foodTotals: FoodTotal,
}>() 


</script>