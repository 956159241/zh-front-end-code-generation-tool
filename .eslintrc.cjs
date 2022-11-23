/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier',
		'prettier',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		semi: 2,
		//引号类型 `` "" ''
		quotes: [1, 'single'],
		indent: ['tab'],
		'no-console': 0,
		'linebreak-style': 0,
		// 针对vue3不需要添加根节点问题
		'vue/no-multiple-template-root': 0,
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'none',
				},
				singleline: {
					delimiter: 'comma',
				},
			},
		],
		'@typescript-eslint/no-explicit-any': 'off',
		// "space-before-function-paren": ["error", "never"],
		'vue/array-bracket-spacing': 'error',
		'vue/arrow-spacing': 'error',
		'vue/block-spacing': 'error',
		'vue/object-curly-spacing': 'off',
		'vue/brace-style': 'error',
		'vue/camelcase': 'error',
		'vue/comma-dangle': 'error',
		'vue/component-name-in-template-casing': 'error',
		'vue/eqeqeq': 'error',
		'vue/key-spacing': 'error',
		'vue/match-component-file-name': 'error',
		'vue/no-v-model-argument': 'off',
		'vue/no-mutating-props': 'off',
		'vue/comment-directive': 'off',
		'no-useless-escape': 'off',
		'vue/no-parsing-error': 'off',
		'@typescript-eslint/no-this-alias': [
			'error',
			{
				allowDestructuring: true, // Allow `const { props, state } = this`; false by default
				allowedNames: ['self'], // Allow `const self = this`; `[]` by default
			},
		],
		'vue/attribute-hyphenation': 'off',
		'vue/custom-event-name-casing': 'off',
	},
};
