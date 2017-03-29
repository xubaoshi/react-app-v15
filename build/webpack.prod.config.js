const { resolve } = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack')

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css"
})

module.exports = {
    entry: {
        app: './index.jsx',
        'react_vendor': ['react', 'react-dom']
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".scss"]
    },
    context: resolve(__dirname, '../src'),
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
                loader: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development 
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        extractSass,
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'react_vendor',
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            title: 'cnode',
            filename: '../dist/index.html',
            template: 'index.html',
            favicon: 'favicon.ico',
            cache: false,
            minify: {
                removeComments: false,
                collapseWhitespace: true
            }
        })
    ]
}