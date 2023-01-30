<template>
    <div class="w-full h-full flex flex-col gap-8 py-16 bg-g0">
        <v-meal 
            v-for="meal in mealsTotals" 
            :mealTotal="meal">
        </v-meal>
        <v-day-total :dayTotal="dayTotal">

        </v-day-total>
    </div>
</template>

<script setup lang="ts">
import type { Meal, MealTotal, Food, DayTotal } from '@/assets/interfaces';
import vMeal from '@/components/vMeal.vue';
import vDayTotal from '@/components/vDayTotal.vue';
import { ref } from 'vue';
import type { Ref } from 'vue'
import { useMealsStore } from '@/stores/mealsStore';

const mealsStore = useMealsStore()

const singleFood: Food = {
    name: 'Food 1',
    quantity: 150,
    caloriesPerHundred: 200,
    macros: {
        cho: 0.4,
        ptn: 0.2,
        lip: 0.1
    }
}

const foods = [
    singleFood,
    singleFood,
    singleFood,
];

const meals: Meal[] = [
    foods,
    foods
]

mealsStore.setMeals(meals)
const mealsTotals: Ref<MealTotal[]> = ref(mealsStore.mealsTotals)
const dayTotal: Ref<DayTotal> = ref(mealsStore.dayTotal)

</script>
