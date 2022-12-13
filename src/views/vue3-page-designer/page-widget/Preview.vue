<template>
    <div class="container">
        <div class="widget" v-for="widget in widgets" :style="{ height: widget.settings.height, }">
            <component :is="getComponentName(widget)" :key="widget.id" :widget="widget" :page="page">
            </component>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { PropType, ref, toRefs } from 'vue';
import Page from '../page';
const props = defineProps({
    page: {
        type: Object as PropType<Page>, //PropType<FormSettingsModel>
        required: true, // 必传
    },
});
const { page } = toRefs(props);

const getComponentName = (widget: any) => {
    return widget.type + '-control';
}

const widgets = ref(
    [
        {
            "id": "60087734-663b-41ba-b370-af89e124e153",
            "name": "row-60087734-663b-41ba-b370-af89e124e153",
            "type": "row",
            "isContainer": true,
            "icon": "input",
            "columns": [{ "id": "6c3efb9e-27bd-4bd9-8a10-f04609611bdd", "name": "column-6c3efb9e-27bd-4bd9-8a10-f04609611bdd", "type": "column", "isContainer": true, "widgets": [{ "type": "zbutton", "icon": "textarea", "formItemFlag": false, "options": { "name": "", "label": "", "columnWidth": "200px", "size": "", "displayStyle": "block", "disabled": false, "hidden": false, "type": "", "plain": false, "round": false, "circle": false, "icon": null, "customClass": "", "onCreated": "", "onMounted": "", "onClick": "" }, "id": "2d18b6c8-c872-45c4-8c8a-5efae60ecdca" }], "span": 12, "settings": { "height": "100%" } }, { "id": "1e194ee4-df66-4cf1-a2d9-f911e5095e8a", "name": "column-1e194ee4-df66-4cf1-a2d9-f911e5095e8a", "type": "column", "isContainer": true, "widgets": [{ "type": "zbutton", "icon": "textarea", "formItemFlag": false, "options": { "name": "", "label": "", "columnWidth": "200px", "size": "", "displayStyle": "block", "disabled": false, "hidden": false, "type": "", "plain": false, "round": false, "circle": false, "icon": null, "customClass": "", "onCreated": "", "onMounted": "", "onClick": "" }, "id": "b227cae4-2392-4fa2-a693-18342a32b049" }], "span": 12, "settings": { "height": "100%" } }], "settings": { "height": "100%", "width": "", "hidden": false, "customClass": "" }
        }]);
</script>


<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
}
</style>