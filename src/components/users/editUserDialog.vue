<template>
  <el-dialog v-model="dialogShow" title="编辑用户" width="30%">
    <div class="edit-user-form">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        label-width="80px"
        status-icon
      >
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email" />
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model.number="ruleForm.mobile" />
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="handleConfirm"> 确定 </el-button
        ><el-button @click="handleCancel(ruleFormRef)">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, computed, watch } from "vue";
import { editUser } from "@/api/user/index";

const props = defineProps({
  editDialogVisible: {
    default: false,
  },
  userRow: {
    type: Object,
  },
});

const ruleForm = ref({});

watch(
  () => props.userRow,
  () => {
    ruleForm.value = props.userRow;
  },
  { deep: true, immediate: true }
);

const dialogShow = computed({
  get() {
    return props.editDialogVisible;
  },
  set() {
    return props.editDialogVisible;
  },
});

const ruleFormRef = ref(null);

const emits = defineEmits(["changeEditDialog", "changeUserList"]);

const handleConfirm = async () => {
  await editUser(ruleForm.value);
  emits("changeEditDialog");
  emits("changeUserList");
};

const handleCancel = (formEl) => {
  emits("changeEditDialog");
  formEl.resetFields();
};
</script>
