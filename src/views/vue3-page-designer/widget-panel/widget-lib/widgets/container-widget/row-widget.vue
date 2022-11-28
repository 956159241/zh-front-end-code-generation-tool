<template>
  <el-row class="row" @click.stop="selectField(widget)">
    <template v-for="(colWidget, colIdx) in widget.cols" :key="colWidget.id">
      <col-widget :widget="colWidget" :page="page"></col-widget>
    </template>
  </el-row>
</template>

<script lang="ts" setup>
import Page from '@/views/vue3-page-designer/page';
import { PropType, toRefs } from 'vue';
import ColWidget from './col-widget.vue';

const props = defineProps({
  widget: {
    type: Object as PropType<any>, //PropType<FormSettingsModel>
    required: true, // 必传
  },
  page: {
    type: Object as PropType<Page>, //PropType<FormSettingsModel>
    required: true, // 必传
  },
});
const { widget, page } = toRefs(props);

const selectField = (widget: any) => {
  if (!!page && !!page.value) {
    page.value.setSelectedWidgets(widget);
    // this.designer.setSelected(field)
    // this.designer.emitEvent('field-selected', this.parentWidget)  //发送选中组件的父组件对象
  }
};
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

