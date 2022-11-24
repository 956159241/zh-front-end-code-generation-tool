<template>
    <div class="box">
        <div class="header">
            {{ t('sys.header.name') }}
            <el-select @change="changLan" v-model="lang">
                <el-option label="中文" value="中文"></el-option>
                <el-option label="英文" value="英文"></el-option>
            </el-select>
        </div>
        <div class="content">
            <splitpanes class="default-theme" style="height: 100%">
                <pane :size="25"> <span>1</span> </pane>
                <pane :size="50"> <span>2</span> </pane>
                <pane :size="25"> <span>3</span> </pane>
            </splitpanes>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useLocale } from '@/locales/useLocale';
import { ref } from 'vue';

const { changeLocale } = useLocale();
const { t } = useI18n();

const lang = ref('中文');

const changLan = (val: string) => {
    changeLocale(val === '中文' ? 'zh_CN' : 'en');

};


</script>

<style lang="scss" scoped>
.box {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    .header {
        height: 50px;
        overflow: hidden;
    }

    .content {
        flex: 1;
    }
}
</style>
  