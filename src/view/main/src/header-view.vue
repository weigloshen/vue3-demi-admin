<!-- html结构 -->
<template>
  <el-header flex justify-between items-center relative>
    <section flex>
      <svg-icon
        :name="isCollapse ? 'unflod' : 'flod'"
        size="1"
        @click="toggleMenu"
      />
      <Breadcrumb />
    </section>
    <section>
      <el-space>
        <svg-icon
          :name="isFullscreen ? '取消全屏' : '全屏'"
          mr-1
          @click="toggle"
        />
        <el-dropdown trigger="hover" mr-5>
          <span class="el-dropdown-link">
            <svg-icon name="语言" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="i in options"
                :key="i.name"
                @click="i18n.locale.value = i.name"
              >
                <el-icon>
                  <svg-icon :name="i.name" />
                </el-icon>
                {{ i.title }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-badge value="9" class="item" right-5 mt-1.5>
          <svg-icon name="lindang" size="1.3" />
        </el-badge>
        <ThemeSwitch />
      </el-space>
    </section>
  </el-header>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import Breadcrumb from '@/components/breadcrumb/src/breadcrumb.vue';
import { useI18n } from 'vue-i18n';
const { isFullscreen, toggle } = useFullscreen();
const i18n = useI18n();
const options = [
  {
    name: 'cn',
    title: '中文',
  },
  {
    name: 'en',
    title: 'English',
  },
];
defineProps<{
  isCollapse: boolean; // 是否展开侧边栏
  toggleMenu: () => void; // 切换侧边栏
}>();
</script>
<!-- 样式设置 -->
<style lang="scss" scoped></style>
