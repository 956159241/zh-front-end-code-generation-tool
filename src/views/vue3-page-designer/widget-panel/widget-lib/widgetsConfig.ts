import { TRowWidget, TWidget } from '../../type';

export const customControls = [
	{
		id: '',
		name: '',
		type: 'zhtable',
		icon: 'input',
		settings: {

		},
	},
];

export const containerControls: Array<TRowWidget> = [
	{
		id: '',
		name: '',
		type: 'row',
		isContainer: true,
		icon: 'input',
		columns: [],
		settings: {
			height: '42px',
			width: '',
			hidden: false,
			customClass: '',
		},
	},
];

export const basicControls = [
	{
		type: 'zbutton',
		icon: 'textarea',
		isContainer: false,
		settings: {
			style: {
				display: 'inline'
			}
		}
		// options: {
		// 	name: '',
		// 	label: '',
		// 	columnWidth: '200px',
		// 	size: '',
		// 	displayStyle: 'block',
		// 	disabled: false,
		// 	hidden: false,
		// 	type: '',
		// 	plain: false,
		// 	round: false,
		// 	circle: false,
		// 	icon: null,
		// 	//-------------------
		// 	customClass: '', //自定义css类名
		// 	//-------------------
		// 	onCreated: '',
		// 	onMounted: '',
		// 	onClick: '',
		// },
	},
];

export const advancedControls = [
	{
		type: 'picture-upload',
		icon: 'picture-upload-field',
		formItemFlag: true,
		options: {
			name: '',
			label: '',
			labelAlign: '',
			labelWidth: null,
			labelHidden: false,
			columnWidth: '200px',
			disabled: false,
			hidden: false,
			required: false,
			requiredHint: '',
			customRule: '',
			customRuleHint: '',
			//-------------------
			uploadURL: '',
			uploadTip: '',
			withCredentials: false,
			multipleSelect: false,
			showFileList: true,
			limit: 3,
			fileMaxSize: 5, //MB
			fileTypes: ['jpg', 'jpeg', 'png'],
			//headers: [],
			//-------------------
			customClass: '', //自定义css类名
			labelIconClass: null,
			labelIconPosition: 'rear',
			labelTooltip: null,
			//-------------------
			onCreated: '',
			onMounted: '',
			onBeforeUpload: '',
			onUploadSuccess: '',
			onUploadError: '',
			onFileRemove: '',
			onValidate: '',
			//onFileChange: '',
		},
	},

	{
		type: 'file-upload',
		icon: 'file-upload-field',
		formItemFlag: true,
		options: {
			name: '',
			label: '',
			labelAlign: '',
			labelWidth: null,
			labelHidden: false,
			columnWidth: '200px',
			disabled: false,
			hidden: false,
			required: false,
			requiredHint: '',
			customRule: '',
			customRuleHint: '',
			//-------------------
			uploadURL: '',
			uploadTip: '',
			withCredentials: false,
			multipleSelect: false,
			showFileList: true,
			limit: 3,
			fileMaxSize: 5, //MB
			fileTypes: ['doc', 'docx', 'xls', 'xlsx'],
			//headers: [],
			//-------------------
			customClass: '', //自定义css类名
			labelIconClass: null,
			labelIconPosition: 'rear',
			labelTooltip: null,
			//-------------------
			onCreated: '',
			onMounted: '',
			onBeforeUpload: '',
			onUploadSuccess: '',
			onUploadError: '',
			onFileRemove: '',
			onValidate: '',
			//onFileChange: '',
		},
	},

	{
		type: 'rich-editor',
		icon: 'rich-editor-field',
		formItemFlag: true,
		options: {
			name: '',
			label: '',
			labelAlign: '',
			placeholder: '',
			labelWidth: null,
			labelHidden: false,
			columnWidth: '200px',
			contentHeight: '200px',
			disabled: false,
			hidden: false,
			required: false,
			requiredHint: '',
			customRule: '',
			customRuleHint: '',
			//-------------------
			customClass: '', //自定义css类名
			labelIconClass: null,
			labelIconPosition: 'rear',
			labelTooltip: null,
			minLength: null,
			maxLength: null,
			showWordLimit: false,
			//-------------------
			onCreated: '',
			onMounted: '',
			onValidate: '',
		},
	},

	{
		type: 'cascader',
		icon: 'cascader-field',
		formItemFlag: true,
		options: {
			name: '',
			label: '',
			labelAlign: '',
			defaultValue: '',
			placeholder: '',
			size: '',
			labelWidth: null,
			labelHidden: false,
			columnWidth: '200px',
			disabled: false,
			hidden: false,
			clearable: true,
			filterable: false,
			multiple: false,
			checkStrictly: false, //可选择任意一级选项，默认不开启
			showAllLevels: true, //显示完整路径
			optionItems: [
				{
					label: 'select 1',
					value: 1,
					children: [{ label: 'child 1', value: 11 }],
				},
				{ label: 'select 2', value: 2 },
				{ label: 'select 3', value: 3 },
			],
			required: false,
			requiredHint: '',
			customRule: '',
			customRuleHint: '',
			//-------------------
			customClass: '', //自定义css类名
			labelIconClass: null,
			labelIconPosition: 'rear',
			labelTooltip: null,
			//-------------------
			onCreated: '',
			onMounted: '',
			onChange: '',
			onFocus: '',
			onBlur: '',
			onValidate: '',
		},
	},
];

// export function addContainerWidgetSchema(containerSchema) {
// 	containers.push(containerSchema);
// }

// export function addBasicFieldSchema(fieldSchema) {
// 	basicFields.push(fieldSchema);
// }

// export function addAdvancedFieldSchema(fieldSchema) {
// 	advancedFields.push(fieldSchema);
// }

// export function addCustomWidgetSchema(widgetSchema) {
// 	customFields.push(widgetSchema);
// }
