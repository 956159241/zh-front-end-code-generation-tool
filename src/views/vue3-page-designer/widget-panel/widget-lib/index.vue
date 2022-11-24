<template>
    <el-scrollbar class="side-scroll-bar" style="height: 100%;">
        <el-collapse v-model="activeName" class="widget-collapse">
            <el-collapse-item name="1" title="基础控件">
                <draggable tag="ul" :list="basicFields" item-key="key"
                    :group="{ name: 'dragGroup', pull: 'clone', put: false }" :clone="cloneDog" ghost-class="ghost"
                    :sort="false">
                    <template #item="{ element: fld }">
                        <li class="field-widget-item" :title="fld.displayName">
                            <span>
                                <svg-icon :icon-class="fld.icon" class-name="color-svg-icon" />
                                {{ fld.type }}
                            </span>
                        </li>
                    </template>
                </draggable>
            </el-collapse-item>
        </el-collapse>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import draggable from 'vuedraggable'
import { containers as CONS, basicFields as BFS, advancedFields as AFS, customFields as CFS } from "./widgetsConfig"
import { v4 as uuidv4 } from 'uuid';
import { computed } from '@vue/reactivity';

const activeName = ref('1');

const drag = ref(false);

const basicFields = computed(() => {
    return BFS.map((x: any) => {
        return {
            ...x,
            id: uuidv4(),
        };
    });
});

const cloneDog = (x: any) => {
    return {
        ...x,
        id: uuidv4(),
    };
};
</script>