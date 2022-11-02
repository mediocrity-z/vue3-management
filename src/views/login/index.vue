<template>
  <div class="login">
    <div class="login-text">
      <h3>{{ $t("login.title") }}</h3>
    </div>
    <div class="login-container">
      <el-form
        :rules="rules"
        ref="ruleFormRef"
        :model="form"
        label-width="120px"
      >
        <el-form-item prop="username">
          <el-input clearable v-model="form.username"
            ><template #prefix>
              <el-icon class="el-input__icon"><user /></el-icon> </template
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input clearable show-password v-model="form.password">
            <template #prefix>
              <el-icon class="el-input__icon"><lock /></el-icon> </template
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-confirm"
            type="primary"
            @click="submitForm(ruleFormRef)"
            >{{ $t("login.btnTitle") }}</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useStore } from "vuex";

const store = useStore();

const form = ref({
  username: "admin",
  password: "123456",
});

const ruleFormRef = ref<FormInstance>(null);

const rules = ref<FormRules>({
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 10, message: "Length should be 3 to 10", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 3, max: 15, message: "Length should be 3 to 15", trigger: "blur" },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid) => {
    if (valid) {
      store.dispatch("app/login", form.value);
    }
  });
};
</script>

<style lang="scss">
.login {
  background-color: rgb(28, 9, 44);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .login-text {
    color: white;
    margin-bottom: 20px;
  }
  .login-container {
    transform: translate(-16%, 0);
    .login-confirm {
      width: 260px;
    }
  }
}
</style>