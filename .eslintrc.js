module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
    ],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    rules: {
        // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': ['error', 4, { 'SwitchCase': 1, 'ImportDeclaration': 'off' }],
        'comma-dangle': 'off',
        'space-before-function-paren': 'off',
        'no-return-assign': 'off',
        'template-curly-spacing': 'off',
        'prefer-const': 'off',
        'no-unused-vars': 'off'
    },
    parserOptions: {
        sourceType: 'module',
    },
}
