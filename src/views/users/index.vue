<template>
  <el-card>
    <div class="user-top">
      <el-input
        class="user-search"
        v-model="userForm.query"
        placeholder="请输入搜索的用户姓名"
      >
        <template #append>
          <el-button :icon="Search" @click="handleClick" />
        </template>
      </el-input>
      <el-button type="primary" @click="changeAddDialog">添加用户</el-button>
    </div>
    <el-table empty-text="没有数据" :data="userData" class="user-table">
      <el-table-column prop="username" label="姓名" />
      <el-table-column prop="email" label="邮箱" width="240" />
      <el-table-column prop="mobile" label="手机号" />
      <el-table-column prop="role_name" label="角色" />
      <el-table-column prop="mg_state" #default="{ row }" label="状态">
        <el-switch @change="changeStatus(row)" v-model="row.mg_state" />
      </el-table-column>
      <el-table-column prop="create_time" label="创建时间" #default="{ row }">{{
        $filters.filterTimes(row.create_time)
      }}</el-table-column>
      <el-table-column
        class="user-btns"
        width="260"
        label="操作"
        #default="{ row }"
        ><el-button type="primary" @click="submitEdit(row)">编辑</el-button>
        <el-button type="warning" @click="handleDistribute(row)"
          >分配角色</el-button
        >
        <el-popconfirm
          @confirm="confirmDelete(row.id)"
          confirm-button-text="是"
          cancel-button-text="否"
          title="是否确认删除该用户？"
        >
          <template #reference>
            <el-button type="danger">删除</el-button>
          </template>
        </el-popconfirm>
      </el-table-column>
    </el-table>
    <pageni
      :userForm="userForm"
      :totalNum="totalNum"
      @changeUserList="changeUserList"
    ></pageni>
  </el-card>
  <div class="user-dialog">
    <add-user-dialog
      :addDialogVisible="addDialogVisible"
      @changeDialog="changeAddDialog"
      @changeUserList="changeUserList"
    ></add-user-dialog>
    <edit-user-dialog
      :editDialogVisible="editDialogVisible"
      :userRow="userRow"
      @changeUserList="changeUserList"
      @changeEditDialog="changeEditDialog"
    ></edit-user-dialog>
    <role-dialog
      :userRow="userRow"
      :roleDialogVisible="roleDialogVisible"
      @changeUserList="changeUserList"
      @changeRoleDialog="changeRoleDialog"
    ></role-dialog>
  </div>
</template>

<script setup>
import { Search, Watch } from "@element-plus/icons-vue";
import { ref } from "@vue/reactivity";
import {
  getUserList,
  changeState,
  deleteUser,
  getUserInfo,
} from "@/api/user/index";
import addUserDialog from "@/components/users/addUserDialog.vue";
import editUserDialog from "@/components/users/editUserDialog.vue";
import roleDialog from "@/components/users/roleDialog.vue";
import pageni from "@/components/pageni.vue";

let userData = ref([]);

let userForm = ref({
  query: "",
  pagenum: 1,
  pagesize: 10,
});

const totalNum = ref(0);

const changeUserList = async (pn, ps) => {
  let { users, total, pagenum } = await getUserList(userForm.value);
  if (pn === undefined && ps === undefined) {
    userData.value = users;
  } else {
    userData.value = users.slice((pn - 1) * ps, pn * ps);
  }
  totalNum.value = total;
};
changeUserList();

const handleClick = () => {
  changeUserList();
};

const changeStatus = async (row) => {
  let res = await changeState({ id: row.id, status: row.mg_state });
};

let addDialogVisible = ref(false);

const changeAddDialog = () => {
  addDialogVisible.value = !addDialogVisible.value;
};

let editDialogVisible = ref(false);

const changeEditDialog = () => {
  editDialogVisible.value = !editDialogVisible.value;
};

let userRow = ref({});

const submitEdit = (row) => {
  userRow.value = JSON.parse(JSON.stringify(row));
  changeEditDialog();
};

const confirmDelete = async (id) => {
  await deleteUser(id);
  changeUserList();
};

const roleDialogVisible = ref(false);

const changeRoleDialog = () => {
  roleDialogVisible.value = !roleDialogVisible.value;
};

const handleDistribute = async (row) => {
  userRow.value = JSON.parse(JSON.stringify(row));
  await getUserInfo(row.id);
  changeRoleDialog();
};
</script>

<style lang="scss" scoped>
.user-top {
  display: flex;
  .user-search {
    width: 300px;
    margin-right: 20px;
  }
}
.user-table {
  margin-top: 20px;
  .user-btns {
    display: flex;
  }
}
.user-pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
