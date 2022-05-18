const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@components': path.resolve(__dirname, 'resources/js/components'),
        },
        extensions: ['*', '.js', '.jsx', '.vue', '.ts', '.tsx'],
    },
};
