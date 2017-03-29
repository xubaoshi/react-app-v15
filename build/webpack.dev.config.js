const { resolve } = require('path')
const webpack = require('webpack')
module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './index.jsx'
    ],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".scss"]
    },
    context: resolve(__dirname, '../src'),
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, '../src'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: { sourceMap: true }
                }, {
                    loader: "sass-loader",
                    options: { sourceMap: true }

                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
}