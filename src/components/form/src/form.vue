<!-- html结构 -->
<template>
  <el-form
    :inline="true"
    :label-position="labelPosition"
    :label-width="labelWidth"
  >
    <el-form-item
      v-for="i in options"
      :key="i.field"
      v-bind="itemStyle"
      :label="i.label + ':'"
    >
      <el-input
        v-if="i.type === 'input'"
        v-model="modelValue[i.field]"
        :placeholder="i.placeholder"
      />
      <el-upload v-if="i.type === 'upload'" class="upload-demo" drag multiple>
        <el-icon class="el-icon--upload">
          <svg-icon name="upload-filled" :size="4.5" />
        </el-icon>
        <div class="el-upload__text">拖拽放入 <em>单击这儿上传</em></div>
        <template #tip>
          <div class="el-upload__tip">
            头像上传jpg/png格式的，并且问价大小小于500kb
          </div>
        </template>
      </el-upload>
      <el-select
        v-if="i.type === 'select'"
        v-model="modelValue[i.field]"
        :placeholder="i.placeholder"
        w-full
      >
        <el-option
          v-for="o in i.children"
          :key="o.value"
          :label="o.label"
          :value="o.value"
        />
      </el-select>
    </el-form-item>
  </el-form>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import { forEach } from 'lodash';
import { IFormOptions } from '..';

const props = defineProps<{
  labelPosition: 'top' | 'right' | 'left';
  options: Array<IFormOptions>;
  labelWidth?: string;
  styles?: string;
  itemStyle?: any;
}>();
const modelValue = ref<any>({});

const on_reset = (options = props.options) => {
  forEach(options, item => {
    modelValue.value[item.field] = '';
  });
};

// on_reset();
defineExpose({
  modelValue,
  on_reset,
});
</script>
<!-- 样式设置 -->
<style lang="scss" scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
