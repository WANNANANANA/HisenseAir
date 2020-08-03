const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const { copyFile } = require('fs');

module.exports = {
    publicPath: './',
    configureWebpack: config => {
        const plugins = [];
        plugins.push(
            new CopyWebpackPlugin([
                { from: path.join(__dirname, 'src/wx_api'), to: path.join(__dirname, 'dist/wx_api') }
            ])
        )
        if (process.env.NODE_ENV === 'production') {
            plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp('\\.(js|css)$'),
                    threshold: 10240,
                    minRatio: 0.8
                })
            )
            config.externals = {
                'vue': 'Vue',
                'vue-router': 'VueRouter'
            }
        }
        config.plugins = [
            ...config.plugins,
            ...plugins
        ]
    },
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 生产环境注入cdn
            config.plugin('html')
                .tap(args => {
                    args[0].cdn = 'prod';
                    return args;
                });
        }
    }
}