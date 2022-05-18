const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/app.js', 'public/js')
    .react()
    .postCss('resources/css/app.css', 'public/css',
        [require('tailwindcss')]
    )
    .webpackConfig(require('./webpack.config'));
    // .webpackConfig({
    //     resolve: {
    //         extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
    //         alias: {
    //             '@': __dirname + '/resources/js',
    //             '@components': __dirname + '/resources/js/components',
    //         }
    //     },
    //     module: {
    //         rules: [
    //             {
    //                 test: /\.ts$/,
    //                 loader: 'ts-loader',
    //                 exclude: /node_module/,
    //                 options: { appendTsSuffixTo: [/\.vue$/] }
    //             },
    //         ],
    //     },
    // });

if (mix.inProduction()) {
    mix.version();
}
