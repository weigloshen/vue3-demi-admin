<!-- html结构 -->
<template>
  <div>
    <div flex flex-col gap-y-3 direction="vertical">
      <el-card>
        <section flex justify-between flex-auto>
          <div flex-1>
            <my-form
              ref="formRef"
              :options="formOptions"
              label-position="top"
            />
            <el-space>
              <el-button type="primary" @click="showDialog">
                <el-icon :size="14" mr-2>
                  <svg-icon name="add" />
                </el-icon>
                新增
              </el-button>
              <el-button
                type="danger"
                flex
                items-center
                :disabled="checkedData && checkedData.length === 0"
                @click="on_reset"
              >
                <!-- :disabled="checkedData.length === 0"
                @click="on_delete" -->
                <el-icon :size="14" mr-2>
                  <svg-icon name="delete" />
                </el-icon>
                删除
              </el-button>
            </el-space>
          </div>
          <div flex items-center justify-center flex-1>
            <el-space>
              <el-button type="primary" @click="on_search">
                <el-icon :size="14" mr-2>
                  <svg-icon name="search" />
                </el-icon>
                查询
              </el-button>
              <el-button @click="on_reset">
                <el-icon :size="14" mr-2>
                  <svg-icon name="reset" />
                </el-icon>
                重置
              </el-button>
            </el-space>
          </div>
        </section>
      </el-card>
      <el-card>
        <!-- //  -->
        <my-table
          ref="tableRef"
          :table-options="tableOption"
          data-name="permissions"
        >
          <template #avatar="{ row }">
            <el-avatar :src="row.avatar" />
          </template>
          <template #permissions="{ row }">
            <el-tag v-if="row.permissions === 'ADMIN'" size="large"
              >管理员</el-tag
            >
            <el-tag
              v-else-if="row.permissions === 'USER'"
              size="large"
              class="ml-2"
              type="success"
            >
              &nbsp;用户&nbsp;
            </el-tag>
            <el-tag v-else class="ml-2" size="large" type="info"
              >&nbsp;游客&nbsp;</el-tag
            >
          </template>
          <template #handle="{ row }">
            <el-button plain type="warning" @click="() => editDialog(row)">
              编辑
            </el-button>
            <el-button plain type="danger" @click="on_reset"> 删除 </el-button>
          </template>
        </my-table>
      </el-card>
    </div>
    <!-- 模态框 -->
    <my-dialog ref="modelRef" :model-form-options="modelFormOptions" />
    <!-- :model-options="modelOptions" -->
  </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import MyTable from '@/components/table';
import MyForm from '@/components/form';
import MyDialog from '@/components/dialog';
import useStore from '@/store';
import { useDialog, useForm, useTable } from '@/hooks/useComponents';
import { modelFormOptions, formOptions, tableOption } from './config';
const { systemStore } = useStore();
const [modelRef, showDialog, editDialog] = useDialog();
const [formRef, formData] = useForm();
const [tableRef, pageInfo, checkedData] = useTable();

const on_search = () => {
  console.log(formData.value);

  systemStore.sendApi(
    'permissions',
    pageInfo.value.size as number,
    pageInfo.value.number as number,
    formData.value,
  );
};
// 删除
const on_reset = () => {
  systemStore.sendApi(
    'permissions',
    pageInfo.value.size as number,
    pageInfo.value.number as number,
  );
};
</script>
<!-- 样式设置 -->
<style lang="scss" scoped></style>
