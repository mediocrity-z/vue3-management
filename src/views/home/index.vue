<template>
  <el-container class="app-wrapper">
    <el-aside class="sidebar-container" :width="asideWidth">
      <Menu></Menu>
    </el-aside>
    <el-container
      class="container"
      :class="{ hidderContainer: $store.getters.isCollapse }"
    >
      <el-header>
        <Header></Header>
      </el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Menu from "@/views/home/menu/index.vue";
import Header from "@/views/home/header/index.vue";
import variables from "@/styles/variables.scss";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
let store = useStore();
let asideWidth = computed(() => {
  return store.getters.isCollapse
    ? variables.hideSideBarWidth
    : variables.sideBarWidth;
});
</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>