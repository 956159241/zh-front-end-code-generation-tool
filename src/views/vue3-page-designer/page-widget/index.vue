<template>
    <div class="header">
        <el-row>
            <el-col :span="12"></el-col>
            <el-col :span="24">
                <el-button type="primary" link>清空</el-button>
                <el-button type="primary" link>预览</el-button>
                <el-button type="primary" link>导入JSON</el-button>
                <el-button type="primary" link>导出JSON</el-button>
                <el-button type="primary" link>导出代码</el-button>
                <el-button type="primary" link>下载代码</el-button>
            </el-col>
        </el-row>

    </div>
    <el-scrollbar class="scroll-bar">
        <draggable class="draggable-box" :list="myArray"
            v-bind="{ group: 'dragGroup', ghostClass: 'ghost', animation: 300 }" :component-data="{ name: 'fade' }"
            @start="onStart" @end="onEnd" item-key="id" :clone="cloneDog" :sort="true">
            <template #item="{ element: widget, index }">
                <div>
                    <component :is="ZHButton" :field="widget" :key="widget.id" :index-of-parent-list="index"
                        :parent-widget="null" :design-state="true">
                    </component>

                    <!-- <component :is="ElInput" :field="widget" :key="widget.id" :index-of-parent-list="index"
                        :parent-widget="null" :design-state="true">
                    </component> -->
                </div>


            </template>

            <!-- <template #item="{ element: field }">
            <li class="field-widget-item" :title="field.displayName">
                <span>
                    <svg-icon :icon-class="field.icon" class-name="color-svg-icon" />
                    {{ field.type }}
                </span>
            </li>
        </template> -->
            <!-- <draggable :list="designer.widgetList" item-key="id"
            v-bind="{ group: 'dragGroup', ghostClass: 'ghost', animation: 300 }" tag="transition-group"
            :component-data="{ name: 'fade' }" handle=".drag-handler" @end="onDragEnd" @add="onDragAdd"
            @update="onDragUpdate" :move="checkMove">
            <template #item="{ element: widget, index }">
                <div class="transition-group-el">
                    <template v-if="'container' === widget.category">
                        <component :is="getWidgetName(widget)" :widget="widget" :designer="designer" :key="widget.id"
                            :parent-list="designer.widgetList" :index-of-parent-list="index" :parent-widget="null">
                        </component>
                    </template>
                    <template v-else>
                        <component :is="getWidgetName(widget)" :field="widget" :designer="designer" :key="widget.id"
                            :parent-list="designer.widgetList" :index-of-parent-list="index" :parent-widget="null"
                            :design-state="true"></component>
                    </template>
                </div>
            </template>
        </draggable> -->
        </draggable>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';
import { ElButton, ElInput } from 'element-plus'
// import Widgets from '../widget-panel/widget-lib/widgets/index';
import ZHButton from '../widget-panel/widget-lib/widgets/button-widget.vue'
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

const cloneDog = ({ id }) => {
    return {
        id: 100,
        name: `cat ${100}`
    };
};
</script>

<style lang="scss" scoped>
.header {
    height: 30px;
}

.scroll-bar {
    height: calc(100% - 30px);
    // &:deep(.el-scrollbar__view) {
    //     height: 100%;
    // }

    .draggable-box {
        height: 100%;
        width: 100%;
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