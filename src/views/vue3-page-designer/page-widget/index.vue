<template>
    <div class="header">
        <el-row class="row">
            <el-col class="column" :span="24">
                <el-button type="primary" link>清空</el-button>
                <el-button type="primary" link>预览</el-button>
                <el-button type="primary" link>导入JSON</el-button>
                <el-button type="primary" link>导出JSON</el-button>
                <el-button type="primary" link>导出代码</el-button>
                <el-button type="primary" link>下载代码</el-button>
            </el-col>
        </el-row>

    </div>
    <div class="empty-widget" v-if="page.data.value.widgets.length === 0">请将组件拖拽到此处</div>
    <el-scrollbar class="scroll-bar">
        <draggable class="draggable-box" :list="page.data.value.widgets"
            v-bind="{ group: 'dragGroup', ghostClass: 'ghost', animation: 300 }" :component-data="{ name: 'fade' }"
            @start="onStart" @end="onEnd" item-key="id" :sort="true">
            <template #item="{ element: widget, index }">
                <component :is="getComponentName(widget)" :key="widget.id" :widget="widget">
                </component>
            </template>
        </draggable>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref, toRefs, PropType, onMounted } from 'vue';
import draggable from 'vuedraggable';
import { ElButton, ElInput } from 'element-plus';
import Page from '../page';

// const allControls = { ...controls };

const getComponentName = (widget: any) => {
    return widget.type + '-control';
}

// onMounted(() => {
//     return controls['row'];
// });


const props = defineProps({
    page: {
        type: Object as PropType<Page>, //PropType<FormSettingsModel>
        required: true, // 必传
    },
});
const { page } = toRefs(props);


const activeName = ref('1');
// const widgetList = [...Widgets];

const drag = ref(false);
//定义要被拖拽对象的数组
const myArray = ref([]);

//开始拖拽事件
const onStart = () => {
    drag.value = true;
};
//拖拽结束事件
const onEnd = () => {
    drag.value = false;
};
</script>

<style lang="scss" scoped>
.empty-widget {
    color: var(--el-text-color-primary);
    font-size: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.header {
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
    text-align: right;

    .row {
        .column {}
    }
}

.scroll-bar {
    height: calc(100% - 30px);
    // &:deep(.el-scrollbar__view) {
    //     height: 100%;
    // }

    .draggable-box {
        height: 100%;
        width: 100%;
        min-height: 500px;
    }
}



.drag-handler {
    position: absolute;
    top: -2px;
    //bottom: -24px;  /* 拖拽手柄位于组件下方，有时无法正常拖动，原因未明？？ */
    left: -2px;
    height: 22px;
    line-height: 22px;
    background: var(--el-color-primary);
    z-index: 9;

    i {
        font-size: 14px;
        font-style: normal;
        color: #fff;
        margin: 4px;
        cursor: move;
    }
}
</style>