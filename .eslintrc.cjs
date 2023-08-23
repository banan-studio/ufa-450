module.exports = {
	root: true,
	extends: ['@nuxtjs/eslint-config-typescript', '@taknepoidet-config/eslint-config'],
	rules: {
		'no-undef': 0,
		'newline-per-chained-call': 0,
		'@typescript-eslint/restrict-plus-operands': 0,
		'@typescript-eslint/restrict-template-expressions': 0,
		'@typescript-eslint/method-signature-style': 1,
		'@typescript-eslint/require-array-sort-compare': 0,
		'import/extensions': [
			2,
			{
				ts: 'never',
				vue: 'always',
				svg: 'always',
				scss: 'always'
			}
		]
	},
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				'max-len': 0,
				'vue/no-v-model-argument': 0,
				'vue/multi-word-component-names': 0,
				'vue/no-v-for-template-key': 0,
				'@typescript-eslint/consistent-type-imports': 2
			}
		}
	]
};
