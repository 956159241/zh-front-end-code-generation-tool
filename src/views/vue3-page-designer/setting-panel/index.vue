<template>
    <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
        <el-tab-pane label="组件设置" name="first">组件设置</el-tab-pane>
        <el-tab-pane label="页面设置" name="second">页面设置</el-tab-pane>
        <el-tab-pane label="数据源管理" name="third">数据源管理</el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

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