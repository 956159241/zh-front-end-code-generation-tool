<template>
  <widget-wrapper :page="page" :widget="widget">
    <!-- <el-button :type="field.options.type" :size="widgetSize" :plain="field.options.plain" :round="field.options.round"
      :circle="field.options.circle" :icon="field.options.icon" :disabled="field.options.disabled"
      @click="handleButtonWidgetClick">
      {{ field.options.label }}
    </el-button> -->
    <el-button>测试按钮</el-button>
  </widget-wrapper>
</template>

<script lang="ts" setup>
import Page from '@/views/vue3-page-designer/page';
import { PropType, toRefs } from 'vue';
import WidgetWrapper from './widget-wrapper.vue';

const props = defineProps({
  widget: {
    type: Object as PropType<any>, //PropType<FormSettingsModel>
    required: true, // 必传
  },

  page: {
    type: Object as PropType<Page>, //PropType<FormSettingsModel>
    required: true, // 必传
  },
});
const { widget, page } = toRefs(props);

</script>

<script lang="ts">
export default { name: 'zbutton' };
</script>

<!-- <script>
import StaticContentWrapper from './static-content-wrapper'
// import emitter from '@/utils/emitter'
// import i18n, {translate} from "@/utils/i18n";
// import fieldMixin from "@/components/form-designer/form-widget/field-widget/fieldMixin";

export default {
  name: "button-widget",
  // componentName: 'FieldWidget',  //必须固定为FieldWidget，用于接收父级组件的broadcast事件
  // mixins: [emitter, fieldMixin, i18n],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,

    designState: {
      type: Boolean,
      default: false
    },

    subFormRowIndex: { /* 子表单组件行索引，从0开始计数 */
      type: Number,
      default: -1
    },
    subFormColIndex: { /* 子表单组件列索引，从0开始计数 */
      type: Number,
      default: -1
    },
    subFormRowId: { /* 子表单组件行Id，唯一id且不可变 */
      type: String,
      default: ''
    },

  },
  components: {
    StaticContentWrapper,
  },
  computed: {

  },
  beforeCreate() {
    /* 这里不能访问方法和属性！！ */
  },

  created() {
    /* 注意：子组件mounted在父组件created之后、父组件mounted之前触发，故子组件mounted需要用到的prop
       需要在父组件created中初始化！！ */
    this.registerToRefList()
    this.initEventHandler()

    this.handleOnCreated()
  },

  mounted() {
    this.handleOnMounted()
  },

  beforeUnmount() {
    this.unregisterFromRefList()
  },

  methods: {

  }

}
</script> -->

<!-- <style lang="scss" scoped>
  @import "../../../../styles/global.scss"; //* static-content-wrapper已引入，还需要重复引入吗？ *//

</style> -->
