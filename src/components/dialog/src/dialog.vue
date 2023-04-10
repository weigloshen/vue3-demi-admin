<!-- html结构 -->
<template>
  <el-dialog v-model="dialogFormVisible" width="500px" title="新增菜单配置">
    <my-form
      v-if="modelFormOptions"
      ref="formRef"
      v-bind="modelFormOptions as Props"
    />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import MyForm, { Props } from '@/components/form';
defineProps<{
  modelFormOptions?: Props;
}>();
const formRef = ref<InstanceType<typeof MyForm>>();
const dialogFormVisible = ref(false);
formRef.value?.on_reset();
defineExpose({
  dialogFormVisible,
  formRef,
});
</script>
<!-- 样式设置 -->
<style lang="scss" scoped></style>
