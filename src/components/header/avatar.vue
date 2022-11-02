<template>
  <el-dropdown>
    <el-avatar shape="square" :size="40" :src="squareUrl" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="avatarLogout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";

let store = useStore();

const squareUrl = ref(
  "https://img0.baidu.com/it/u=3867670444,489898374&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666630800&t=0c149ea66b93c8e7537a67a237abd6d7"
);
const avatarLogout = () => {
  store.dispatch("app/logout");
};
</script>

<style lang="scss">
.el-dropdown {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>