<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ count }}</h1>
    <button @click="handleClick">点我+1</button>
    <h1>{{ count1 }}</h1>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";

let count = ref(0);
function handleClick() {
  count.value++;
}
let count1 = computed(() => {
  return count.value + "0";
});
</script>
