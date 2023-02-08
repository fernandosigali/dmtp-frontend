<template>

<div class="h-full w-full grid grid-cols-12 grid-rows-6 gap-5">
    <card 
        title="Peso (kg)" 
        class="col-start-4 col-span-3 row-start-2 place-self-start"
        value="kg"
    ></card>
    <card 
        title="Calorias (kcal)" 
        class="col-start-7 col-span-3 row-start-2 place-self-end self-start"
        value="cal"    
    ></card>

    <macros-calculator 
        class="col-start-2 col-span-10 row-start-3 row-span-3 place-self-start"
    ></macros-calculator>
</div>


</template>

<script setup lang="ts">
import Card from '@/components/Card.vue';
import MacrosCalculator from '@/components/MacrosCalculator.vue';


</script>