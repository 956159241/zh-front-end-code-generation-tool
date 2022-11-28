<template>
    <el-scrollbar class="scroll-bar" style="height: 100%;">
        <el-collapse v-model="activeName" class="widget-collapse">
            <el-collapse-item name="1" title="自定义控件">
                <draggable tag="ul" :list="customControls" item-key="key"
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
    let newCon = _.cloneDeep(origin)
    newCon.id = newCon.type.replace(/-/g, '') + uuidv4()
    newCon.options.name = newCon.id
    if (newCon.type === 'row') {
        let newCol = {
            id: '',
            type: 'grid-col',
            category: 'container',
            icon: 'grid-col',
            internal: true,
            widgets: [],
            options: {
                name: '',
                hidden: false,
                span: 12,
                offset: 0,
                push: 0,
                pull: 0,
                responsive: false,  //是否开启响应式布局
                md: 12,
                sm: 12,
                xs: 12,
                customClass: '',  //自定义css类名
            }
        };
        let tmpId = uuidv4()
        newCol.id = 'grid-col-' + tmpId
        newCol.options.name = 'gridCol' + tmpId
        newCon.cols.push(newCol)
        //
        newCol = _.cloneDeep(newCol)
        tmpId = uuidv4()
        newCol.id = 'grid-col-' + tmpId
        newCol.options.name = 'gridCol' + tmpId
        newCon.cols.push(newCol)
    } else if (newCon.type === 'table') {
        // let newRow = {cols: []}
        // newRow.id = 'table-row-' + generateId()
        // newRow.merged = false
        // let newCell = deepClone( this.getContainerByType('table-cell') )
        // newCell.id = 'table-cell-' + generateId()
        // newCell.options.name = newCell.id
        // newCell.merged = false
        // newCell.options.colspan = 1
        // newCell.options.rowspan = 1
        // newRow.cols.push(newCell)
        // newCon.rows.push(newRow)
    } else if (newCon.type === 'tab') {
        // let newTabPane = _.cloneDeep( this.getContainerByType('tab-pane') )
        // newTabPane.id = 'tab-pane-' + generateId()
        // newTabPane.options.name = 'tab1'
        // newTabPane.options.label = 'tab 1'
        // newCon.tabs.push(newTabPane)
    }
    //newCon.options.customClass = []

    delete newCon.displayName
    return newCon
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