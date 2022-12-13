<template>
    <el-scrollbar class="box">
        <RowSetting v-if="selectedWidgetType === 'row'" :page="page"></RowSetting>
        <ColumnSetting v-if="selectedWidgetType === 'column'" :page="page"></ColumnSetting>
    </el-scrollbar>

</template>

<script lang="ts" setup>
import { computed, PropType, toRefs } from 'vue';
import Page from '../../page';
import RowSetting from './RowSetting.vue';
import ColumnSetting from './ColumnSetting.vue';

const props = defineProps({
    page: {
        type: Object as PropType<Page>, //PropType<FormSettingsModel>
        required: true, // 必传
    },
});
const { page } = toRefs(props);

const selectedWidgetType = computed(() => {
    return page.value && page.value.data.value.selectedWidgets && page.value.data.value.selectedWidgets[0] && page.value.data.value.selectedWidgets[0].type;
});
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;

    &:deep(.el-divider__text) {
        background-color: rgb(242, 242, 242);
    }
}
</style>