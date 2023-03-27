<!-- html结构 -->
<template>
  <div class="Setting" @click="drawer = !drawer">
    <svg-icon class="icon" name="setting" />
  </div>
  <el-drawer v-model="drawer" size="20%" title="I am the title">
    <div class="switch" f-center gap-3>
      <svg-icon name="taiyang" />
      <el-switch v-model="themeStore.isDark" @change="themeStore.switchTheme" />
      <svg-icon name="yueliang" />
    </div>
    <el-color-picker v-model="color" show-alpha />
  </el-drawer>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts" name="setting">
import useStore from '@/store';
import { getVarColor, setVarColor } from '@/utils/varColor';
const { themeStore } = useStore();
const drawer = ref(false);
const color = ref('rgba(19, 206, 102, 0.8)');
console.log(getVarColor());
watch(color, newvalue => {
  setVarColor(newvalue);
});
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
