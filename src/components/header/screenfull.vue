<template>
  <el-icon :size="40" id="header-screenfull" @click="handleToggle"
    ><component :is="isFullscreen ? mode.issf : mode.isntsf"></component
  ></el-icon>
</template>

<script setup>
import { CloseBold, FullScreen } from "@element-plus/icons-vue";
import { ref } from "@vue/reactivity";
import { onBeforeUnmount, onMounted } from "@vue/runtime-core";
import sf from "screenfull";

const isFullscreen = ref(sf.isFullscreen);
const handleToggle = () => {
  if (sf.isEnabled) {
    sf.toggle();
  }
};

const mode = {
  issf: CloseBold,
  isntsf: FullScreen,
};

const changeIcon = () => {
  isFullscreen.value = sf.isFullscreen;
};

onMounted(() => {
  sf.on("change", changeIcon);
});

onBeforeUnmount(() => {
  sf.off("change", changeIcon);
});
</script>

<style lang="scss" scoped>
#header-screenfull {
  margin-right: 16px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>