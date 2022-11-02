<template>
  <el-menu
    :active-text-color="variables.menuActiveText"
    :background-color="variables.menuBg"
    :default-active="defaultActive"
    mode="vertical"
    text-color="#fff"
    router
    unique-opened
    :collapse="$store.getters.isCollapse"
  >
    <el-sub-menu
      :index="'' + item.id"
      v-for="(item, i) in menuList"
      :key="item.id"
    >
      <template #title>
        <el-icon>
          <component :is="iconList[i]"></component>
        </el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        v-for="child in item.children"
        :index="'/' + child.path"
        :key="child.id"
        @click="savePath(child.path)"
      >
        <template #title>
          <el-icon>
            <component :is="icon"></component>
          </el-icon>
          <span>{{ $t(`menus.${child.path}`) }}</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { setMenuList } from "@/api/menu/index";
import { ref } from "@vue/reactivity";
import variables from "@/styles/variables.scss";
import { computed } from "@vue/runtime-core";

let menuList = ref([]);

const isLogout = () => {
  return localStorage.getItem("token") ? false : true;
};

let defaultActive = computed({
  get() {
    if (isLogout()) {
      return ref("/users").value;
    } else {
      return ref(sessionStorage.getItem("path") || "/users").value;
    }
  },
});

let iconList = ref(["user", "setting", "shop", "tickets", "pie-chart"]);
let icon = ref("menu");

let initMenuList = async () => {
  menuList.value = await setMenuList();
};
initMenuList();

const savePath = (path) => {
  sessionStorage.setItem("path", "/" + path);
};
</script>

<style>
</style>