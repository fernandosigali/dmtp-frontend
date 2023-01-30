import { defineStore } from 'pinia'

export const useSidebarStore = defineStore({
  id: 'sidebarStore', 
  state: () => ({
      currentOption: 'Treinos'
  }),
  actions: {
    selectOption(newOption: string) {
      this.currentOption = newOption
    }
  }
})

