

//配置webpack
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin =  require('vue-loader/lib/plugin');
const Webpack = require("webpack");

const dev = process.env.NODE_ENV==="development"?true:false; //判断环境

const config = {
    entry: { //目标文件
        index: "./app/index.js"
    },
    output: { //导出文件
        path: path.join(__dirname, "./dist"),
        filename: "[name].[hash:8].js"
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: "vue-loader"
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, { //对gif png jpg文件得处理
            test: /\.(gif|jpg|png|svg)/,
            use: {
                loader: "url-loader", //url-loader依赖于file-loader 对于小于limit字节得可以直接转换为base64插入到js里面
                options: {
                    limit: 1024 * 2
                }
            }
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./statics/index.html"
        }), //这个非常重要 在使用vue react时 会根据NODE_ENV来加载不同的包 因为有的适合开发 有的适合发布
        new Webpack.DefinePlugin({ 
            "process.env": {
                "NODE_ENV": dev ?'"development"':'"production"'
            }
        })
    ]
}

if (dev) { //如果是
    config.devServer = {
        port: 8000,
        host: "localhost",
        open: true,
        hot: true  // 开启热加载 也就是当某个组件发送改变时，那么仅仅改变那个组件 不会刷新页面
    }
    config.plugins.push(
        new Webpack.HotModuleReplacementPlugin()
    )
}

module.exports = config;


//使用cross-env 是为了解决多平台上面node_env的设置问题