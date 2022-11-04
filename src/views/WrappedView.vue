<template>
  <div class="about">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="fit-content"
    >
      <kresus-input v-model="ruleForm.name"
                    label="Label"
                    :RightIcon="false"
                    :LeftIcon="Apple"
                    :Message="false"
                    @update-input="updateInput"
>
      </kresus-input>
    </el-form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script lang="ts" setup>
import { Apple } from '@element-plus/icons-vue'
import KresusInput from "@/components/KresusInputWrapped.vue";

import {reactive, ref} from "vue";
import type { FormInstance, FormRules } from 'element-plus'
import {useStateStore} from "@/stores/state";

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: ''
})

const rules = reactive<FormRules>({
  name: [
    { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' },
  ]})

function updateInput(newValue : string) {
  ruleForm.name = newValue;
}


const store = useStateStore()

</script>
