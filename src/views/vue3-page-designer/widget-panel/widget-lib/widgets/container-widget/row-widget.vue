<template>
  <el-row class="row">
    <template v-for="(colWidget, colIdx) in widget.cols" :key="colWidget.id">
      <col-widget :widget="colWidget"></col-widget>
    </template>
  </el-row>
</template>

<script lang="ts" setup>
import { PropType, toRefs } from 'vue';
import ColWidget from './col-widget.vue';

const props = defineProps({
  widget: {
    type: Object as PropType<any>, //PropType<FormSettingsModel>
    required: true, // 必传
  },
});
const { widget } = toRefs(props);


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

