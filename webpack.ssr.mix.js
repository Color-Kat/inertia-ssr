const path = require('path')
const mix = require('laravel-mix')
const nodeExternals = require('webpack-node-externals');

mix
    .options({ manifest: false })
    .ts('resources/js/ssr.js', 'public/js')
    .react()
    .alias({ '@': path.resolve('resources/js') })
    .webpackConfig(require('./webpack.config'))
    .webpackConfig({
        target: 'node',
        externals: [nodeExternals()],
    });
