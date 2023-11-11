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
        'import/no-restricted-paths': [
            'error',
            {
                zones: [
                    {
                        target: './src/shared',
                        from: [
                            './src/entities',
                            './src/features',
                            './src/widgets',
                            './src/pages',
                            './src/app',
                        ],
                        message:
                            'Importing into a "shared" layer from any other layers is prohibited',
                    },
                    {
                        target: './src/entities',
                        from: [
                            './src/features',
                            './src/widgets',
                            './src/pages',
                            './src/app',
                        ],
                        message:
                            'Importing into an "entities" layer from "features", "widgets", "pages" and "app" layers is prohibited',
                    },
                    {
                        target: './src/features',
                        from: ['./src/widgets', './src/pages', './src/app'],
                        message:
                            'Importing into a "features" layer from "widgets", "pages" and "app" layers is prohibited',
                    },
                    {
                        target: './src/widgets',
                        from: ['./src/pages', './src/app'],
                        message:
                            'Importing into a "widgets" layer from "pages" and "app" layers is prohibited',
                    },
                    {
                        target: './src/pages',
                        from: './src/app',
                        message:
                            'Importing into a "pages" layer from "app" layer is prohibited',
                    },
                    {
                        target: './src/entities/*/**',
                        from: './src/entities/*/*',
                        message:
                            'Importing from other slices on "entities" layer is prohibited',
                    },
                    {
                        target: './src/features/*/**',
                        from: './src/features/*/*',
                        message:
                            'Importing from other slices on "features" layer is prohibited',
                    },
                    {
                        target: './src/widgets/*/**',
                        from: './src/widgets/*/*',
                        message:
                            'Importing from other slices on "widgets" layer is prohibited',
                    },
                    {
                        target: './src/pages/**/!(index.*)',
                        from: './src/pages/*/*',
                        message:
                            'Importing from other slices on "pages" layer is prohibited',
                    },
                ],
            },
        ],
    },
    settings: {
        'import/resolver': {
            typescript: {
                project: '.',
            },
        },
    },
};
