<!-- html结构 -->
<template>
  <div class="Setting" @click="drawer = !drawer">
    <svg-icon class="icon" name="setting" />
  </div>
  <el-drawer v-model="drawer" size="20%" title="I am the title">
    <div class="switch" flex items-center gap-3>
      <span>切换模式：</span>
      <svg-icon name="taiyang" />
      <el-switch v-model="themeStore.isDark" @change="themeStore.switchTheme" />
      <svg-icon name="yueliang" />
    </div>
    <el-divider />
    <div flex items-center>
      <span>更改主题色：</span>
      <color-picker />
    </div>
    <el-divider />
    <el-upload class="upload-demo" drag multiple>
      <!-- <el-icon class="el-icon--upload"><upload-filled /></el-icon> -->
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500kb
        </div>
      </template>
    </el-upload>
  </el-drawer>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts" name="setting">
import useStore from '@/store';
import ColorPicker from './color-picker.vue';
const { themeStore } = useStore();
const drawer = ref(false);

// setVarColor('rgba(19, 206, 102, 0.8)');
</script>
<!-- 样式设置 -->
<style lang="scss" scoped>
.Setting {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.icon {
  animation: circulation linear 2s infinite;
}
.el-drawer {
  width: 200px;
}
@keyframes circulation {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
