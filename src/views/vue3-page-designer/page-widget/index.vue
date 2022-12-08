<template>
    <div class="box">
        <div class="header">
            <el-row class="row">
                <el-col class="column" :span="24">
                    <!-- <el-button type="primary" link>清空</el-button>
                    <el-button type="primary" link>预览</el-button>
                    <el-button type="primary" link>导入JSON</el-button> -->
                    <el-button type="primary" link @click="() => modal.show = true">查看JSON</el-button>
                    <!-- <el-button type="primary" link>导出代码</el-button>
                    <el-button type="primary" link>下载代码</el-button> -->
                </el-col>
            </el-row>
        </div>
        <div class="empty-widget" v-if="page.data.value.widgets.length === 0">请将组件拖拽到此处</div>
        <draggable class="draggable-box page" :list="page.data.value.widgets"
            v-bind="{ group: 'dragGroup', ghostClass: 'ghost', animation: 300 }" :component-data="{ name: 'fade' }"
            @start="onStart" @end="onEnd" item-key="id" :sort="true">
            <template #item="{ element: widget, index }">
                <component :is="getComponentName(widget)" :key="widget.id" :widget="widget" :page="page">
                </component>
            </template>
        </draggable>
    </div>
    <ZHModal :modal="modal" @on-opened="modalOnOpened">
        <div id="container" style="height:100%;"></div>
    </ZHModal>
</template>

<script lang="ts" setup>
import { ref, toRefs, PropType, onMounted } from 'vue';
import draggable from 'vuedraggable';
import { ElButton, ElInput } from 'element-plus';
import Page from '../page';
import ZHModal from '@/components/zh-modal/index.vue';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

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

//#region 查看JSON
const modal = ref({ show: false, title: '查看JSON' });
const modalOnOpened = () => {
    modal.value.title = 'modal opnend';
};
//#endregion
</script>

<style lang="scss" scoped>
.box {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    .header {
        height: 30px;
        line-height: 30px;
        vertical-align: middle;
        text-align: right;
    }

    .draggable-box {
        flex: 1;
        height: 100%;
        width: 100%;
        // min-height: 500px;
        overflow: auto;
        padding: 10px;
        box-sizing: border-box;
    }
}

.empty-widget {
    color: var(--el-text-color-primary);
    font-size: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

/*滚动条整体部分*/
.draggable-box::-webkit-scrollbar {
    width: 8px;
    height: 20px;
}

/*滚动条的轨道*/
.draggable-box::-webkit-scrollbar-track {
    background-color: #FFFFFF;
}

/*滚动条里面的小方块，能向上向下移动*/
.draggable-box::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .2);
    border-radius: 5px;
    border: 1px solid #F1F1F1;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .0);
}

.draggable-box::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, .2);
}

.draggable-box::-webkit-scrollbar-thumb:active {
    background-color: rgba(0, 0, 0, .2);
}

/*边角，即两个滚动条的交汇处*/
.draggable-box::-webkit-scrollbar-corner {
    background-color: #FFFFFF;
}
</style>