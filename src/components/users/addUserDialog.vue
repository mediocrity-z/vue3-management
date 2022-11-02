<template>
  <el-dialog v-model="dialogShow" title="添加用户" width="30%">
    <div class="add-user-form">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        :label-width="80"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password" />
        </el-form-item>
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
        <el-button type="primary" @click="handleConfirm(ruleFormRef)">
          确定 </el-button
        ><el-button @click="handleCancel(ruleFormRef)">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref, computed } from "vue";
import { addUser } from "@/api/user/index";
const props = defineProps({
  addDialogVisible: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["changeDialog", "changeUserList"]);

const dialogShow = computed({
  get() {
    return props.addDialogVisible;
  },
  set() {
    return props.addDialogVisible;
  },
});

const ruleForm = ref({
  username: "",
  password: "",
  email: "",
  mobile: "",
});

const ruleFormRef = ref(null);

const handleConfirm = (formEl) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      let res = await addUser(ruleForm.value);
      emits("changeDialog");
      emits("changeUserList");
      formEl.resetFields();
    } else {
      return;
    }
  });
};

const handleCancel = (formEl) => {
  emits("changeDialog");
  formEl.resetFields();
};

const rules = ref({
  username: [
    { required: true, message: "用户名不能为空", trigger: "blur" },
    { min: 3, max: 10, message: "Length should be 3 to 10", trigger: "blur" },
  ],
  password: [
    { required: true, message: "密码不能为空", trigger: "blur" },
    { min: 3, max: 15, message: "Length should be 3 to 15", trigger: "blur" },
  ],
});
</script>
