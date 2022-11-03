<template>
  <div class="about">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
    >

      <el-form-item label="Activity name" prop="name">
        <kresus-input-extend v-model="ruleForm.name" placeholder="Please input"
                             show-password
          ></kresus-input-extend>
      </el-form-item>
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
import KresusInputExtend from "../components/KresusInputExtend.vue";

import {reactive, ref} from "vue";
import type { FormInstance, FormRules } from 'element-plus'

const input = ref("");

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: ''
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ]})
</script>
