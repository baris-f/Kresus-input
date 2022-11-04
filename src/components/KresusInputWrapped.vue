<template>
  <el-form-item label="Activity name" prop="name">
    <el-input placeholder="Please input" :prefix-icon="Apple"
              v-model="input"
              v-if="true"
              show-password
    >
    </el-input>
  </el-form-item>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Apple } from '@element-plus/icons-vue'

const props = defineProps({
  input: ref
})

//const tmp = ref("")
console.log(props.input);


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');

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