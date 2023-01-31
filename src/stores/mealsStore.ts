import type { Meal, MealTotal, FoodTotal, FoodOnMeal, DayTotal } from '@/assets/interfaces';
import { defineStore } from 'pinia'

export const useMealsStore = defineStore({
    id: 'mealsStore',
    state: () => ({
        mealsTotals: [] as MealTotal[],
        dayTotal: {} as DayTotal 
    }),
    actions: {
        getFoodTotals(eachFood: FoodOnMeal) {
            const calories = eachFood.quantity * eachFood.food.caloriesPerHundred / 100;
            const macros = {
                cho: eachFood.quantity * eachFood.food.macros.cho,
                ptn: eachFood.quantity * eachFood.food.macros.ptn,
                lip: eachFood.quantity * eachFood.food.macros.lip,
            }
            return {
                food: eachFood,
                totals: {
                    calories,
                    macros
                }
            }
        },
        getMealTotal(foods: FoodTotal[], meal: Meal) {
            let macros = {
                cho: 0,
                ptn: 0,
                lip: 0
            }
            let calories = 0;
            let quantity = 0;
            return foods.reduce((acc, currFood) => {
                return {
                    meal: meal,
                    foodsTotals: foods,
                    totals: {
                        macros: {
                            cho: acc.totals.macros.cho + currFood.totals.macros.cho,
                            ptn: acc.totals.macros.ptn + currFood.totals.macros.ptn,
                            lip: acc.totals.macros.lip + currFood.totals.macros.lip,
                        },
                        calories: acc.totals.calories + currFood.totals.calories,
                        quantity: acc.totals.quantity + currFood.food.quantity
                    }
                }
            }, {
                totals: {
                    macros,
                    calories,
                    quantity,
                },
                meal,
                foodsTotals: foods
            }) as MealTotal
        },
        getDayTotals(meals: MealTotal[]) {
            let macros = {
                cho: 0,
                ptn: 0,
                lip: 0
            }
            let calories = 0;
            let quantity = 0;
            return meals.reduce((acc, currMeal) => {
                return {
                    macros: {
                        cho: acc.macros.cho + currMeal.totals.macros.cho,
                        ptn: acc.macros.ptn + currMeal.totals.macros.ptn,
                        lip: acc.macros.lip + currMeal.totals.macros.lip,
                    },
                    calories: acc.calories + currMeal.totals.calories,
                    quantity: acc.quantity + currMeal.totals.quantity
                }
            }, {
                macros,
                calories,
                quantity
            }) as DayTotal
        },
        setMeals(meals: Meal[]) {
            this.mealsTotals = meals.map((meal) => {
                const foodTotals = meal.map((eachFood) => {
                    return this.getFoodTotals(eachFood)
                })
                return this.getMealTotal(foodTotals, meal)
            })
            this.dayTotal = this.getDayTotals(this.mealsTotals) 
        }
    }
})

