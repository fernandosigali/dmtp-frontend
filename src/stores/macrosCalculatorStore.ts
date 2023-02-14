import { defineStore } from 'pinia'

export const useMacrosCalculatorStore = defineStore({
  id: 'macrosCalculatorStore', 
  state: () => ({
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
      console.log(this.lastModifieds)
    },
    changeSelectedMode(modeSelected: string) {
      this.selectedMode = modeSelected;
    }
  }
})

