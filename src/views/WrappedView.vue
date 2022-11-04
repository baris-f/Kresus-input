<template>
  <div class="about">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
    >
      <kresus-input :input="ruleForm.name"
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
import KresusInput from "@/components/KresusInputWrapped.vue";

import {reactive, ref} from "vue";
import type { FormInstance, FormRules } from 'element-plus'
import {useStateStore} from "@/stores/state";

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: 'tmp'
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ]})

const store = useStateStore()

</script>
