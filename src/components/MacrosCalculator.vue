<template>
    <div class="w-full bg-gradient-to-b from-h-5 to-h-4 rounded-sm px-8 py-4 shadow-default">
        <div class="w-full flex gap-28 justify-center font-nunito text-base font-semibold text-h10">
            <v-styled-radio-button 
                group-name="macros-radio-group"
                label="Carboidratos"
                inputId="CHO"
                @selected="changeMacroSelected('CHO')"
            ></v-styled-radio-button>
            <v-styled-radio-button 
                group-name="macros-radio-group"
                label="Proteínas"
                inputId="PTN"
                @selected="changeMacroSelected('PTN')"
            ></v-styled-radio-button>
            <v-styled-radio-button 
                group-name="macros-radio-group"
                label="Lipídios"
                inputId="LIP"
                @selected="changeMacroSelected('LIP')"
            ></v-styled-radio-button>
        </div>
        <div class="grid grid-cols-table grid-rows-table font-nunito text-base font-semibold text-h10 py-8">
            <div class="col-start-1 row-start-1"></div>
            <div class="col-start-2 row-start-1 bg-h-2 self-end h-8"></div>
            <div class="col-start-3 row-start-1 self-end justify-self-center pb-2">Carboidratos</div>
            <div class="col-start-4 row-start-1 bg-h-2 self-end h-8"></div>
            <div class="col-start-5 row-start-1 self-end justify-self-center pb-2">Proteínas</div>
            <div class="col-start-6 row-start-1 bg-h-2 self-end h-8"></div>
            <div class="col-start-7 row-start-1 self-end justify-self-center pb-2">Lipídios</div>
            <div class="col-start-1 row-start-2 bg-h-2 justify-self-end w-48"></div>
            <div class="col-start-2 row-start-2 bg-h-2"></div>
            <div class="col-start-3 row-start-2 bg-h-2"></div>
            <div class="col-start-4 row-start-2 bg-h-2"></div>
            <div class="col-start-5 row-start-2 bg-h-2"></div>
            <div class="col-start-6 row-start-2 bg-h-2"></div>
            <div class="col-start-7 row-start-2 bg-h-2"></div>
            <div class="col-start-1 row-start-3 self-center justify-self-end pr-4">Proporção(%)</div>
            <div class="col-start-2 row-start-3 bg-h-2"></div>
            <div 
                class="col-start-3 row-start-3 transition-colors duration-500"
                :class="{'bg-h-3.5': macroSelectedRef == 'CHO'}"
            ></div>
            <div class="col-start-4 row-start-3 bg-h-2"></div>
            <div 
                class="col-start-5 row-start-3 transition-colors duration-500"
                :class="{'bg-h-3.5': macroSelectedRef == 'CHO'}"
            ></div>
            <div class="col-start-6 row-start-3 bg-h-2"></div>
            <div 
                class="col-start-7 row-start-3 transition-colors duration-500"
                :class="{'bg-h-3.5': macroSelectedRef == 'CHO'}"
            ></div>
            <div class="col-start-1 row-start-4 bg-h-2 justify-self-end w-48"></div>
            <div class="col-start-2 row-start-4 bg-h-2"></div>
            <div class="col-start-3 row-start-4 bg-h-2"></div>
            <div class="col-start-4 row-start-4 bg-h-2"></div>
            <div class="col-start-5 row-start-4 bg-h-2"></div>
            <div class="col-start-6 row-start-4 bg-h-2"></div>
            <div class="col-start-7 row-start-4 bg-h-2"></div>
            <div class="col-start-1 row-start-5 self-center justify-self-end pr-4">Quantidade(g)</div>
            <div class="col-start-2 row-start-5 bg-h-2"></div>
            <div 
                class="col-start-3 row-start-5 transition-colors duration-500"
                :class="{'bg-h-3.5': macroSelectedRef == 'PTN'}"
            ></div>
            <div class="col-start-4 row-start-5 bg-h-2"></div>
            <div 
                class="col-start-5 row-start-5 transition-colors duration-500"
                :class="{'bg-h-3.5': macroSelectedRef == 'PTN'}"
            ></div>
            <div class="col-start-6 row-start-5 bg-h-2"></div>
            <div 
                class="col-start-7 row-start-5 transition-colors duration-500"
                :class="{'bg-h-3.5': macroSelectedRef == 'PTN'}"
            ></div>
            <div class="col-start-1 row-start-6 bg-h-2 justify-self-end w-48"></div>
            <div class="col-start-2 row-start-6 bg-h-2"></div>
            <div class="col-start-3 row-start-6 bg-h-2"></div>
            <div class="col-start-4 row-start-6 bg-h-2"></div>
            <div class="col-start-5 row-start-6 bg-h-2"></div>
            <div class="col-start-6 row-start-6 bg-h-2"></div>
            <div class="col-start-7 row-start-6 bg-h-2"></div>
            <div class="col-start-1 row-start-7 self-center justify-self-end pr-4">Quantidade por quilograma(g/kg)</div>
            <div class="col-start-2 row-start-7 bg-h-2"></div>
            <div 
                class="col-start-3 row-start-7 transition-colors duration-500"
                :class="{'bg-h-3.5': macroSelectedRef == 'LIP'}"
            >
                <input 
                    class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
                    :disabled="macroSelectedRef != 'LIP'"    
                >
            </div>
            <div class="col-start-4 row-start-7 bg-h-2"></div>
            <div 
                class="col-start-5 row-start-7 transition-colors duration-500"
                :class="{'bg-h-3.5': macroSelectedRef == 'LIP'}"
            ></div>
            <div class="col-start-6 row-start-7 bg-h-2"></div>
            <div 
                class="col-start-7 row-start-7 transition-colors duration-500"
                :class="{'bg-h-3.5': macroSelectedRef == 'LIP'}"
            ></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VStyledRadioButton from './vStyledRadioButton.vue';

const macroSelectedRef = ref('') 

const changeMacroSelected = (macroSelected: string) => {
    macroSelectedRef.value = macroSelected
    console.log(macroSelectedRef.value)
}

</script>

<style scoped>

</style>