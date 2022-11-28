<template>
  <el-row class="row">
    <ColWidget></ColWidget>
    <ColWidget></ColWidget>
  </el-row>
</template>

<script lang="ts" setup>
import ColWidget from './col-widget.vue';
</script>

<script lang="ts">
export default { name: 'row' };
</script>

<style lang="scss" scoped>
.row {
  min-height: 50px;
  // outline: 2px solid var(--el-color-primary);
  padding: 2px;
  border: 1px dashed rgba(170, 170, 170, 0.75);
}
</style>

