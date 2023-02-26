import { defineStore } from 'pinia'

export const useMacrosCalculatorStore = defineStore({
  id: 'macrosCalculatorStore', 
  state: () => ({
    choCalories: 4,
    ptnCalories: 4,
    lipCalories: 9,
    ratioCho: '',
    ratioPtn: '',
    ratioLip: '',
    quantityCho: '',
    quantityPtn: '',
    quantityLip: '',
    quantityPerKiloCho: '', 
    quantityPerKiloPtn: '',
    quantityPerKiloLip: '',
    weight: '',
    calories: '',
    lastModifieds: [] as Array<string>,
    selectedMode: '',
  }),
  actions: {
    updateLastModifieds(updatedProperty: string) {
      const ind = this.lastModifieds.indexOf(updatedProperty); 
      if (ind !== -1) {
          this.lastModifieds.splice(ind, 1)
      }
      this.lastModifieds.unshift(updatedProperty)
  
      if (this.lastModifieds.length > 2) {
        this.lastModifieds.pop()
      }

      if (this.lastModifieds.length == 2) {
        this.calculateMacros()
      }
      console.log(this.lastModifieds)
    },
    changeSelectedMode(modeSelected: string) {
      this.selectedMode = modeSelected;
    },
    updateWeight(weight: string) {
      this.weight = weight;
      this.calculateMacros()
    },
    updateCalories(calories: string) {
      this.calories = calories;
      this.calculateMacros()
    },
    calculateMacros() {

      console.log('calculate macros')
      if (!this.weight) {
        console.log('not weight')
        return 
      }

      // 

      if (this.selectedMode === 'ratio') { 
        if (this.lastModifieds.includes('cho') && this.lastModifieds.includes('ptn')) {
          this.ratioLip = (100 - parseFloat(this.ratioCho) - parseFloat(this.ratioPtn) || null)?.toFixed(2) ?? ''
        } else if (this.lastModifieds.includes('cho') && this.lastModifieds.includes('lip')) {
          this.ratioPtn = (100 - parseFloat(this.ratioCho) - parseFloat(this.ratioLip) || null)?.toFixed(2) ?? ''
        } else if (this.lastModifieds.includes('ptn') && this.lastModifieds.includes('lip')) {
          this.ratioCho = (100 - parseFloat(this.ratioLip) - parseFloat(this.ratioPtn) || null)?.toFixed(2) ?? ''
        }
        this.quantityCho = (parseFloat(this.calories)*parseFloat(this.ratioCho)/(100*this.choCalories) || null)?.toFixed(2) ?? ''
        this.quantityPtn = (parseFloat(this.calories)*parseFloat(this.ratioPtn)/(100*this.ptnCalories) || null)?.toFixed(2) ?? ''
        this.quantityLip = (parseFloat(this.calories)*parseFloat(this.ratioLip)/(100*this.lipCalories) || null)?.toFixed(2) ?? ''
        this.quantityPerKiloCho = (parseFloat(this.quantityCho)/parseFloat(this.weight) || null)?.toFixed(2) ?? ''
        this.quantityPerKiloPtn = (parseFloat(this.quantityPtn)/parseFloat(this.weight) || null)?.toFixed(2) ?? ''
        this.quantityPerKiloLip = (parseFloat(this.quantityLip)/parseFloat(this.weight) || null)?.toFixed(2) ?? ''
      } else if (this.selectedMode === 'quantity') {
        if (this.lastModifieds.includes('cho') && this.lastModifieds.includes('ptn')) {
          this.quantityLip = ((parseFloat(this.calories) - parseFloat(this.quantityCho)*this.choCalories - parseFloat(this.quantityPtn)*this.ptnCalories)/this.lipCalories || null)?.toFixed(2) ?? ''
        } else if (this.lastModifieds.includes('cho') && this.lastModifieds.includes('lip')) {
          this.quantityPtn = ((parseFloat(this.calories) - parseFloat(this.quantityCho)*this.choCalories - parseFloat(this.quantityLip)*this.lipCalories)/this.ptnCalories || null)?.toFixed(2) ?? ''
        } else if (this.lastModifieds.includes('ptn') && this.lastModifieds.includes('lip')) {
          this.quantityCho = ((parseFloat(this.calories) - parseFloat(this.quantityLip)*this.lipCalories - parseFloat(this.quantityPtn)*this.ptnCalories)/this.choCalories || null)?.toFixed(2) ?? ''
        }
        this.ratioLip = ((100*parseFloat(this.quantityLip)*this.lipCalories)/parseFloat(this.calories) || null)?.toFixed(2) ?? ''
        this.ratioPtn = ((100*parseFloat(this.quantityPtn)*this.ptnCalories)/parseFloat(this.calories) || null)?.toFixed(2) ?? ''
        this.ratioCho = ((100*parseFloat(this.quantityCho)*this.choCalories)/parseFloat(this.calories) || null)?.toFixed(2) ?? ''
        this.quantityPerKiloCho = (parseFloat(this.quantityCho)/parseFloat(this.weight) || null)?.toFixed(2) ?? ''
        this.quantityPerKiloPtn = (parseFloat(this.quantityPtn)/parseFloat(this.weight) || null)?.toFixed(2) ?? ''
        this.quantityPerKiloLip = (parseFloat(this.quantityLip)/parseFloat(this.weight) || null)?.toFixed(2) ?? ''
      } else if (this.selectedMode === 'quantityPerKilogram') {
        this.calories = (parseFloat(this.weight)*(parseFloat(this.quantityPerKiloCho)*this.choCalories + parseFloat(this.quantityPerKiloPtn)*this.ptnCalories + parseFloat(this.quantityPerKiloLip)*this.lipCalories) || null)?.toFixed(0) ?? ''
        this.quantityCho = (parseFloat(this.quantityPerKiloCho)*parseFloat(this.weight) || null)?.toFixed(2) ?? ''
        this.quantityPtn = (parseFloat(this.quantityPerKiloPtn)*parseFloat(this.weight) || null)?.toFixed(2) ?? ''
        this.quantityLip = (parseFloat(this.quantityPerKiloLip)*parseFloat(this.weight) || null)?.toFixed(2) ?? ''
        this.ratioLip = (100*(parseFloat(this.quantityLip)*this.lipCalories)/parseFloat(this.calories) || null)?.toFixed(2) ?? ''
        this.ratioPtn = (100*(parseFloat(this.quantityPtn)*this.ptnCalories)/parseFloat(this.calories) || null)?.toFixed(2) ?? ''
        this.ratioCho = (100*(parseFloat(this.quantityCho)*this.choCalories)/parseFloat(this.calories) || null)?.toFixed(2) ?? ''
      }
    }
  }
})

