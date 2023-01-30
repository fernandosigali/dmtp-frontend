<template>
    <div class="px-24 w-full h-fit">
        <div class="flex flex-row px-6 font-nunito font-normal text-base h-12 leading-[3] relative rounded bg-h-3">
            <span class="basis-2/5 grow font-semibold">Total diário</span>
            <span class="basis-1/5 shrink font-semibold">{{ dayTotal.quantity }}g</span>
            <span class="basis-1/5 shrink font-semibold">{{ dayTotal.calories }}kcal</span>
            <!-- <div class="basis-1/5 grow flex flex-row justify-between"> -->
            <div class="basis-1/5 grow flex flex-row gap-5 relative font-semibold">
                <div class="basis-1/3 flex flex-row justify-start gap-1">
                    <span class="font-light">C</span>  
                    <span>{{dayTotal.macros.cho ?? 0}}g</span>  
                </div>
                <div class="basis-1/3 flex flex-row justify-start gap-1">
                    <span class="font-light">P</span>
                    <span>{{dayTotal.macros.ptn ?? 0}}g</span>
                </div>
                <div class="basis-1/3 flex flex-row justify-start gap-1">
                    <span class="font-light">L</span>
                    <span>{{dayTotal.macros.lip ?? 0}}g</span>
                </div>
                <macros-bar class="absolute bottom-2" :macros="macrosRatio">
        
                </macros-bar>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import type { DayTotal } from '@/assets/interfaces';
import MacrosBar from '@/components/MacrosBar.vue'
import { computed } from 'vue';

const props = defineProps<{
    dayTotal: DayTotal,
}>() 

const macrosRatio = computed(() => {
    return {
        cho: props.dayTotal.macros.cho / props.dayTotal.quantity,
        ptn: props.dayTotal.macros.ptn / props.dayTotal.quantity,
        lip: props.dayTotal.macros.lip / props.dayTotal.quantity,
    }
})
console.log(props.dayTotal)
</script>