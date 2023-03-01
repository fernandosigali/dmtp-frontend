<template>
    <div class="flex flex-row gap-5 relative font-nunito">
        <div class="basis-1/3 flex flex-row justify-start gap-1">
            <span class="font-light">C</span>  
            <span>{{totalMacros?.cho.toFixed(0) ?? 0}}g</span>  
        </div>
        <div class="basis-1/3 flex flex-row justify-start gap-1">
            <span class="font-light">P</span>
            <span>{{totalMacros?.ptn.toFixed(0) ?? 0}}g</span>
        </div>
        <div class="basis-1/3 flex flex-row justify-start gap-1">
            <span class="font-light">L</span>
            <span>{{totalMacros?.lip.toFixed(0) ?? 0}}g</span>
        </div>
        <macros-bar class="absolute bottom-2" :macros="proportionalMacros">

        </macros-bar>
    </div>
</template>

<script setup lang="ts">


import type { MacronutrientsQuantity } from '@/assets/interfaces';
import MacrosBar from '@/components/MacrosBar.vue' 

const props = defineProps<{
    totalMacros?: MacronutrientsQuantity, 
    proportionalMacros?: MacronutrientsQuantity
}>()

</script>