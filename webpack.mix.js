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

mix .ts('resources/js/app.js', 'public/js')
    .react()
    .postCss('resources/css/app.css', 'public/css',
        [require('tailwindcss')]
    )
    .webpackConfig(require('./webpack.config'))
    .alias({
        '@': path.join(__dirname, 'resources/js'),
        '@components': path.join(__dirname, 'resources/js/components')
    });

if (mix.inProduction()) {
    mix.version();
}
