const sortOrderSmacss = require('stylelint-config-property-sort-order-smacss/generate');

module.exports = {
	extends: [
		// 'stylelint-config-standard',
		'stylelint-config-prettier',
		'stylelint-config-idiomatic-order',
		'stylelint-config-property-sort-order-smacss',
	],
	plugins: ['stylelint-order'],
	rules: {
		'order/order': [
			[
				'dollar-variables',
				'custom-properties',
				'at-rules',
				'declarations',
				{
					type: 'at-rule',
					name: 'supports',
				},
				{
					type: 'at-rule',
					name: 'media',
				},
				'rules',
			],
			{ severity: 'warning' },
		],
		'order/properties-order': [sortOrderSmacss({ emptyLineBefore: 'always' })],
	},
};
