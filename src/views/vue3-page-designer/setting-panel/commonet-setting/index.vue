<template>
    <el-scrollbar class="box">
        <RowSetting></RowSetting>
    </el-scrollbar>

</template>

<script lang="ts" setup>
import { PropType, toRefs } from 'vue';
import Page from '../../page';
import RowSetting from './RowSetting.vue';

const props = defineProps({
    page: {
        type: Object as PropType<Page>, //PropType<FormSettingsModel>
        required: true, // 必传
    },
});
const { page } = toRefs(props);
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100%;

    &:deep(.el-divider__text) {
        background-color: rgb(242, 242, 242);
    }
}
</style>