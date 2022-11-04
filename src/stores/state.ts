import { ref } from 'vue'
import { defineStore } from 'pinia'
import {Apple} from "@element-plus/icons-vue";

export const useStateStore = defineStore('state', () => {
  const Message = ref(true);
  const Label = ref(true);
  const LeftIcon = ref(true);
  const RightIcon = ref(true);

  return { Message, Label, LeftIcon, RightIcon}
})
