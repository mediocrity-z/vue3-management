<template>
  <el-dropdown id="lang-dropdown" @command="handleCommand">
    <el-avatar :size="40" shape="square" :src="circleUrl" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh" :disabled="currentLang == 'zh'"
          >中文</el-dropdown-item
        >
        <el-dropdown-item command="en" :disabled="currentLang == 'en'"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

const circleUrl = ref(
  "https://img2.baidu.com/it/u=2385608517,1233926620&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666630800&t=a2cbdc8ce6c5fd551ac6ac258d535d48"
);

const i18n = useI18n();
const currentLang = computed(() => {
  return i18n.locale.value;
});

const store = useStore();
const handleCommand = (command) => {
  i18n.locale.value = command;
  store.commit("app/changeLang", command);
};
</script>

<style scoped lang="scss">
#lang-dropdown {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 10px;
}
</style>