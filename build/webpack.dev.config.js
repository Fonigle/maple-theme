const path = require('path');

const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require("html-webpack-plugin");

const os = require("os");
const networkInterfaces = os.networkInterfaces();

let ip = "";
for (var key in networkInterfaces) {
    networkInterfaces[key].forEach(item => {
        if (!item.internal && item.family === "IPv4") {
            ip = item.address;
        }
    });
}

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        host: ip,
        port: 10000
    },
    entry: {
        index: [path.resolve("demo/main.ts")]
    },
    devtool: "#cheap-module-source-map",
    watchOptions: {
        ignored: /node_modules/,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlPlugin({
            filename: "index.html",
            template: path.resolve("demo/index.html"),
            showErrors: true
        })
    ]
});


