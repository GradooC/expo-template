/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
    root: true,
    extends: ['universe/native'],
    rules: {
        'react/jsx-boolean-value': ['warn', 'always'],
    },
};
