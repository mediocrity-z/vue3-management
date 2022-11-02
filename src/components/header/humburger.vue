<template>
  <el-radio-group v-model="isCollapse">
    <el-radio-button @change="toggleClick" :label="false">{{
      $t("menus.expand")
    }}</el-radio-button>
    <el-radio-button @change="toggleClick" :label="true">{{
      $t("menus.collapse")
    }}</el-radio-button>
  </el-radio-group>
</template>


<script setup>
import { ref } from "@vue/runtime-core";
import { useStore } from "vuex";

let store = useStore();
let isCollapse = ref(store.getters.isCollapse);
const toggleClick = () => {
  store.commit("app/changeCollapse");
};
</script>

<style lang="scss" scoped>
.hamburger-container {
  margin-right: 16px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>