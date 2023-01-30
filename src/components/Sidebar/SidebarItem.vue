<template>
    <div class="pl-8 w-full h-fit">
        <div class="h-10 flex items-center text-h10">
            <IconTooling class="h-icon w-icon"/>
            <span class="font-lato text-xl font-normal text-h11 pl-icon-title cursor-pointer transition-transform hover:scale-105"  @click="toogleOption()">
                {{ title }}
            </span>
        </div>
        <div class="w-full flex flex-col overflow-hidden">
            <div v-for="(subtitle, index) in subtitles" 
                :style="{ '--n': index }"
                :key="subtitle.name"  
                class="flex flex-row w-full transition-all duration-300 ease-out delay-transition" 
                :class="[closed ? 'h-0 opacity-0 mb-0' : 'h-5 opacity-100 last:mb-1']">
                <span class="font-nunito font-semibold text-sm pl-icon-subtitle text-h11 cursor-pointer transition-transform hover:scale-105 selection:font-bold" @click="sidebarStore.selectOption(subtitle.name)">
                    {{ subtitle.name }} 
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import IconTooling from '../icons/IconTooling.vue';
import { useSidebarStore } from '@/stores/sidebarStore';
import { ref } from 'vue';
import type { Subtitle } from '@/assets/interfaces'
    

const sidebarStore = useSidebarStore()

const props = defineProps({
  title: String,
  subtitles: {
    type: Array<Subtitle>,
    default: []
  }
})

const closed = ref(false);
const toogleOption = () => {
    closed.value = !closed.value
}


</script>

<style scoped>

.delay-transition {
    transition-delay: calc(var(--n)*75ms);
} 


</style>