const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            '@': __dirname + '/resources/js',
            '@components': __dirname + '/resources/js/components',
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_module/
            },
        ],
    },
};
