// entry -> output, modules -> rules -> loaders, devtool
const path = require('path');
const BrowserSync = require('browser-sync-webpack-plugin');

module.exports = {
    entry: ['./src/app.js'],
    output: {
        path: path.join(__dirname, '/public'),
        publicPath: '/public/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new BrowserSync({
            host: 'localhost',
            port: '3000',
            server: { baseDir: ['public'] }
        })
    ],

    devtool: 'cheap-module-eval-source-map',

    devServer: {
        contentBase: path.join(__dirname, '/public'),
        hot: true,
        inline: true
    }
};
