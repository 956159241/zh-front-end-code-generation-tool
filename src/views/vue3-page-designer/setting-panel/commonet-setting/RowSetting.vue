<template>

    <el-form :model="formModel">
        <el-divider>基础设置</el-divider>
        <span>{{ selectedWidgets[0] && selectedWidgets[0].id }}</span>
        <el-form-item label="栅格高度">
            <el-input></el-input>
        </el-form-item>
        <el-form-item label="栅格间隔">
            <el-input></el-input>
        </el-form-item>
        <el-divider>栅格列</el-divider>
        <el-form-item v-for="(item, index) in selectedWidgets[0] ? selectedWidgets[0].cols : []" :key="index">
            <div style="width: 100%; display: flex;">
                <div style="width: 30px; padding-right: 15px;">列{{ index + 1 }}</div>
                <div style="flex: 1;"><el-input type="number"></el-input></div>
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

<script lang="ts" setup>
import { ref, watch } from 'vue';

import { useStore } from '../../store';
import { storeToRefs } from 'pinia';

const store = useStore();
const { selectedWidgets } = storeToRefs(store);

// const selectedWidget = ref(selectedWidgets.value[0] as any);

const formModel = ref({} as any);

watch(selectedWidgets, (newVal: any) => {
    console.log(newVal);
});

</script>

<style lang="scss" scoped>

</style>