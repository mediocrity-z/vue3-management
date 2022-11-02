<template>
  <el-dialog v-model="dialogShow" title="分配角色" width="30%">
    <div class="current">当前角色：{{ userRow.role_name }}</div>
    <div class="distribute">
      分配新角色：<el-select v-model="newValue" placeholder="选择新角色">
        <el-option
          v-for="item in rolesList"
          :key="item.id"
          :label="item.roleName"
          :value="item.id"
        />
      </el-select>
    </div>
    <template #footer>
      <span>
        <el-button type="primary" @click="handleConfirm"> 确定 </el-button>
        <el-button @click="handleCancel">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { computed, ref } from "@vue/runtime-core";
import { defineProps, defineEmits } from "vue";
import { getRolesList, editUserRole } from "@/api/user/index";

const props = defineProps({
  roleDialogVisible: {
    dafault: false,
  },
  userRow: {
    default: Object,
  },
});

const dialogShow = computed({
  get() {
    return props.roleDialogVisible;
  },
  set() {
    return props.roleDialogVisible;
  },
});

let rolesList = ref([]);

const initRolesList = async () => {
  rolesList.value = await getRolesList();
};
initRolesList();

const newValue = ref("");

const emits = defineEmits(["changeUserList", "changeRoleDialog"]);

const handleCancel = () => {
  newValue.value = "";
  emits("changeRoleDialog");
};

const handleConfirm = async () => {
  await editUserRole({ id: props.userRow.id, rid: newValue.value });
  emits("changeRoleDialog");
  emits("changeUserList");
};
</script>

<style lang="scss">
.distribute {
  margin-top: 20px;
}
</style>