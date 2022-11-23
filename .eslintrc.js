module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'jsx-quotes': ['error', 'prefer-double'],
        'import/no-unresolved': 'off',
        'react/jsx-filename-extension': 'off',
        'max-len': ['error', { code: 100, tabWidth: 2 }],
        // 'operator-linebreak': 'off',
        // 'implicit-arrow-linebreak': 'off',
    },
};
