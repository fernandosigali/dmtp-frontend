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
    name: string,
    quantity: number,
    caloriesPerHundred: number,
    macros: MacronutrientsQuantity
}

export interface FoodTotal {
    food: Food,
    totals: {
        calories: number,
        macros: MacronutrientsQuantity
    }
}

export interface Meal extends Array<Food>{}

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