var path = require('path');
var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: './src'
    },
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: "main.js",
        publicPath: '/static'    
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(ttf)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../fonts',
                        publicPath: '../fonts', // this is added inorder to overwrite the url() in the css file.
                    },
                  },
                ],
            },
            {
                test: /\.(svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../assets',
                        publicPath: '../assets', // this is added inorder to overwrite the url() in the css file.
                    },
                  },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    {
                        loader: 'css-loader', //translates CSS into CommonJS
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'sass-loader', //compiles Sass to CSS, using Node-Sass by default
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.scss', '.css', '.js'],
        modules: [
            path.resolve(__dirname, "node_modules"),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
}