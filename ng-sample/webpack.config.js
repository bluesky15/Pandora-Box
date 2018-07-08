const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.bundle.js',
    },
    module: {
        rules: [{
                test: /\js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            },
            // {
            //     test: /\.html$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             name: '[name].[ext]',
            //         }
            //     }],
            //    exclude: /index.html/
            // }


        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: './src/index.html'
        }),
        // new HtmlWebpackPlugin({
        //     name:'[name].[ext]',
        //     chunks: []
        //   })
        new CleanWebpackPlugin(['dist'])
    ]
}