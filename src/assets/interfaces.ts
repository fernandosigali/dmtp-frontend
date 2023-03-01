export interface Subtitle {
    name: string,
    routerLink: string
}

export interface MacronutrientsQuantity {
    cho: number,
    ptn: number,
    lip: number,
}

export interface Food {
    id: number,
    name: string,
    caloriesPerHundred: number,
    macros: MacronutrientsQuantity
}

export interface FoodOnMeal { 
    food: Food, 
    quantity: number,
}

export interface FoodTotal {
    food: FoodOnMeal,
    totals: {
        calories: number,
        macros: MacronutrientsQuantity
    }
}

export interface Meal extends Array<FoodOnMeal> { }

export interface MealTotal {
    meal: Meal,
    foodsTotals: FoodTotal[],
    totals: {
        calories: number,
        quantity: number,
        macros: MacronutrientsQuantity,
    }
}

export interface DayTotal {
    calories: number,
    quantity: number,
    macros: MacronutrientsQuantity,
}