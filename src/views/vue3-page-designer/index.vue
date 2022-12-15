<template>
    <div class="box">
        <div class="header">
            {{ t('sys.header.name') }}
            <el-select @change="changLan" v-model="lang">
                <el-option label="中文" value="中文"></el-option>
                <el-option label="英文" value="英文"></el-option>
            </el-select>

            <el-button link @click="toggleFullScreen" type="primary">{{ isFullScreen ? '退出全屏' : '全屏' }}</el-button>
        </div>
        <div class="content" id="content-box">
            <splitpanes class="default-theme" style="height: 100%">
                <pane :size="25" class="pane">
                    <widget-panel :page="page"></widget-panel>
                </pane>
                <pane :size="50" class="pane">
                    <page-widget :page="page"></page-widget>
                </pane>
                <pane :size="25" class="pane">
                    <setting-panel :page="page"></setting-panel>
                </pane>
            </splitpanes>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useLocale } from '@/locales/useLocale';
import { ref } from 'vue';
import WidgetPanel from './widget-panel/index.vue';
import SettingPanel from './setting-panel/index.vue';
import PageWidget from './page-widget/index.vue';
import { TPage } from './type';
import { v4 as uuidv4 } from 'uuid';
import Page from './page';
import UIHelper from './uiHelper';

const { changeLocale } = useLocale();
const { t } = useI18n();

const lang = ref('中文');

const dom = document.getElementById('test');

const changLan = (val: string) => {
    changeLocale(val === '中文' ? 'zh_CN' : 'en');
};

const page = new Page();

const isFullScreen = ref(false);
const toggleFullScreen = () => {
    const dom: Element = document.getElementsByClassName('box')[0];
    UIHelper.toggleFullScreen(dom, !isFullScreen.value);
    isFullScreen.value = !isFullScreen.value;
};

</script>

<style lang="scss" scoped>
.box {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;

    .header {
        height: 50px;
        overflow: hidden;
    }

    .content {
        flex: 1;
        overflow: hidden;
        height: 100%;
        padding: 10px;
    }

    .pane {
        padding: 0px 10px;
    }
}
</style>
  