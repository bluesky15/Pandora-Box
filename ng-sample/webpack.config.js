const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.module.js',
    output:{
        path: path.join(__dirname, './dist'),
        filename: 'main.bundle.js',
    },
    module:{
        rules:[
            {
                test:/\js$/,
                exclude:/node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: './templates/blog-list.html',
            template: 'src/templates/blog-list.html',
            chunks: ['templates']
          })
    ]
}