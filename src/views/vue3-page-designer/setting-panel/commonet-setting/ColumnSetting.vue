<template>
    <el-form :model="formModel" label-width="70px">
        <el-divider>基础设置</el-divider>
        <el-form-item label="名称" prop="name">
            <el-input v-model="formModel.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="栅格高度" prop="height">
            <el-input v-model="formModel.settings.height"></el-input>
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