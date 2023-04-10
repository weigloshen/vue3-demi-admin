<!-- html结构 -->
<template>
  <el-table
    v-loading="isLoading"
    :data="tableData"
    @selection-change="commitTabel"
  >
    <el-table-column v-if="showSelection" type="selection" />
    <el-table-column v-if="showIndex" type="index" label="索引" width="65px" />
    <!-- <el-table-column prop="name" label="名称" width="80px" />
    <el-table-column prop="attribute" label="属性" width="100px">
      <template #default="{ row }">
        <el-tag v-if="row.attribute === 'catalog'"> 菜单 </el-tag>
        <el-tag v-else type="danger">目录</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="emoji" label="Emoji" width="80px" />
    <el-table-column prop="path" label="路径" show-overflow-tooltip />
    <el-table-column prop="redirect" label="跳转路径" show-overflow-tooltip />
    <el-table-column prop="birthdate" label="创建日期">
      <template #default="{ row }">
        {{ dayjs(row.birthdate).format('YYYY/MM/DD HH:mm:ss') }}
      </template> -->
    <!-- </el-table-column> -->
    <el-table-column
      v-for="t in tableOptions"
      :key="t.label"
      :type="t.type"
      :label="t.label"
      :prop="t.prop"
      :width="t.width"
      v-bind="t.otherAttr"
    >
      <template #default="{ row }">
        <slot :name="t.prop" :row="row">
          {{ row[t.prop] }}
        </slot>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    v-if="isPagination"
    v-model:page-size="page_size"
    v-model:current-page="current_page"
    layout="-> ,total, sizes, prev, pager, next, jumper"
    :total="9999"
    background
    mt-3
    w-full
    @size-change="changeMenus"
    @current-change="changeMenus"
    @prev-click="changeMenus"
    @next-click="changeMenus"
  />
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import useStore from '@/store';
import { TableOption } from '..';
const props = withDefaults(
  defineProps<{
    dataName: 'menus' | 'permissions' | 'informations' | 'login_log'; // 从systemStore中取的数据名
    pageSize?: number; // 一页多少条
    currentPage?: number; // 第几页
    isPagination?: boolean; // 是否显示分页
    tableOptions: TableOption[];
    showSelection?: boolean;
    showIndex?: boolean;
  }>(),
  {
    pageSize: 10,
    currentPage: 1,
    isPagination: true,
    showSelection: true,
    showIndex: true,
  },
);
const { systemStore } = useStore();
const checkedData = ref<Array<any>>([]); // 复选框选中的数据
// table内部loading特效
const isLoading = computed(() => systemStore.isLoading);
const page_size = ref(props.pageSize); // 一页多少个
const current_page = ref(props.currentPage); // 页码
// table数据
const tableData = computed(() => systemStore[props.dataName]);
// 分页切换数据
const changeMenus = () => {
  systemStore.sendApi(props.dataName, page_size.value, current_page.value);
};
// 被复选框选中的数据
const commitTabel = (value: Array<any>) => {
  checkedData.value = value;
};
onMounted(() => {
  // 初始化调用一次接口
  systemStore.sendApi(props.dataName);
});
defineExpose({
  checkedData,
  page_size,
  current_page,
});
</script>
<!-- 样式设置 -->
<style lang="scss" scoped></style>
