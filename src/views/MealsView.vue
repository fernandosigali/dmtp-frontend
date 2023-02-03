<template>
    <div class="w-full h-full flex flex-col gap-8 py-16 bg-g0">
        <v-meal 
            v-for="meal in mealsTotals" 
            :mealTotal="meal">
        </v-meal>
        <v-day-total :dayTotal="dayTotal">

        </v-day-total>
        <v-plus-button>

        </v-plus-button>
    </div>
</template>

<script setup lang="ts">
import type { Meal, MealTotal, Food, DayTotal } from '@/assets/interfaces';
import vMeal from '@/components/vMeal.vue';
import vDayTotal from '@/components/vDayTotal.vue';
import vPlusButton from '@/components/vPlusButton.vue';
import { ref } from 'vue';
import type { Ref } from 'vue'
import { useMealsStore } from '@/stores/mealsStore';

const mealsStore = useMealsStore()

const food_1: Food = {
    id: 3,
    name: 'Food 1',
    caloriesPerHundred: 200,
    macros: {
        cho: 0.4,
        ptn: 0.2,
        lip: 0.1
    }
}

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

const food_3: Food = {
    id: 3,
    name: 'Food 3',
    caloriesPerHundred: 200,
    macros: {
        cho: 0.2,
        ptn: 0.2,
        lip: 0.2
    }
}


const foods = [
    { food: food_1, quantity: 150 },
    { food: food_2, quantity: 200 },
    { food: food_3, quantity: 60 },
];

const meals: Meal[] = [
    foods,
    foods
]

mealsStore.setMeals(meals)
const mealsTotals: Ref<MealTotal[]> = ref(mealsStore.mealsTotals)
const dayTotal: Ref<DayTotal> = ref(mealsStore.dayTotal)

</script>
