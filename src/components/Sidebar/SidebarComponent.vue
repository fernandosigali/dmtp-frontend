<template>
    <div class="left-0 top-0 h-screen w-80 bg-gradient-to-l from-h-4 to-h-5">
        <div class="bg-g8 opacity-40 h-44 flex justify-center items-center">
            LOGO
        </div>
        <div class="py-5">
            <sidebar-item v-for="menuItem in menuItens" :title="menuItem.title" :subtitles="menuItem.subtitles" :icon-component="menuItem.iconComponent"></sidebar-item>
        </div>
    </div>
</template>

<script setup lang="ts">

import SidebarItem from './SidebarItem.vue';
import WeightIcon from '../icons/WeightIcon.vue';
import MealIcon from '../icons/MealIcon.vue';
import { markRaw, reactive } from 'vue';

const mealIcon = markRaw(MealIcon);
const weightIcon = markRaw(WeightIcon);

const menuItens = reactive([
    {
        title: "Dieta",
        iconComponent: mealIcon,
        subtitles: [
            {
                name: 'Refeições',
                routerLink: 'meals'
            },
            {
                name: 'Macros',
                routerLink: 'macros'
            },
        ] 
    },
    {
        title: "Musculação",
        iconComponent: weightIcon,
        subtitles: [
            {
                name: 'Treinos',
                routerLink: 'train'
            },
            {
                name: 'Periodização',
                routerLink: 'period'
            },
        ] 
    },
])

</script>