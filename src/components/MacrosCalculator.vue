<template>
    <div class="w-full bg-gradient-to-b from-h-5 to-h-4 rounded-sm px-8 py-4 shadow-default">
        <div class="w-full flex gap-28 justify-center font-nunito text-base font-semibold text-h10">
            <v-styled-radio-button group-name="macros-radio-group" label="Proporção" inputId="RAT"
                @selected="changeMacroSelected('RAT')"></v-styled-radio-button>
            <v-styled-radio-button group-name="macros-radio-group" label="Quantidade" inputId="QTT"
                @selected="changeMacroSelected('QTT')"></v-styled-radio-button>
            <v-styled-radio-button group-name="macros-radio-group" label="Quantidade por quilo" inputId="QPK"
                @selected="changeMacroSelected('QPK')"></v-styled-radio-button>
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
            <div class="col-start-1 row-start-3 self-center justify-self-end pr-4">Proporção(%)</div>
            <div class="col-start-2 row-start-3 bg-h-2"></div>
            <div class="col-start-3 row-start-3 transition-colors duration-500"
                :class="{ 'bg-h-3.5': macroSelectedRef == 'RAT' }">
                <input class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
                    :value="ratChoRef"
                    @input="ratChoRef = ($event.target as HTMLInputElement)?.value; addNewValue('cho')"
                    :disabled="macroSelectedRef != 'RAT'"
                >            
            </div>
            <div class="col-start-4 row-start-3 bg-h-2"></div>
            <div class="col-start-5 row-start-3 transition-colors duration-500"
                :class="{ 'bg-h-3.5': macroSelectedRef == 'RAT' }">
                <input class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
                    :value="ratPtnRef"
                    @input=" ratPtnRef = ($event.target as HTMLInputElement)?.value; addNewValue('ptn') "
                    :disabled="macroSelectedRef != 'RAT'"
                >                        
            </div>
            <div class="col-start-6 row-start-3 bg-h-2"></div>
            <div class="col-start-7 row-start-3 transition-colors duration-500"
                :class="{ 'bg-h-3.5': macroSelectedRef == 'RAT' }">
                <input class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
                    :value="ratLipRef"
                    @input=" ratLipRef = ($event.target as HTMLInputElement)?.value; addNewValue('lip') "
                    :disabled="macroSelectedRef != 'RAT'"
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
            <div class="col-start-1 row-start-5 self-center justify-self-end pr-4">Quantidade(g)</div>
            <div class="col-start-2 row-start-5 bg-h-2"></div>
            <div class="col-start-3 row-start-5 transition-colors duration-500"
                :class="{ 'bg-h-3.5': macroSelectedRef == 'QTT' }">
                <input class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
                    :value="qqtChoRef"
                    @input=" qqtChoRef = ($event.target as HTMLInputElement)?.value; addNewValue('cho') "
                    :disabled="macroSelectedRef != 'QTT'"
                >            
            </div>
            <div class="col-start-4 row-start-5 bg-h-2"></div>
            <div class="col-start-5 row-start-5 transition-colors duration-500"
                :class="{ 'bg-h-3.5': macroSelectedRef == 'QTT' }">
                <input class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
                    :value="qqtPtnRef"
                    @input=" qqtPtnRef = ($event.target as HTMLInputElement)?.value; addNewValue('ptn') "
                    :disabled="macroSelectedRef != 'QTT'"
                    >
            </div>
            <div class="col-start-6 row-start-5 bg-h-2"></div>
            <div class="col-start-7 row-start-5 transition-colors duration-500"
                :class="{ 'bg-h-3.5': macroSelectedRef == 'QTT' }">
                <input class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
                    :value="qqtLipRef"
                    @input=" qqtLipRef = ($event.target as HTMLInputElement)?.value; addNewValue('lip') "
                    :disabled="macroSelectedRef != 'QTT'"
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
            <div class="col-start-1 row-start-7 self-center justify-self-end pr-4">Quantidade por quilograma(g/kg)</div>
            <div class="col-start-2 row-start-7 bg-h-2"></div>
            <div class="col-start-3 row-start-7 transition-colors duration-500"
                :class="{ 'bg-h-3.5': macroSelectedRef == 'QPK' }">
                <input class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
                    :value="qpkChoRef"
                    @input=" qpkChoRef = ($event.target as HTMLInputElement)?.value; addNewValue('cho') "
                    :disabled="macroSelectedRef != 'QPK'"
                >
            </div>
            <div class="col-start-4 row-start-7 bg-h-2"></div>
            <div class="col-start-5 row-start-7 transition-colors duration-500"
                :class="{ 'bg-h-3.5': macroSelectedRef == 'QPK' }">
                <input class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
                    :value="qpkPtnRef"
                    @input=" qpkPtnRef = ($event.target as HTMLInputElement)?.value; addNewValue('ptn') "
                    :disabled="macroSelectedRef != 'QPK'"
                >
            </div>
            <div class="col-start-6 row-start-7 bg-h-2"></div>
            <div class="col-start-7 row-start-7 transition-colors duration-500"
                :class="{ 'bg-h-3.5': macroSelectedRef == 'QPK' }">
                <input class="w-full h-full text-center bg-transparent caret-h6 focus:border-none focus:outline-none"
                    :value="qpkLipRef"
                    @input=" qpkLipRef = ($event.target as HTMLInputElement)?.value; addNewValue('lip') "
                    :disabled="macroSelectedRef != 'QPK'"
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
import { ref, type Ref } from 'vue';
import VStyledRadioButton from './vStyledRadioButton.vue';

const macroSelectedRef = ref('')

const ratChoRef = ref('')
const ratPtnRef = ref('')
const ratLipRef = ref('')
const qqtChoRef = ref('')
const qqtPtnRef = ref('')
const qqtLipRef = ref('')
const qpkChoRef = ref('')
const qpkPtnRef = ref('')
const qpkLipRef = ref('')

let lastUpdates: Set<string> = new Set()

const changeMacroSelected = (macroSelected: string) => {
    macroSelectedRef.value = macroSelected
    console.log(macroSelectedRef.value)
}

const addNewValue = (macro: string) => {
    console.log(macro)
}

const emitFirstInput = () => {
    qqtPtnRef.value = 'oi'
}

const emitSecondInput = () => {
    console.log('emiting')
}

</script>

<style scoped>

</style>