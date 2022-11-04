<template>
  <el-form-item prop="name">
    <el-input placeholder="Please input" :prefix-icon="Apple"
              v-model="input"
              @change="$emit('update-input', input)"

              :show-password="false ? true : false"
    >
    </el-input>
  </el-form-item>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Apple } from '@element-plus/icons-vue'

/*const props = defineProps({
  input: ref
})*/

const props = defineProps({
      input: ref,

    }
)
const emits = defineEmits(
    ['update-input']
)

//const tmp = ref("")


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