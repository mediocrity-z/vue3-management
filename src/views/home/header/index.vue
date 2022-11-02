<template>
  <div class="navbar">
    <humburger></humburger>
    <breadcrumb></breadcrumb>
    <div class="navbar-right">
      <guide></guide>
      <screenfull></screenfull>
      <lang></lang>
      <avatar></avatar>
    </div>
  </div>
</template>

<script setup>
import humburger from "@/components/header/humburger.vue";
import breadcrumb from "@/components/header/breadcrumb.vue";
import avatar from "@/components/header/avatar.vue";
import lang from "@/components/header/lang.vue";
import screenfull from "@/components/header/screenfull.vue";
import guide from "@/components/header/driver/index.vue";
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  .navbar-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ::v-deep .navbar-item {
      display: inline-block;
      margin-left: 18px;
      font-size: 22px;
      color: #5a5e66;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
}
</style>
