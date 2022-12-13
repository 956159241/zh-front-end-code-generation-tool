<template>
    <el-scrollbar class="scroll-bar" style="height: 100%;">
        <el-collapse v-model="activeName" class="widget-collapse">
            <!-- <el-collapse-item name="1" title="自定义控件">
                <draggable tag="ul" :list="customControls" item-key="key"
                    :group="{ name: 'dragGroup', pull: 'clone', put: false }" :clone="handleCustomWidgetClone"
                    ghost-class="ghost" :sort="false">
                    <template #item="{ element: fld }">
                        <li class="field-widget-item" :title="fld.displayName">
                            <span>
                                <i :class="'iconfont icon-' + fld.icon" />
                                {{ fld.type }}
                            </span>
                        </li>
                    </template>
                </draggable>
            </el-collapse-item> -->
            <el-collapse-item name="2" title="容器控件">
                <draggable tag="ul" :list="containerControls" item-key="key"
                    :group="{ name: 'dragGroup', pull: 'clone', put: false }" :clone="handleContainerWidgetClone"
                    ghost-class="ghost" :sort="false">
                    <template #item="{ element: fld }">
                        <li class="field-widget-item" :title="fld.displayName">
                            <span>
                                <i :class="'iconfont icon-' + fld.icon" />
                                {{ fld.type }}
                            </span>
                        </li>
                    </template>
                </draggable>
            </el-collapse-item>
            <el-collapse-item name="3" title="基础控件">
                <draggable tag="ul" :list="basicControls" item-key="key"
                    :group="{ name: 'dragGroup', pull: 'clone', put: false }" :clone="handleFieldWidgetClone"
                    ghost-class="ghost" :sort="false">
                    <template #item="{ element: fld }">
                        <li class="field-widget-item" :title="fld.displayName">
                            <span>
                                <i :class="'iconfont icon-' + fld.icon" />
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
import { containerControls, basicControls, advancedControls, customControls } from "./widgetsConfig"
import { v4 as uuidv4 } from 'uuid';
import { computed } from '@vue/reactivity';
import _ from 'lodash';
import { controls } from '@/views/vue3-page-designer/widget-panel/widget-lib/widgets/index';
import { ElScrollbar, ElCollapse, ElCollapseItem } from 'element-plus';
import { TColumnWidget } from '../../type';
import { _cloneContainerWidget, _cloneCustomWidget } from '../utils';


const activeName = ref('1');

const drag = ref(false);

// getContainerByType(typeName) {
//       let allWidgets = [...containers, ...basicFields, ...advancedFields, ...customFields]
//       let foundCon = null
//       allWidgets.forEach(con => {
//         if (!!con.category && !!con.type && (con.type === typeName)) {
//           foundCon = con
//         }
//       })

//       return foundCon
//     };

const handleFieldWidgetClone = (origin: any) => {
    let newWidget = _.cloneDeep(origin)
    let tempId = uuidv4()
    newWidget.id = tempId
    //console.log('test id===', newWidget.id)
    // newWidget.options.name = newWidget.id
    // newWidget.options.label = newWidget.options.label || newWidget.type.toLowerCase()

    delete newWidget.displayName
    return newWidget
};

const handleContainerWidgetClone = (origin: any) => {
    return _cloneContainerWidget(origin);
};

const handleCustomWidgetClone = (origin: any) => {
    return _cloneCustomWidget(origin);
};
</script>

<style lang="scss" scoped>
.scroll-bar {
    ul {
        padding: 0px;
        margin: 0px;
    }

    &:deep(.el-collapse) {
        background-color: transparent;
        --el-collapse-header-bg-color: transparent;
        --el-collapse-content-bg-color: transparent;
    }
}

.field-widget-item {
    text-decoration: none;
    list-style: none;
    width: 50%;
    display: inline-block;
    text-align: left;
    line-height: 40px;
    cursor: pointer;
}
</style>