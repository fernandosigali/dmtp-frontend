<template>
    <div class="left-0 top-0 h-screen w-80 bg-gradient-to-l from-h-4 to-h-5">
        <div class="bg-g8 opacity-40 h-44 flex justify-center items-center">
            LOGO
        </div>
        <div class="py-5">
            <sidebar-item v-for="menuItem in menuItens" :title="menuItem.title" :subtitles="menuItem.subtitles"></sidebar-item>
        </div>
    </div>
</template>

<script setup lang="ts">

import SidebarItem from './SidebarItem.vue';
import { reactive } from 'vue';

const menuItens = reactive([
    {
        title: "Dieta",
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