<template>

  <el-col>
    <draggable :list="[{}, {}, {}]" item-key="id" v-bind="{ group: 'dragGroup', ghostClass: 'ghost', animation: 200 }"
      tag="transition-group" :component-data="{ name: 'fade' }" handle=".drag-handler">
      <template #item="{ element: subWidget, index: swIdx }">
        <div class="form-widget-list">
          <component :is="ZHButton" :field="subWidget" :key="subWidget.id" :index-of-parent-list="swIdx"
            :parent-widget="null" :design-state="true">
          </component>
        </div>
      </template>
    </draggable>

    <!-- <div class="grid-col-action" v-if="designer.selectedId === widget.id && widget.type === 'grid-col'">
      <i :title="i18nt('designer.hint.selectParentWidget')" @click.stop="selectParentWidget(widget)">
        <svg-icon icon-class="el-back" />
      </i>
      <i v-if="!!parentList && (parentList.length > 1)" :title="i18nt('designer.hint.moveUpWidget')"
        @click.stop="moveUpWidget()">
        <svg-icon icon-class="el-move-up" />
      </i>
      <i v-if="!!parentList && (parentList.length > 1)" :title="i18nt('designer.hint.moveDownWidget')"
        @click.stop="moveDownWidget()">
        <svg-icon icon-class="el-move-down" />
      </i>
      <i :title="i18nt('designer.hint.cloneWidget')" @click.stop="cloneGridCol(widget)">
        <svg-icon icon-class="el-clone" />
      </i>
      <i :title="i18nt('designer.hint.remove')" @click.stop="removeWidget">
        <svg-icon icon-class="el-delete" />
      </i>
    </div>

    <div class="grid-col-handler" v-if="designer.selectedId === widget.id && widget.type === 'grid-col'">
      <i>{{ i18nt('designer.widgetLabel.' + widget.type) }}</i>
    </div> -->
  </el-col>

</template>

<script lang="ts" setup>
import ZHButton from '../../../widget-lib/widgets/button-widget.vue';

const selectField = (field: any) => {
  // if (!!this.designer) {
  //   this.designer.setSelected(field)
  //   this.designer.emitEvent('field-selected', this.parentWidget)  //发送选中组件的父组件对象
  // }
};

</script>

<style lang="scss" scoped>
.widget-wrapper {
  position: relative;

  .field-action {
    position: absolute;
    bottom: 0;
    right: 5px;
    height: 22px;
    line-height: 22px;
    z-index: 9;

    i {
      font-size: 14px;
      color: var(--el-color-primary);
      margin: 0 5px;
      cursor: pointer;
    }
  }

  .drag-handler {
    position: absolute;
    top: 0;
    //bottom: -22px;  /* 拖拽手柄位于组件下方，有时无法正常拖动，原因未明？？ */
    left: 5px;
    height: 16px;
    line-height: 16px;
    background: var(--el-color-primary);
    opacity: 0.5;
    z-index: 9;

    .iconfont {
      font-size: 12px;
      font-style: normal;
      color: white;
      margin: 4px;
      cursor: move;
    }

    &:hover {
      //opacity: 1;
      // background: red;
    }
  }
}

.field-action,
.drag-handler {
  :deep(.svg-icon) {
    margin-left: 0.1em;
    margin-right: 0.1em;
  }
}

.static-content-item {
  outline: 2px solid var(--el-color-primary);
  min-height: 20px;
  display: flex;
  /* 垂直居中 */
  align-items: center;
  // margin: 5px;
  /* 垂直居中 */
  margin: 5px;

  :deep(.el-divider--horizontal) {
    margin: 0;
  }
}

.el-form-item.selected,
.static-content-item.selected {
  outline: 2px solid var(--el-color-primary)
}

.background-opacity {
  background: rgba(255, 0, 0, 0.5);
}
</style>

<!-- <script>
export default {
  name: "widget-wrapper",
  mixins: [i18n],
  components: {
    SvgIcon
  },
  props: {
    field: Object,
    designer: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,

    designState: {
      type: Boolean,
      default: false
    },

    displayStyle: {
      type: String,
      default: 'block'
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
  computed: {
    selected() {
      return !!this.designer && this.field.id === this.designer.selectedId
    },

    customClass() {
      return !!this.field.options.customClass ? this.field.options.customClass.join(' ') : ''
    },

  },
  methods: {

    selectField(field) {
      if (!!this.designer) {
        this.designer.setSelected(field)
        this.designer.emitEvent('field-selected', this.parentWidget)  //发送选中组件的父组件对象
      }
    },

    selectParentWidget() {
      if (this.parentWidget) {
        this.designer.setSelected(this.parentWidget)
      } else {
        this.designer.clearSelected()
      }
    },

    moveUpWidget() {
      this.designer.moveUpWidget(this.parentList, this.indexOfParentList)
      this.designer.emitHistoryChange()
    },

    moveDownWidget() {
      this.designer.moveDownWidget(this.parentList, this.indexOfParentList)
      this.designer.emitHistoryChange()
    },

    removeFieldWidget() {
      if (!!this.parentList) {
        let nextSelected = null
        if (this.parentList.length === 1) {
          if (!!this.parentWidget) {
            nextSelected = this.parentWidget
          }
        } else if (this.parentList.length === (1 + this.indexOfParentList)) {
          nextSelected = this.parentList[this.indexOfParentList - 1]
        } else {
          nextSelected = this.parentList[this.indexOfParentList + 1]
        }

        this.$nextTick(() => {
          this.parentList.splice(this.indexOfParentList, 1)
          //if (!!nextSelected) {
          this.designer.setSelected(nextSelected)
          //}

          this.designer.emitHistoryChange()
        })
      }
    },

  }
}
</script>

<style lang="scss" scoped>
@import "../../../../styles/global.scss";

.design-time-bottom-margin {
  margin-bottom: 5px;
}

.widget-wrapper {
  position: relative;

  .field-action {
    position: absolute;
    //bottom: -24px;
    bottom: 0;
    right: -2px;
    height: 22px;
    line-height: 22px;
    background: $--color-primary;
    z-index: 9;

    i {
      font-size: 14px;
      color: #fff;
      margin: 0 5px;
      cursor: pointer;
    }
  }

  .drag-handler {
    position: absolute;
    top: 0;
    //bottom: -22px;  /* 拖拽手柄位于组件下方，有时无法正常拖动，原因未明？？ */
    left: -1px;
    height: 20px;
    line-height: 20px;
    //background: $--color-primary;
    z-index: 9;

    i {
      font-size: 12px;
      font-style: normal;
      color: #fff;
      margin: 4px;
      cursor: move;
    }

    &:hover {
      //opacity: 1;
      background: $--color-primary;
    }
  }
}

.field-action,
.drag-handler {
  :deep(.svg-icon) {
    margin-left: 0.1em;
    margin-right: 0.1em;
  }
}

.static-content-item {
  min-height: 20px;
  display: flex;
  /* 垂直居中 */
  align-items: center;
  /* 垂直居中 */

  :deep(.el-divider--horizontal) {
    margin: 0;
  }
}

.el-form-item.selected,
.static-content-item.selected {
  outline: 2px solid $--color-primary;
}
</style> -->
