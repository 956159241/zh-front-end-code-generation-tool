<template>
    <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
        <el-tab-pane label="组件设置" name="first">
            <ComponentSetting></ComponentSetting>
        </el-tab-pane>
        <el-tab-pane label="页面设置" name="second">
            <PageSetting></PageSetting>
        </el-tab-pane>
        <el-tab-pane label="数据源管理" name="third">
            <DBSetting></DBSetting>
        </el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" setup>
import { PropType, ref, toRefs } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { TPage } from '../type';
import Page from '../page';
import ComponentSetting from './commonet-setting/index.vue';
import PageSetting from './page-setting/index.vue';
import DBSetting from './db-setting/index.vue';

const props = defineProps({
    page: {
        type: Object as PropType<Page>, //PropType<FormSettingsModel>
        required: true, // 必传
    },
});
const { page } = toRefs(props);

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>
<style scoped lang="scss">
.tabs {
    height: 100%;
    width: 100%;

    &:deep(.el-tabs__header.is-top) {
        margin-bottom: 0px;
    }

    &:deep(.el-tabs__content) {
        height: calc(100% - 40px);

        .el-tab-pane {
            height: 100%;
        }
    }
}
</style>