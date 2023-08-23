module.exports = {
	extends: ['@taknepoidet-config/stylelint'],
	rules: {
		'declaration-property-value-no-unknown': null,
		// 'declaration-colon-newline-after': null,
		'scss/double-slash-comment-whitespace-inside': null,
		'custom-property-pattern': null,
		'import-notation': null,
		'order/order': [
			[
				'dollar-variables',
				'custom-properties',
				'at-rules',
				'declarations',
				'rules',
				{
					type: 'at-rule',
					name: 'supports'
				},
				{
					type: 'at-rule',
					name: 'media'
				}
			],
			{ severity: 'warning' }
		]
	}
};
