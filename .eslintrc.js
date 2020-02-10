module.exports = {
	env: {
		browser: true,
    es6: true,
    jest: true
	},
	globals: {
		process: true,
		module: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
	],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2018,
	},
	rules: {
		'no-console': [
			'off', // TODO enable this rule!
		],
		'no-var': ['error'],
		'no-debugger': ['warn'],
		'no-unused-vars': ['warn', { 'ignoreRestSiblings': true }],
		indent: ['warn', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single', { avoidEscape: true }],
		semi: ['error', 'always'],
		curly: ['error', 'all'],
		'no-multiple-empty-lines': 'warn',
		'react/prop-types': 0,
		//'filenames/match-regex': [2, '^[a-z_]+$', true],
	},
	settings: {
		react: {
			version: require('./package.json').dependencies.react,
		},
	},
};
