<template>
  <div class="about">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="fit-content"
    >
      <el-form-item :label="Label ? 'Label' : ''" prop="name">
        <kresus-input-extend v-model="ruleForm.name" placeholder="Placeholder text"
                             :prefixIcon="LeftIcon ? Apple : ''"
                             :show-password="RightIcon"
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
import { Apple } from '@element-plus/icons-vue'

import {reactive, ref} from "vue";
import type { FormInstance, FormRules } from 'element-plus'
import {useStateStore} from "@/stores/state";
import {storeToRefs} from "pinia";

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: ''
})

const rules = reactive<FormRules>({
  name: [
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ]})


const store = useStateStore()

const {RightIcon, LeftIcon, Label, Message } = storeToRefs(store)

</script>
