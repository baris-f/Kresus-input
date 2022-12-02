<template>
  <el-form-item >
    <el-input placeholder="Placeholder text" :prefix-icon="LeftIcon"
              v-model="input"
              @change="$emit('update-input', input)"
              :show-password="RightIcon"
    >
    </el-input>
  </el-form-item>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {ElIcon} from "element-plus";

const props = defineProps({
      input: String,
      RightIcon : Boolean,
      LeftIcon : ElIcon,
    }
)

const emits = defineEmits(
    ['update-input']
)

</script>

<style scoped>

/*input {
  width: 238px;
  height: 24px;

  !* MD Regular *!

  font-family: 'Lexend Deca', serif;
}

.el-input{
  'border-radius' : 0,
}

.el-input:focus {
  'box-shadow':  var(#4642F8);
  'focus-border-color': #4642F8;
}*/

</style>