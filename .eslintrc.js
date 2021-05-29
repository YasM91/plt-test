module.exports = {
    env: {
        browser: true,
        es2021: true,
        'cypress/globals': true
    },
    extends: [
        'react-app',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
        'plugin:cypress/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'jsx-a11y',
        'jest-dom',
        'testing-library',
        'cypress',
        '@typescript-eslint',
        'simple-import-sort'
    ],
    ignorePatterns: ['/cypress/integration/examples', '/build']
};
