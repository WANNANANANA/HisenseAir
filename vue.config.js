const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    publicPath: './',
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin([
                { from: path.join(__dirname, 'src/wx_api'), to: path.join(__dirname, 'dist/wx_api') }
            ])
        ]
    }

}