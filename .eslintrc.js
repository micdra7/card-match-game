module.exports = {
	'env': {
		'commonjs': true,
		'es6': true,
		'jest': true,
		'browser': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'rules': {
		'no-console': 'off',
		'react/prop-types': 0,
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'eqeqeq': [
			'error',
			'always'
		]
	}
};