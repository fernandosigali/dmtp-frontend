<template>
    <div class="rounded-md flex flex-row items-center justify-center px-8 py-16 bg-gradient-to-b from-h-3.5 to-h-2.5"> 
        <div class="w-3/12 flex flex-col justify-center items-center gap-2">
            <v-input-select class="w-full">
                
            </v-input-select>
            <v-input-select 
                title="Quantidade"
                class="w-full"
                v-model="quantity"
            >

            </v-input-select>
            <div 
                class="text-2xl pt-4 font-nunito"
                :class="{'invisible': !quantity }">
                1200kcal
            </div>
            <div 
                class="w-full"
                :class="{'invisible': !quantity }">
                <food-macro-nutrients class="h-12 text-xl mb-8"
                    :totalMacros="foodTotal?.totals.macros"
                    :proportionalMacros="foodTotal?.food.food.macros">
                </food-macro-nutrients>
            </div>
            <v-primary-button
                class="w-fit m-auto"
                title="ADICIONAR">
            </v-primary-button>
        </div>
        <div class="w-9/12 h-full">

        </div>
    </div>
</template>
<script setup lang="ts">

import type { Food, FoodTotal } from '@/assets/interfaces';
import vInputSelect from '@/components/vInputSelect.vue';
import vPrimaryButton from '@/components/vPrimaryButton.vue';
import { isInt } from '@/utils/Helpers';
import { useMealsStore } from '@/stores/mealsStore';
import { ref, watch } from 'vue';
import FoodMacroNutrients from './FoodMacroNutrients.vue';


const quantity = ref()
const foodTotal = ref<FoodTotal>()

const mealsStore = useMealsStore()

const food_2: Food = {
    id: 2,
    name: 'Food 2',
    caloriesPerHundred: 200,
    macros: {
        cho: 0.1,
        ptn: 0.5,
        lip: 0.1
    }
}

watch(quantity, (newQuantity) => {
    console.log(newQuantity)
    if (isInt(quantity.value)) {
        console.log('isInt')
        foodTotal.value = mealsStore.getFoodTotals({
            food: food_2,
            quantity: quantity.value,
        })
    }
})

// TODO 
// When user fill quantity and food, calculate FoodTotal to show on the left panel. Is user adds it, add FoodTotal 
// to the Meal (array of FoodTotal) and recalculate MeaalTotals. 

</script>