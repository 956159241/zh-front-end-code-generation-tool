<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="组件库" name="first">
            <WidgetLib></WidgetLib>
        </el-tab-pane>
        <el-tab-pane label="页面模板" name="second">页面模板</el-tab-pane>
        <el-tab-pane label="组合模板" name="third">组合模板</el-tab-pane>
        <el-tab-pane label="Star" name="fourth">Star</el-tab-pane>
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
<style>

</style>