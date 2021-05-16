const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
    entry: path.resolve(__dirname, "src", "index.js"),

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true /* to clean every time on build */
    },

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

    optimization: {
        splitChunks: {
            cacheGroups: {
                node_vendors: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: 1
                }
            }
        }
    },

    mode: "production"
}
module.exports = webpackConfig;