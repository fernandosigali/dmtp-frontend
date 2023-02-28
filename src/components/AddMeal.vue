<template>
    <div class="rounded-md flex flex-row items-center justify-center px-4 bg-gradient-to-b from-h-3.5 to-h-2.5"> 
        <div class="w-3/12">
            <v-input-select class="w-full">
                
            </v-input-select>
            <v-input-select class="w-full">

            </v-input-select>
            <div>
                1200kcal
            </div>
            <div>
                <macros-bar :macros="macros">

                </macros-bar>
            </div>
        </div>
        <div class="w-9/12 h-full">

        </div>
    </div>
</template>
<script setup lang="ts">

import vInputSelect from '@/components/vInputSelect.vue'
import MacrosBar from './MacrosBar.vue';
import { ref } from 'vue';

const macros = ref({
    cho: 120,
    ptn: 120,
    lip: 120,
})

// TODO 
// When user fill quantity and food, calculate FoodTotal to show on the left panel. Is user adds it, add FoodTotal 
// to the Meal (array of FoodTotal) and recalculate MeaalTotals. 

</script>