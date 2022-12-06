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
                <div style="flex: 1;"><el-input type="number" v-model="item.settings.span"></el-input></div>
                <div style="width: 30px; padding-left: 7px; cursor: pointer;"><el-icon style="color: red;">
                        <Delete />
                    </el-icon></div>
            </div>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="width: 100%;">添加新列</el-button>
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

// const setFormModel = (value: any) => {
//     if (!value || value.length === 0) return;
//     const firstSelectedWidget: TRowWidget = value[0];
//     formModel.value = firstSelectedWidget;
// };

// const validate = () => {
//     if (!formModel || !formModel.value) return false;
//     const rexpHeight = /^(\d+(px)?|(\d{1,2}|100)%)$/;
//     const rexpGutter = /^(\d+)$/;
//     if ((formModel.value.height && !rexpHeight.test(formModel.value.height)) ||
//         formModel.value.gutter && !rexpGutter.test(formModel.value.gutter)
//     ) {
//         return false;
//     }
//     return true;
// };

// const updateWidget = () => {
//     if (selectedWidgets && selectedWidgets[0]) {
//         page.value.updateWidget(selectedWidgets[0]);
//     }
// };

// onMounted(() => {
//     setFormModel(selectedWidgets.value);
// });

// watch(() => selectedWidgets, (newVal: any, oldVal: any) => {
//     setFormModel(newVal);
// }, { immediate: true, deep: true });

// watch(() => formModel, (newVal: any) => {
//     if (!validate()) return;
//     _.debounce(updateWidget, 1000);
// }, { immediate: true, deep: true });


</script>

<style lang="scss" scoped>

</style>