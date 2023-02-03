<template>
<div class="px-24 w-full h-fit">
    <clipped-tag 
        :width="200" 
        :height="40" 
        xDirection="'right'" 
        yDirection="'up'" 
        class="rounded-t-sm flex justify-start items-center"
    >
        <span class="font-lato font-normal text-xl px-6">
            Almoço
        </span>
    </clipped-tag>
    <div class="w-full h-fit bg-h-3 flex flex-col rounded-r-sm rounded-bl-sm shadow-default">
        <v-food 
            v-for="food in foodsTotalsRef" 
            :foodTotals="food">
        </v-food>
        <v-meal-total :mealTotal="mealTotalRef"></v-meal-total>
    </div>
</div>
</template>

<script setup lang="ts">
import vFood from './vFood.vue';
import vMealTotal from './vMealTotal.vue';
import ClippedTag from '@/components/ClippedTag.vue';

import { ref } from 'vue';
import type { Ref } from 'vue'
import type { FoodTotal, MealTotal } from '@/assets/interfaces';

const props = defineProps<{
    mealTotal: MealTotal
}>()

const foodsTotalsRef: Ref<FoodTotal[]> = ref(props.mealTotal.foodsTotals)
const mealTotalRef: Ref<MealTotal> = ref(props.mealTotal)

</script>