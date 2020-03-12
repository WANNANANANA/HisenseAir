const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    outputDir: 'dist',
    // publicPath: '/hisenseAir',
    configureWebpack: {
        plugins: [
            // "@babel/plugin-syntax-dynamic-import",
            new CopyWebpackPlugin([
                { from: path.join(__dirname, 'src/wx_api'), to: path.join(__dirname, 'dist/wx_api') },
                { from: path.join(__dirname, 'src/.idea'), to: path.join(__dirname, 'dist/.idea') },
            ])
        ]
    }

}