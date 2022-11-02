<template>
  <el-pagination
    class="user-pagination"
    :currentPage="pagenum"
    :page-size="pagesize"
    :page-sizes="[3, 5, 10, 15]"
    background
    layout="total, sizes, prev, pager, next, jumper"
    :total="props.totalNum"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script setup>
import { defineProps, ref, defineEmits } from "vue";

const props = defineProps({
  userForm: {
    type: Object,
  },
  totalNum: {
    default: 0,
  },
});

const emits = defineEmits(["changeUserList"]);
const pagenum = ref(props.userForm.pagenum);
const pagesize = ref(props.userForm.pagesize);
const handleSizeChange = (newValue) => {
  pagenum.value = 1;
  pagesize.value = newValue;
  emits("changeUserList", pagenum.value, pagesize.value);
};
const handleCurrentChange = (newValue) => {
  pagenum.value = newValue;
  emits("changeUserList", pagenum.value, pagesize.value);
};
</script>

<style>
</style>