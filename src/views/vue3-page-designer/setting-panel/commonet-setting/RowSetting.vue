<template>
    <el-form :model="formModel" label-width="70px">
        <el-divider>基础设置</el-divider>
        <el-form-item label="名称" prop="name">
            <el-input v-model="formModel.settings.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="栅格高度" prop="height">
            <el-input v-model="formModel.settings.height"></el-input>
        </el-form-item>
        <el-form-item label="栅格间隔">
            <el-input v-model="formModel.settings.gutter"></el-input>
        </el-form-item>
        <el-divider>栅格列</el-divider>
        <el-form-item v-for="(item, index) in formModel.columns" :key="index" label-width="25px">
            <div style="width: 100%; display: flex;">
                <div style="width: 30px; padding-right: 15px;">列{{ index + 1 }}</div>
                <div style="flex: 1;"><el-input type="number" v-model="item.span"></el-input></div>
                <div style="width: 30px; padding-left: 7px; cursor: pointer;">
                    <el-icon style="color: red;" @click="deleteColumn(item.id)">
                        <Delete />
                    </el-icon>
                </div>
            </div>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="width: 100%;" @click="addColumn">添加新列</el-button>
        </el-form-item>

    </el-form>
</template>

<script lang="ts" setup name="RowSetting">
import { PropType, ref, watch, toRefs, onMounted } from 'vue';

import { useStore } from '../../store';
import { storeToRefs } from 'pinia';
import { TColumnWidget, TRowWidget } from '../../type';
import Page from '../../page';
import _ from 'lodash';
import { is } from '@/utils/is';

const props = defineProps({
    page: {
        type: Object as PropType<Page>, //PropType<FormSettingsModel>
        required: true, // 必传
    },
});
const { page } = toRefs(props);

const store = useStore();
const { selectedWidgets } = storeToRefs(store);

const formModel = ref({
    settings: {
        height: '',
        gutter: '',
        name: '',
    },
    columns: [],
} as any);

const setFormModel = (value: any) => {
    if (!value || value.length === 0) return;
    const firstSelectedWidget: TRowWidget = value[0];
    formModel.value = firstSelectedWidget;
};

const validate = () => {
    if (!formModel || !formModel.value) return false;
    const rexpHeight = /^(\d+(px)?|(\d{1,2}|100)%)$/;
    const rexpGutter = /^(\d+)$/;
    if ((formModel.value.height && !rexpHeight.test(formModel.value.height)) ||
        formModel.value.gutter && !rexpGutter.test(formModel.value.gutter)
    ) {
        return false;
    }
    return true;
};

const updateWidget = () => {
    if (selectedWidgets.value && selectedWidgets.value[0]) {
        page.value.updateWidget(selectedWidgets.value[0]);
    }
};

const addColumn = () => {
    const newWidget = _.cloneDeep(selectedWidgets.value[0]);
    const column = page.value.generateColumn();
    const widget = page.value.findWidget(newWidget, page.value.data.value.widgets);
    widget && widget.columns.push(column);
};

const deleteColumn = (id: string) => {
    const newWidget = _.cloneDeep(selectedWidgets.value[0]);
    const widget = page.value.findWidget(newWidget, page.value.data.value.widgets);
    if (widget && widget.columns && widget.columns.length > 0) {
        widget.columns = widget.columns.filter((x: any) => x.id !== id);
    }
};

watch(() => selectedWidgets, (newVal: any, oldVal: any) => {
    setFormModel(newVal.value);
}, { immediate: true, deep: true });

watch(() => formModel, (newVal: any) => {
    if (!validate() || !newVal) return;
    _.debounce(updateWidget, 1000);
}, { immediate: true, deep: true });


</script>

<style lang="scss" scoped>

</style>