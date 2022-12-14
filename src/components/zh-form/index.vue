<template>
  <el-form class="zh-form" v-bind="$attrs" ref="refForm" :model="modelValue" :rules="rules"
    :label-width="formSettings?.formLabelWidth || 'auto'" type="flex" inline justify="end"
    style="flex-wrap: wrap; flex-direction: row">
    <el-row style="display: flex; flex-wrap: wrap">
      <TransitionGroup name="list">
        <el-col v-for="(item, index) in fieldList" :key="index" :span="item.span || 0" :xl="item.xl || item.span || 0"
          :lg="item.lg || item.span || 0" :md="item.md || item.span || 0" :sm="item.sm || item.span || 0"
          :xs="item.xs || item.span || 0" :style="{
            maxWidth:
              item.span === undefined && item.xl === undefined &&
                item.lg === undefined && item.md === undefined &&
                item.sm === undefined && item.xs === undefined
                ? Number(item.width) + Number(item.labelWidth) + 'px'
                : ''
          }">
          <el-form-item :key="'form-item' + index" :label="item.label" :prop="item.prop" :label-width="item.labelWidth"
            v-show="!item.hide">
            <!-- 输入框 -->
            <el-input v-if="item.type === 'input'" :style="{ width: item.width ? `${item.width}` : '100%' }"
              v-model="modelValue[item.prop]" :placeholder="item.placeholder" :disabled="item.disabled === undefined ? false :
              typeof item.disabled === 'boolean' ? item.disabled : item.disabled(modelValue)" :type="item.inputType"
              :clearable="item.clearable"></el-input>

            <!-- 文本显示 -->
            <span v-if="item.type === 'text'" :style="{ width: item.width ? `${item.width}` : '100%' }">{{
                modelValue[item.prop]
            }}</span>

            <!-- 开关 -->
            <el-switch v-else-if="item.type === 'switch'" :active-text="item.activeText"
              :inactive-text="item.inactiveText" :active-value="item.activeValue" :inactive-value="item.inactiveValue"
              v-model="modelValue[item.prop]" />

            <!-- 数字输入框 :min="1" :max="10" -->
            <el-input-number v-else-if="item.type === 'input-number'"
              :style="{ width: item.width ? `${item.width}` : '100%' }" v-model="modelValue[item.prop]"
              :placeholder="item.placeholder" :disabled="item.disabled === undefined ? false :
              typeof item.disabled === 'boolean' ? item.disabled : item.disabled(modelValue)"
              :clearable="item.clearable" />

            <!-- 下拉 -->
            <el-select v-else-if="item.type === 'select'" v-model="modelValue[item.prop]"
              :style="{ width: item.width ? `${item.width}` : '100%' }" :value-key="item.valueKey" :disabled="item.disabled === undefined ? false :
              typeof item.disabled === 'boolean' ? item.disabled : item.disabled(modelValue)" :multiple="item.multiple"
              filterable clearable :remote="item.remote" :remote-method="item.remoteMethod" :placeholder="
                item.placeholder
                  ? item.placeholder
                  : item.remoteMethod
                    ? '请输入选择'
                    : '请选择'
              ">
              <el-option
                v-for="(subItem, subIndex) in (item.options as Array<TZHFromFieldSelectOption> | Array<{ [x: string]: any }>)"
                :key="item.valueKey ? subItem[item.valueKey] : subIndex" :label="subItem.label"
                :value="item.valueKey ? subItem : subItem.value"></el-option>
            </el-select>

            <!-- 日期选择 -->
            <el-date-picker v-else-if="item.type === 'date-picker'" v-model="modelValue[item.prop]" :disabled="item.disabled === undefined ? false :
            typeof item.disabled === 'boolean' ? item.disabled : item.disabled(modelValue)" :type="item.timeType"
              :format="item.timeShowFormat" :value-format="item.timeValueFormat"
              :placeholder="item.placeholder || '请选择'" :style="{ width: item.width ? `${item.width}` : '100%' }"
              :clearable="item.clearable"></el-date-picker>

            <!-- 级联选择器  -->
            <el-cascader v-else-if="item.type === 'cascader'" :options="item.options" :props="item.props"
              :style="{ width: item.width ? `${item.width}` : '100%' }"
              @change="formInstance.changeCascader(itemRefs, item.refName, formSettings)" :ref="(el: any) => {
                if (item.refName) itemRefs[item.refName] = el;
              }" v-model="modelValue[item.prop]" :clearable="item.clearable" />

            <!-- 单选框组 -->
            <el-radio-group v-else-if="item.type === 'radio-group'" v-model="modelValue[item.prop]"
              :style="{ width: item.width ? `${item.width}` : '100%' }">
              <el-radio v-for="(subItem, subIndex) in (item.options as Array<TZHFromFieldSelectOption>)" :key="subIndex"
                :label="subItem.value">{{ subItem.label }}</el-radio>
            </el-radio-group>

            <!-- 多选框 -->
            <el-checkbox v-else-if="item.type === 'checkbox'" v-model="modelValue[item.prop]" :label="item.checkboxText"
              :size="item.checkboxSize || 'default'" />

            <!-- 自定义筛选内容 -->
            <template v-else-if="item.type === 'slot'">
              <slot :name="'zh-form-' + item.prop" />
            </template>
          </el-form-item>
        </el-col>

      </TransitionGroup>
      <slot></slot>
    </el-row>
    <slot name="zh-form-next-row"></slot>

    <el-divider v-if="formSettings?.hideUnimportantFields">
      <el-button v-if="formInstance.hideUnimportantFields.value" size="large" class="unfolder" type="primary" link
        :icon="ArrowDown" @click="() => formInstance.hideUnimportantFields.value = false" />
      <el-button v-else type="primary" link :icon="ArrowUp" size="large" class="folder"
        @click="() => formInstance.hideUnimportantFields.value = true" />
    </el-divider>
  </el-form>
