<!-- html结构 -->
<template>
  <div class="DashBorard">
    <el-row :gutter="20">
      <el-col v-for="i in card_total" :key="i.name" :span="6">
        <total-card v-bind="i" :comp-name="NAME" />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="18">
        <el-card>
          <div v-echart="line" h-lg></div>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card>
          <el-tabs v-model="activeName" value="first" h-lg>
            <el-tab-pane
              v-for="(value, key) in tabPane"
              :key="key"
              :label="$t(NAME + value)"
              :name="key"
            >
              <p v-for="i in 8" :key="i">
                {{ $t(NAME + value) }}{{ i }}
                {{ $t(NAME + 'JustAddedAgain') }}....
              </p>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <div v-echart="cake" h-sm></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div v-echart="column" h-sm></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts" name="dashBorard">
import { line, cake, column } from './config';
import TotalCard from '@/components/total-card/src/total-card.vue';
import useStore from '@/store';
import { ElMessage } from 'element-plus';
const activeName = ref('first');
const NAME = 'dashborard.';
const { homeStore } = useStore();
onMounted(() => {
  homeStore.getCardTotal();
});
const { card_total } = storeToRefs(homeStore);
console.log(card_total);

const tabPane = {
  first: 'user',
  second: 'config',
  third: 'permission',
  fourth: 'task',
};

ElMessage({
  message: '今日成果 ✌',
  type: 'success',
});
</script>
<!-- 样式设置 -->
<style lang="scss" scoped>
.text {
  border-bottom: 1px solid gray;
}
.el-row {
  :not(:last-child) {
    margin-bottom: 12px;
  }
}
</style>
