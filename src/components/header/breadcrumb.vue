<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index"
      ><span v-if="index === breadcrumbList.length - 1" class="no-redirect">{{
        $t(`menus.${item.name}`)
      }}</span
      ><span v-else class="redirect" @click="handleRedirect(item.path)">{{
        $t(`menus.${item.name}`)
      }}</span></el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

let route = useRoute();
let router = useRouter();
let breadcrumbList = ref([]);
let initBreadcrumbList = (matched) => {
  breadcrumbList.value = matched;
};
let handleRedirect = (path) => {
  router.push(path);
};
watch(
  () => route.matched,
  (newValue) => {
    initBreadcrumbList(newValue);
  },
  { deep: true, immediate: true }
);
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin-left: 30px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
  .redirect {
    color: #666;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      color: $menuBg;
    }
  }
}
</style>