</template>

<script setup lang="ts">

import { toRefs, PropType, ref, computed, onMounted, watch } from 'vue';
import Form from './index';
import { TZHFormSettings, TZHFromFieldSelectOption, TZHFromField } from './type';
import { RefreshLeft, Search, Delete, Download, DocumentChecked, Refresh, Upload, Edit, ArrowUp, ArrowDown } from '@element-plus/icons-vue';

const props = defineProps({
  modelValue: {
    type: Object as PropType<any>,
  },

  convertedModel: {
    type: Object as PropType<any>,
  },

  formSettings: {
    type: Object as PropType<TZHFormSettings>,
  },
});

const { modelValue, formSettings, convertedModel } = toRefs(props);
const refForm = ref();
const itemRefs = ref([] as any);
const emit = defineEmits(['update:modelValue', 'update:convertedModel']);

const formInstance = new Form({ emit, refForm, formSettings, modelValue, convertedModel });

const fieldList = computed(() => {
  if (formInstance.hideUnimportantFields.value) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return formSettings!.value!.fields!.filter((x: TZHFromField) => !x.unimportant);
  } else {
    return formSettings?.value?.fields;
  }
});

const rules = computed(() => {
  const newRules = {};
  const fields: TZHFromField[] = formSettings!.value!.fields || [];
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].required) {
      const requireMsg = fields[i].type === 'input' ? '请输入' : '请选择';
      const requireEvent = fields[i].type === 'input' ? 'blur' : 'change';
      // eslint-disable-next-line no-prototype-builtins
      if (fields[i].hasOwnProperty(fields[i].prop)) {
        newRules[fields[i].prop].push({ required: true, message: requireMsg + fields[i].label, trigger: requireEvent });
      } else {
        newRules[fields[i].prop] = [];
        newRules[fields[i].prop].push({ required: true, message: requireMsg + fields[i].label, trigger: requireEvent });
      }
    }
  }
  if (formSettings?.value?.rules) {
    const keys = Object.keys(formSettings?.value?.rules);
    keys.forEach((key: any) => {
      newRules[key] = formSettings?.value?.rules && formSettings.value.rules[key];
    });
  }

  return newRules;
});

onMounted(() => {
  formInstance.init();
});

watch(modelValue?.value, (newVal:any) => {
  formInstance.setConvertModel(newVal);
  // if (!convertedModel) return;
  // convertedModel.value = JSON.parse(JSON.stringify(newVal));
  // if (!convertedModel.value) return;
  // formInstance.useConvert(newVal, convertedModel.value, fieldList.value || []);
  // formInstance.useConvertDateTime(newVal, convertedModel.value, fieldList.value || []);
  // formInstance.useExtendedFieldMethod(newVal, convertedModel.value, fieldList.value || []);
});

defineExpose({
  validate: formInstance.validate,
  init: formInstance.init
});
</script>

<script lang="ts">
export default { name: 'ZHForm' };
</script>

<style lang="scss" scoped>
.zh-form {
  transition-duration: 2s;
  transition: height 10s;

  .el-form-item {
    width: 100%;
  }

  &:deep(.el-col.el-col-0) {
    display: block;
    max-width: none !important;
  }

  .el-divider--horizontal {
    margin-bottom: 10px;
  }

}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.folder,
.unfolder {
  font-size: 24px;
}
</style>

<style lang="scss">

</style>
