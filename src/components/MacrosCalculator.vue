<template>
    <div class="w-full h-full bg-gradient-to-b from-h-4 to-h-3 rounded-md px-8 py-8 shadow-default">
        <div class="w-full flex gap-28 justify-center font-nunito text-base font-semibold text-h10">
            <v-styled-radio-button group-name="macros-radio-group" label="Proporção" inputId="ratio"
                @selected="changeMacroSelected('ratio')"></v-styled-radio-button>
            <v-styled-radio-button group-name="macros-radio-group" label="Quantidade" inputId="quantity"
                @selected="changeMacroSelected('quantity')"></v-styled-radio-button>
            <v-styled-radio-button group-name="macros-radio-group" label="Quantidade por quilo" inputId="quantityPerKilogram"
                @selected="changeMacroSelected('quantityPerKilogram')"></v-styled-radio-button>
        </div>
        <div class="grid grid-cols-table grid-rows-table font-nunito text-base font-semibold text-h10 py-8">

            <!-- Row 1 -->
            <div class="col-start-1 row-start-1"></div>
            <div class="col-start-2 row-start-1 bg-h-2 self-end h-8"></div>
            <div class="col-start-3 row-start-1 self-end justify-self-center pb-2">Carboidratos</div>
            <div class="col-start-4 row-start-1 bg-h-2 self-end h-8"></div>
            <div class="col-start-5 row-start-1 self-end justify-self-center pb-2">Proteínas</div>
            <div class="col-start-6 row-start-1 bg-h-2 self-end h-8"></div>
            <div class="col-start-7 row-start-1 self-end justify-self-center pb-2">Lipídios</div>
            <div class="col-start-8 row-start-1 bg-h-2 self-end h-8"></div>
            <div class="col-start-9 row-start-1"></div>

            <!-- Row 2 -->
            <div class="col-start-1 row-start-2 bg-h-2 justify-self-end w-48"></div>
            <div class="col-start-2 row-start-2 bg-h-2"></div>
            <div class="col-start-3 row-start-2 bg-h-2"></div>
            <div class="col-start-4 row-start-2 bg-h-2"></div>
            <div class="col-start-5 row-start-2 bg-h-2"></div>
            <div class="col-start-6 row-start-2 bg-h-2"></div>
            <div class="col-start-7 row-start-2 bg-h-2"></div>
            <div class="col-start-8 row-start-2 bg-h-2"></div>
            <div class="col-start-9 row-start-2 bg-h-2 justify-self-start w-8"></div>

            <!-- Row 3 -->
            <div class="col-start-1 row-start-3 self-center justify-self-end pr-4">Proporção (%)</div>
            <div class="col-start-2 row-start-3 bg-h-2"></div>
            <div class="col-start-3 row-start-3 transition-colors duration-500"
                :class="{ 'bg-h-2.5': macrosCalculatorStore.selectedMode == 'ratio' }">
                <input class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
                    :value="macrosCalculatorStore.ratioCho"
                    @input="macrosCalculatorStore.ratioCho = ($event.target as HTMLInputElement)?.value; updateLastModifieds('cho')"
                    :disabled="macrosCalculatorStore.selectedMode != 'ratio'"
                >            
            </div>
            <div class="col-start-4 row-start-3 bg-h-2"></div>
            <div class="col-start-5 row-start-3 transition-colors duration-500"
                :class="{ 'bg-h-2.5': macrosCalculatorStore.selectedMode == 'ratio' }">
                <input class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
                    :value="macrosCalculatorStore.ratioPtn"
                    @input=" macrosCalculatorStore.ratioPtn = ($event.target as HTMLInputElement)?.value; updateLastModifieds('ptn') "
                    :disabled="macrosCalculatorStore.selectedMode != 'ratio'"
                >                        
            </div>
            <div class="col-start-6 row-start-3 bg-h-2"></div>
            <div class="col-start-7 row-start-3 transition-colors duration-500"
                :class="{ 'bg-h-2.5': macrosCalculatorStore.selectedMode == 'ratio' }">
                <input class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
                    :value="macrosCalculatorStore.ratioLip"
                    @input=" macrosCalculatorStore.ratioLip = ($event.target as HTMLInputElement)?.value; updateLastModifieds('lip') "
                    :disabled="macrosCalculatorStore.selectedMode != 'ratio'"
                >
            </div>
            <div class="col-start-8 row-start-3 bg-h-2"></div>
            <div class="col-start-9 row-start-3"></div>

            <!-- Row 4 -->
            <div class="col-start-1 row-start-4 bg-h-2 justify-self-end w-48"></div>
            <div class="col-start-2 row-start-4 bg-h-2"></div>
            <div class="col-start-3 row-start-4 bg-h-2"></div>
            <div class="col-start-4 row-start-4 bg-h-2"></div>
            <div class="col-start-5 row-start-4 bg-h-2"></div>
            <div class="col-start-6 row-start-4 bg-h-2"></div>
            <div class="col-start-7 row-start-4 bg-h-2"></div>
            <div class="col-start-8 row-start-4 bg-h-2"></div>
            <div class="col-start-9 row-start-4 bg-h-2 justify-self-start w-8"></div>

            <!-- Row 5 -->
            <div class="col-start-1 row-start-5 self-center justify-self-end pr-4">Quantidade (g)</div>
            <div class="col-start-2 row-start-5 bg-h-2"></div>
            <div class="col-start-3 row-start-5 transition-colors duration-500"
                :class="{ 'bg-h-2.5': macrosCalculatorStore.selectedMode == 'quantity' }">
                <input class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
                    :value="macrosCalculatorStore.quantityCho"
                    @input=" macrosCalculatorStore.quantityCho = ($event.target as HTMLInputElement)?.value; updateLastModifieds('cho') "
                    :disabled="macrosCalculatorStore.selectedMode != 'quantity'"
                >            
            </div>
            <div class="col-start-4 row-start-5 bg-h-2"></div>
            <div class="col-start-5 row-start-5 transition-colors duration-500"
                :class="{ 'bg-h-2.5': macrosCalculatorStore.selectedMode == 'quantity' }">
                <input class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
                    :value="macrosCalculatorStore.quantityPtn"
                    @input=" macrosCalculatorStore.quantityPtn = ($event.target as HTMLInputElement)?.value; updateLastModifieds('ptn') "
                    :disabled="macrosCalculatorStore.selectedMode != 'quantity'"
                    >
            </div>
            <div class="col-start-6 row-start-5 bg-h-2"></div>
            <div class="col-start-7 row-start-5 transition-colors duration-500"
                :class="{ 'bg-h-2.5': macrosCalculatorStore.selectedMode == 'quantity' }">
                <input class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
                    :value="macrosCalculatorStore.quantityLip"
                    @input=" macrosCalculatorStore.quantityLip = ($event.target as HTMLInputElement)?.value; updateLastModifieds('lip') "
                    :disabled="macrosCalculatorStore.selectedMode != 'quantity'"
                >
            </div>
            <div class="col-start-8 row-start-5 bg-h-2"></div>
            <div class="col-start-9 row-start-5"></div>

            <!-- Row 6 -->
            <div class="col-start-1 row-start-6 bg-h-2 justify-self-end w-48"></div>
            <div class="col-start-2 row-start-6 bg-h-2"></div>
            <div class="col-start-3 row-start-6 bg-h-2"></div>
            <div class="col-start-4 row-start-6 bg-h-2"></div>
            <div class="col-start-5 row-start-6 bg-h-2"></div>
            <div class="col-start-6 row-start-6 bg-h-2"></div>
            <div class="col-start-7 row-start-6 bg-h-2"></div>
            <div class="col-start-8 row-start-6 bg-h-2"></div>
            <div class="col-start-9 row-start-6 bg-h-2 justify-self-start w-8"></div>

            <!-- Row 7  -->
            <div class="col-start-1 row-start-7 self-center justify-self-end pr-4">Quantidade por quilograma (g/kg)</div>
            <div class="col-start-2 row-start-7 bg-h-2"></div>
            <div class="col-start-3 row-start-7 transition-colors duration-500"
                :class="{ 'bg-h-2.5': macrosCalculatorStore.selectedMode == 'quantityPerKilogram' }">
                <input class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
                    :value="macrosCalculatorStore.quantityPerKiloCho"
                    @input=" macrosCalculatorStore.quantityPerKiloCho = ($event.target as HTMLInputElement)?.value; updateLastModifieds('cho') "
                    :disabled="macrosCalculatorStore.selectedMode != 'quantityPerKilogram'"
                >
            </div>
            <div class="col-start-4 row-start-7 bg-h-2"></div>
            <div class="col-start-5 row-start-7 transition-colors duration-500"
                :class="{ 'bg-h-2.5': macrosCalculatorStore.selectedMode == 'quantityPerKilogram' }">
                <input class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
                    :value="macrosCalculatorStore.quantityPerKiloPtn"
                    @input=" macrosCalculatorStore.quantityPerKiloPtn = ($event.target as HTMLInputElement)?.value; updateLastModifieds('ptn') "
                    :disabled="macrosCalculatorStore.selectedMode != 'quantityPerKilogram'"
                >
            </div>
            <div class="col-start-6 row-start-7 bg-h-2"></div>
            <div class="col-start-7 row-start-7 transition-colors duration-500"
                :class="{ 'bg-h-2.5': macrosCalculatorStore.selectedMode == 'quantityPerKilogram' }">
                <input class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
                    :value="macrosCalculatorStore.quantityPerKiloLip"
                    @input=" macrosCalculatorStore.quantityPerKiloLip = ($event.target as HTMLInputElement)?.value; updateLastModifieds('lip') "
                    :disabled="macrosCalculatorStore.selectedMode != 'quantityPerKilogram'"
                >
            </div>
            <div class="col-start-8 row-start-7 bg-h-2"></div>
            <div class="col-start-9 row-start-7"></div>

            <!-- Row 8 -->
            <div class="col-start-1 row-start-8 bg-h-2 justify-self-end w-48"></div>
            <div class="col-start-2 row-start-8 bg-h-2"></div>
            <div class="col-start-3 row-start-8 bg-h-2"></div>
            <div class="col-start-4 row-start-8 bg-h-2"></div>
            <div class="col-start-5 row-start-8 bg-h-2"></div>
            <div class="col-start-6 row-start-8 bg-h-2"></div>
            <div class="col-start-7 row-start-8 bg-h-2"></div>
            <div class="col-start-8 row-start-8 bg-h-2"></div>
            <div class="col-start-9 row-start-8 bg-h-2 justify-self-start w-8"></div>

            <!-- Row 9 -->
            <div class="col-start-1 row-start-9"></div>
            <div class="col-start-2 row-start-9 bg-h-2 self-start h-8"></div>
            <div class="col-start-3 row-start-9 self-end"></div>
            <div class="col-start-4 row-start-9 bg-h-2 self-start h-8"></div>
            <div class="col-start-5 row-start-9 self-end"></div>
            <div class="col-start-6 row-start-9 bg-h-2 self-start h-8"></div>
            <div class="col-start-7 row-start-9 self-end"></div>
            <div class="col-start-8 row-start-9 bg-h-2 self-start h-8"></div>
            <div class="col-start-9 row-start-9"></div>
        </div>
    </div>
</template>

<script setup lang="ts">

import VStyledRadioButton from './vStyledRadioButton.vue';
import { useMacrosCalculatorStore } from '@/stores/macrosCalculatorStore';

const macrosCalculatorStore = useMacrosCalculatorStore()


const updateLastModifieds = (updatedProperty: string) => {
    macrosCalculatorStore.updateLastModifieds(updatedProperty)
}

const changeMacroSelected = (newSelectedMode: string) => {
    macrosCalculatorStore.changeSelectedMode(newSelectedMode)
}

</script>

<style scoped>

</style>