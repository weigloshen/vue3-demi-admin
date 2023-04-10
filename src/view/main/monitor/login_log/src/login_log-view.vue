<!-- html结构 -->
<template>
  <div class="login_log">
    <el-card>
      <my-table
        ref="tableRef"
        :table-options="tableOption"
        data-name="login_log"
      >
        <template #status="{ row }">
          {{ row.status === 1 ? '失败' : '成功' }}
        </template>

        <template #handle>
          <el-button plain type="warning"> 编辑 </el-button>
          <el-button plain type="danger"> 删除 </el-button>
        </template>
      </my-table>
    </el-card>
  </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts" name="login_log">
import { tableOption } from './config';

import MyTable from '@/components/table';
import { useTable } from '@/hooks/useComponents';
// import { getIp } from '@/utils/ip';
// getIp();

const [tableRef] = useTable();
</script>
<!-- 样式设置 -->
<style lang="scss" scoped></style>
