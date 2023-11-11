/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
    root: true,
    extends: ['universe/native'],
    rules: {
        'react/jsx-boolean-value': ['warn', 'always'],
        'no-restricted-imports': [
            'error',
            {
                patterns: [
                    {
                        group: [
                            '~/shared/*/*/**',
                            '~/entities/*/**',
                            '~/features/*/**',
                            '~/widgets/*/**',
                            '~/pages/*/**',
                            '~/app/**',
                        ],
                        message:
                            'Direct access to the internal parts of the module is prohibited',
                    },
                    {
                        group: [
                            '../**/shared',
                            '../**/entities',
                            '../**/features',
                            '../**/widgets',
                            '../**/pages',
                            '../**/app',
                        ],
                        message: 'Prefer absolute imports instead of relatives',
                    },
                ],
            },
        ],
    },
};
