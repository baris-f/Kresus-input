<template>
  <div class="greetings">
    <h1 class="black">{{ msg }}</h1>
    <h3>
      Swap below between wrapped and extended version of the inputs.
    </h3>
      <el-checkbox v-model="RightIcon" label="RightIcon"></el-checkbox>
      <el-checkbox v-model="LeftIcon" label="LeftIcon"></el-checkbox>
      <el-checkbox v-model="Label" label="Label"></el-checkbox>
      <el-checkbox v-model="Message" label="Message"></el-checkbox>
  </div>
</template>

<script setup lang="ts">
import {useStateStore} from "@/stores/state";
import {storeToRefs} from "pinia";
import {ref} from "vue";

defineProps<{
  msg: string
}>()
const store = useStateStore()

const {RightIcon, LeftIcon, Label, Message } = storeToRefs(store)


</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
