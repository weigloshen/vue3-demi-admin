<template>
  <svg
    class="svg-icon"
    aria-hidden="true"
    :style="{ height: props.size + 'rem', width: props.size + 'rem' }"
    cursor-pointer
  >
    <use :xlink:href="iconName" :fill="color" />
  </svg>
</template>
<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: '1.5',
  },
  color: {
    type: String,
    default: '',
  },
});

const iconName = computed(() => `#icon-${props.name}`);
</script>
<style scoped>
.svg-icon {
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
}
</style>
