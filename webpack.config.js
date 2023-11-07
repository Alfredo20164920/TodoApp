/** @type {import('webpack').Configuration} */

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "app.bundle.js",
        clean: true,
    },
    mode: "development",
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    resolve: {
        modules: ["src", "node_modules"],
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.html$/,
                use: [
                    {loader: "html-loader"}
                ]
            },
        ]
    },
    devtool: "source-map",
    devServer: {
        host: "localhost",
        port: 3006,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },

}