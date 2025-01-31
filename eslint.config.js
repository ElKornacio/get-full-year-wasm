const ts = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const importPlugin = require('eslint-plugin-import');
const preferArrow = require('eslint-plugin-prefer-arrow');

module.exports = [
	{
		files: ['src/*.ts'],
		// extends: [
		// 	'plugin:@typescript-eslint/recommended',
		// 	'plugin:@typescript-eslint/recommended-requiring-type-checking',
		// 	'prettier',
		// 	'plugin:import/warnings',
		// 	'plugin:import/typescript',
		// ],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaFeatures: {
					modules: true,
				},
				ecmaVersion: 'latest',
				project: './tsconfig.json',
			},
		},

		plugins: {
			'prefer-arrow': preferArrow,
			'import': importPlugin,
			'@typescript-eslint': ts,
			ts,
		},
		settings: {
			'import/no-unresolved': { commonjs: true, amd: true },
			'import/resolver': { typescript: true, node: true },
			'import/order': {
				groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
			},
		},

		rules: {
			...ts.configs['eslint-recommended'].rules,
			...ts.configs['recommended'].rules,

			'import/order': [
				'error',
				{
					'groups': ['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object', 'type'],
					'newlines-between': 'always',
				},
			],
			'import/export': 'error',
			'import/no-nodejs-modules': 'error',
			'import/no-cycle': 'error',
			'@typescript-eslint/adjacent-overload-signatures': 'error',
			'@typescript-eslint/array-type': [
				'error',
				{
					default: 'array',
				},
			],
			// '@typescript-eslint/ban-types': [
			// 	'error',
			// 	{
			// 		types: {
			// 			Object: {
			// 				message: 'Avoid using the `Object` type. Did you mean `object`?',
			// 			},
			// 			Function: {
			// 				message:
			// 					'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
			// 			},
			// 			Boolean: {
			// 				message: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
			// 			},
			// 			Number: {
			// 				message: 'Avoid using the `Number` type. Did you mean `number`?',
			// 			},
			// 			String: {
			// 				message: 'Avoid using the `String` type. Did you mean `string`?',
			// 			},
			// 			Symbol: {
			// 				message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
			// 			},
			// 		},
			// 	},
			// ],
			'@typescript-eslint/consistent-type-assertions': 'error',
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/dot-notation': 'error',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/indent': 'off',
			'@typescript-eslint/member-delimiter-style': [
				'off',
				{
					multiline: {
						delimiter: 'none',
						requireLast: true,
					},
					singleline: {
						delimiter: 'semi',
						requireLast: false,
					},
				},
			],
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'variable',
					format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
					leadingUnderscore: 'allow',
					trailingUnderscore: 'forbid',
				},
			],
			'@typescript-eslint/no-empty-function': 'error',
			'@typescript-eslint/no-empty-interface': 'error',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-misused-new': 'error',
			'@typescript-eslint/no-namespace': 'error',
			'@typescript-eslint/no-parameter-properties': 'off',
			'@typescript-eslint/no-shadow': [
				'error',
				{
					hoist: 'all',
				},
			],
			'@typescript-eslint/no-unused-expressions': 'error',
			'@typescript-eslint/no-use-before-define': 'off',
			'@typescript-eslint/no-var-requires': 'error',
			'@typescript-eslint/prefer-for-of': 'error',
			'@typescript-eslint/prefer-function-type': 'error',
			'@typescript-eslint/prefer-namespace-keyword': 'error',
			'@typescript-eslint/quotes': 'off',
			'@typescript-eslint/semi': ['off', null],
			'@typescript-eslint/triple-slash-reference': [
				'error',
				{
					path: 'always',
					types: 'prefer-import',
					lib: 'always',
				},
			],
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-argument': 'off',
			'@typescript-eslint/no-unsafe-return': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/require-await': 'off',

			'@typescript-eslint/type-annotation-spacing': 'off',
			'@typescript-eslint/typedef': 'off',
			'@typescript-eslint/unified-signatures': 'error',

			'arrow-parens': ['off', 'always'],
			'brace-style': ['off', 'off'],
			'comma-dangle': 'off',
			'complexity': 'off',
			'constructor-super': 'error',
			'dot-notation': 'off',
			'eol-last': 'off',
			'eqeqeq': ['error', 'smart'],
			'guard-for-in': 'error',
			'id-denylist': [
				'error',
				'any',
				'Number',
				'number',
				'String',
				'string',
				'Boolean',
				'boolean',
				'Undefined',
				'undefined',
			],
			'id-match': 'error',
			'indent': 'off',
			// 'jsdoc/check-alignment': 'error',
			// 'jsdoc/check-indentation': 'error',
			// 'jsdoc/newline-after-description': 'error',
			'linebreak-style': 'off',
			'max-classes-per-file': ['error', 4],
			'max-len': 'off',
			'new-parens': 'off',
			'newline-per-chained-call': 'off',
			'no-bitwise': 'error',
			'no-caller': 'error',
			'no-cond-assign': 'error',
			'no-console': 'off',
			'no-debugger': 'error',
			'no-empty': 'error',
			'no-empty-function': 'off',
			'no-eval': 'error',
			'no-extra-semi': 'off',
			'no-fallthrough': 'off',
			'no-invalid-this': 'off',
			'no-irregular-whitespace': 'off',
			'no-multiple-empty-lines': 'off',
			'no-new-wrappers': 'error',
			'no-shadow': 'off',
			'no-throw-literal': 'error',
			'no-trailing-spaces': 'off',
			'no-undef-init': 'error',
			'no-underscore-dangle': 'off',
			'no-unsafe-finally': 'error',
			'no-unused-expressions': 'off',
			'no-unused-labels': 'error',
			'no-use-before-define': 'off',
			'no-var': 'error',
			'object-shorthand': 'error',
			'one-var': ['error', 'never'],
			'padded-blocks': [
				'off',
				{
					blocks: 'never',
				},
				{
					allowSingleLineBlocks: true,
				},
			],
			'prefer-arrow/prefer-arrow-functions': 'error',
			'prefer-const': 'error',
			'quote-props': 'off',
			'quotes': 'off',
			'radix': 'error',
			'semi': 'off',
			'space-before-function-paren': 'off',
			'space-in-parens': ['off', 'never'],
			'spaced-comment': [
				'error',
				'always',
				{
					markers: ['/'],
				},
			],
			'use-isnan': 'error',
			'valid-typeof': 'off',
		},
	},
];
