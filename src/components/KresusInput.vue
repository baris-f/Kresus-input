<template>
  <el-input v-model="input" placeholder="Please input" :prefix-icon="Apple"
            v-if="isPassword"
            show-password
  >
  </el-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Apple, View, Edit } from '@element-plus/icons-vue'
const input = ref('')

const showPassword = ref("text");
console.log(showPassword)
console.log("val",showPassword.value)

const Message = ref(true);
const isPassword = ref(true);
const Label = ref(true);
const LeftIcon = ref(true);
const RightIcon = ref(true);

function changePasswordState() {
  if (showPassword.value == "text") showPassword.value = "password"
  else showPassword.value = "text"
  console.log("okay")
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');

.el-input {
  width: 238px;
  height: 24px;

  /* MD Regular */

  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */


  /* Text/Placeholder */

  color: #A1A1A1;


  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 1;
}
</style>