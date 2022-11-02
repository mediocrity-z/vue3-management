<template>
  <el-icon :size="40" id="header-guide" @click.prevent.stop="handleGuide"
    ><Guide
  /></el-icon>
</template>

<script setup>
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";
import { onMounted } from "vue";
import { steps } from "./steps";
import i18n from "@/i18n";
import { watchLang } from "@/i18n/watchLang";

const t = i18n.global.t;

let driver;

const initDriver = () => {
  driver = new Driver({
    className: "scoped-class", // className to wrap driver.js popover
    animate: false, // Whether to animate or not
    opacity: 0.75, // Background opacity (0 means only popovers and without overlay)
    padding: 10, // Distance of element from around the edges
    allowClose: true, // Whether the click on overlay should close or not
    overlayClickNext: false, // Whether the click on overlay should move next
    doneBtnText: t("driver.doneBtnText"), // Text on the final button
    closeBtnText: t("driver.closeBtnText"), // Text on the close button for this step
    stageBackground: "#ffffff", // Background color for the staged behind highlighted element
    nextBtnText: t("driver.nextBtnText"), // Next button text for this step
    prevBtnText: t("driver.prevBtnText"), // Previous button text for this step
  });
};

onMounted(() => {
  initDriver();
});

watchLang(initDriver);

const handleGuide = () => {
  driver.defineSteps(steps(t));
  driver.start();
};
</script>

<style lang="scss" scoped>
#header-guide {
  margin-right: 16px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>