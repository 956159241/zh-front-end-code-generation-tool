<template>
    <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
        <el-tab-pane label="组件库" name="first">
            <WidgetLib></WidgetLib>
        </el-tab-pane>
        <el-tab-pane label="页面模板" name="second">页面模板</el-tab-pane>
        <el-tab-pane label="组合模板" name="third">组合模板</el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import WidgetLib from './widget-lib/index.vue';

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