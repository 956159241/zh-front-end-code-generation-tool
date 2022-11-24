<template>
    <h1>界面配置</h1>
    <draggable class="draggable-box" :list="myArray"
        v-bind="{ group: 'dragGroup', ghostClass: 'ghost', animation: 300 }" @start="onStart" @end="onEnd" item-key="id"
        :clone="cloneDog" :sort="false">
        <template #item="{ element: fld }">
            <li class="field-widget-item" :title="fld.displayName">
                <span>
                    <svg-icon :icon-class="fld.icon" class-name="color-svg-icon" />
                    {{ fld.type }}
                </span>
            </li>
        </template>
    </draggable>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import draggable from 'vuedraggable'

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
</style>