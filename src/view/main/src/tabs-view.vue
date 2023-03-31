<!-- html结构 -->
<template>
  <div class="tabs-view" h-35px flex items-center>
    <el-space px-2>
      <!-- <el-check-tag
        v-for="item in tabs"
        :key="item.path"
        v-tab-close
        class="hover:text-[#3d97f5]"
        flex
        items-center
        :checked="currentPath === item.path"
        @click="appStore.setCurrentPath(item.path)"
      >
        <svg-icon name="tab" size="1" relative top-0.3 />
        {{ item.title }}
        <svg-icon
          v-show="currentPath === item.path"
          name="close"
          size="1"
          relative
          top-0.3
          class="close"
          @click.stop="closeTab(item.path)"
        />
      </el-check-tag> -->
      <el-tag
        v-for="item in tabs"
        :key="item.path"
        my-2
        :closable="currentPath === item.path"
        cursor-pointer
        @close="closeTab(item.path)"
        @click="appStore.setCurrentPath(item.path)"
      >
        {{ $t('menu.' + item.title) }}
      </el-tag>
    </el-space>
  </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import useStore from '@/store';
const { appStore } = useStore();
const tabs = computed(() => appStore.tabs);
const currentPath = computed(() => appStore.currentPath);
const closeTab = (path: string) => {
  appStore.closeTab(path);
};
</script>
<!-- 样式设置 -->
<style lang="scss" scoped>
.tabs-view {
  border-bottom: 1px solid var(--el-menu-border-color) !important;
}
</style>
