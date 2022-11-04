import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStateStore = defineStore('state', () => {
  const Message = ref(true);
  const isPassword = ref(true);
  const Label = ref(true);
  const LeftIcon = ref(true);
  const RightIcon = ref(true);

  return { Message, isPassword, Label, LeftIcon, RightIcon}
})
