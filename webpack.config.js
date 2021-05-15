const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
    entry: path.resolve(__dirname, "src", "index.js"),

    module: {
        rules: [
            // to use import export feat.
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            // to use css in index file
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            // to use inline images 
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset"
            }
        ]
    },
    // plugin to automate build the process
    plugins: [
        new HtmlWebpackPlugin({
            title: "vanila js boilerplate",
            // template file sorce
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true /* to clean every time on build */
    },
    mode: "production"
}
module.exports = webpackConfig;