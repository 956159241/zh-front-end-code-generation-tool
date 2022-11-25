<template>
    <h1>界面配置</h1>
    <draggable class="draggable-box" :list="myArray"
        v-bind="{ group: 'dragGroup', ghostClass: 'ghost', animation: 300 }" :component-data="{ name: 'fade' }"
        @start="onStart" @end="onEnd" item-key="id" :clone="cloneDog" :sort="true">
        <template #item="{ element: widget, index }">
            <div>
                <component :is="ElButton" :field="widget" :key="widget.id" :index-of-parent-list="index"
                    :parent-widget="null" :design-state="true">
                </component>

                <component :is="ElInput" :field="widget" :key="widget.id" :index-of-parent-list="index"
                    :parent-widget="null" :design-state="true">
                </component>
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
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';
import { ElButton, ElInput } from 'element-plus'

const activeName = ref('1');

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
.draggable-box {
    height: 100%;
    width: 100%;
}

.drag-handler {
    position: absolute;
    top: -2px;
    //bottom: -24px;  /* 拖拽手柄位于组件下方，有时无法正常拖动，原因未明？？ */
    left: -2px;
    height: 22px;
    line-height: 22px;
    background: red;
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