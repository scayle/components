module.exports = {
    root: false,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    extends: [
        'plugin:no-unsanitized/DOM',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:vue/vue3-recommended',
        'plugin:storybook/recommended',
    ],
    rules: {
        // Disable Vue formatting rules
        'vue/max-len': 0,
        'vue/array-bracket-newline': 'off',
        'vue/array-bracket-spacing': 'off',
        'vue/arrow-spacing': 'off',
        'vue/block-spacing': 'off',
        'vue/block-tag-newline': 'off',
        'vue/brace-style': 'off',
        'vue/comma-dangle': 'off',
        'vue/comma-spacing': 'off',
        'vue/comma-style': 'off',
        'vue/dot-location': 'off',
        'vue/func-call-spacing': 'off',
        'vue/html-self-closing': 'error',
        'vue/html-closing-bracket-newline': 'off',
        'vue/html-end-tags': 'off',
        'vue/html-indent': 'off',
        'vue/html-quotes': 'off',
        'vue/key-spacing': 'off',
        'vue/keyword-spacing': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/mustache-interpolation-spacing': 'off',
        'vue/no-extra-parens': 'off',
        'vue/no-multi-spaces': 'off',
        'vue/no-spaces-around-equal-signs-in-attribute': 'off',
        'vue/object-curly-newline': 'off',
        'vue/object-curly-spacing': 'off',
        'vue/object-property-newline': 'off',
        'vue/operator-linebreak': 'off',
        'vue/require-explicit-emits': [
            'error',
            {
                allowProps: false,
            },
        ],
        'vue/script-indent': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/space-in-parens': 'off',
        'vue/space-infix-ops': 'off',
        'vue/space-unary-ops': 'off',
        'vue/template-curly-spacing': 'off',

        // eslint-plugin-vue
        'vue/attributes-order': 'error',
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/custom-event-name-casing': 'off',
        'vue/html-closing-bracket-spacing': [
            'error',
            {
                startTag: 'never',
                endTag: 'never',
                selfClosingTag: 'always',
            },
        ],
        'vue/no-computed-properties-in-data': 'error',
        'vue/no-deprecated-slot-scope-attribute': 'error',
        'vue/no-mutating-props': 'error',
        'vue/no-reserved-component-names': 'error',
        'vue/no-v-html': 'error',
        'vue/multi-word-component-names': 'off',
        'vue/order-in-components': 'error',
        'vue/require-direct-export': 'error',
        'vue/require-v-for-key': 'warn',
        'vue/this-in-template': 'error',
        'vue/v-on-function-call': ['error', 'never'],
        'vue/v-slot-style': 'error',
        'vue/valid-v-for': 'error',
        'vue/valid-v-slot': 'error',

        // eslint-plugin-import
        'import/first': 'error',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
                // 'newlines-between': 'always',
                // alphabetize: { order: 'asc', caseInsensitive: true },
                pathGroups: [
                    {
                        pattern: '~icons/**',
                        group: 'external',
                    },
                ],
            },
        ],
        'import/no-mutable-exports': 'error',
        // breaks with aliases
        'import/no-unresolved': 'off',

        'no-unsanitized/method': [
            'error',
            {
                escape: {
                    methods: ['DOMPurify.sanitize'],
                },
            },
        ],
        'no-unsanitized/property': [
            'error',
            {
                escape: {
                    methods: ['DOMPurify.sanitize'],
                },
            },
        ],
    },
};
