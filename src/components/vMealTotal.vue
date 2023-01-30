<template>
    <div class="flex flex-row px-6 font-nunito font-normal text-base h-12 leading-[3] relative">
        <span class="basis-2/5 grow"></span>
        <span class="basis-1/5 shrink font-semibold">{{ mealTotal.totals.quantity }}g</span>
        <span class="basis-1/5 shrink font-semibold">{{ mealTotal.totals.calories }}kcal</span>
        <!-- <div class="basis-1/5 grow flex flex-row justify-between"> -->
        <div class="basis-1/5 grow flex flex-row gap-5 relative font-semibold">
            <div class="basis-1/3 flex flex-row justify-start gap-1">
                <span class="font-light">C</span>  
                <span>{{mealTotal.totals.macros.cho ?? 0}}g</span>  
            </div>
            <div class="basis-1/3 flex flex-row justify-start gap-1">
                <span class="font-light">P</span>
                <span>{{mealTotal.totals.macros.ptn ?? 0}}g</span>
            </div>
            <div class="basis-1/3 flex flex-row justify-start gap-1">
                <span class="font-light">L</span>
                <span>{{mealTotal.totals.macros.lip ?? 0}}g</span>
            </div>
            <macros-bar class="absolute bottom-2" :macros="macrosRatio">
    
            </macros-bar>
        </div>
    </div>
</template>

<script setup lang="ts">

import type { MealTotal } from '@/assets/interfaces';
import MacrosBar from '@/components/MacrosBar.vue'
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