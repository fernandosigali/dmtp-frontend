<template>
    <div class="relative grow bg-g0 pt-10">
        <clipped-tag :height="40" :width="120" :XDirection="'right'" :YDirection="'down'" class="absolute top-0 left-0">
            <div class="w-full h-full flex justify-center items-center">
                <Transition mode="out-in" name="fade-in">
                    <span class="font-nunito text-sm font-bold" :key="sidebarStore.currentOption">
                        {{sidebarStore.currentOption}}
                    </span>
                </Transition>
            </div>
        </clipped-tag>
        <clipped-tag :height="40" :width="160" :XDirection="'left'" :YDirection="'down'" class="absolute top-0 right-0">
            <div class="w-full h-full flex justify-center items-center">
                <span class="font-nunito text-sm font-bold">
                    FERNANDO
                </span>
            </div>
        </clipped-tag>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">

import { useSidebarStore } from '@/stores/sidebarStore';
import ClippedTag from '@/components/ClippedTag.vue';

const sidebarStore = useSidebarStore()

</script>
<style scoped>
.fade-in-enter-active {
  transition: opacity 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.fade-in-leave-active {
  transition: opacity 225ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}
</style>