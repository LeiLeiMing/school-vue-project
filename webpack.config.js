/*webpack配置文件*/
/*用于配置webpack命令快速打包，不再使用webpack .\src\main.js -o  .\dist\bundle.js命令*/
/*获取路径*/
const path = require('path')
/*配置html-webpack-plugin插件*/
const htmlWebpackPlugin = require('html-webpack-plugin')
/*用于引入vue-loader的伴生插件*/
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    /*踩坑点，__dirname是两个下划线的*/
    /*入口*/
    entry:path.join(__dirname,'./src/main.js'),
    /*出口*/
    output: {
        path: path.join(__dirname,'./dist'),
        /*文件名*/
        filename: 'bundle.js'
    },
    /*配置htm--webpack-plugin插件*/
    plugins: [
        new htmlWebpackPlugin({
            //指定要生成的模板
            template: path.join(__dirname,'./src/index.html'),
            //生成的模特名称
            filename: "index.html"
        }),
        /*引入vue-loader*/
        new VueLoaderPlugin()
    ],
    /*配置第三方样式处理器loader*/
    module: {
        rules: [
            /*test为对象，
            /\.css$/为正则表达式表示处理css文件，
            use中的内容:使用两个loader处理css文件
            */
            {test:/\.css$/,use:['style-loader','css-loader']},
            /*图像规则*/
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader'},
            /*字体文件规则*/
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            /*babel规则*/
            {test: /\.js$/,use:'babel-loader', exclude:/node_modules/},
            /*处理.vue文件*/
            {test: /\.vue$/,use:'vue-loader'},
        ]
    },
    /*配置vue.js引用的路径*/
    resolve: {
        alias: {
            "vue$":"vue/dist/vue.js",
        }
    }
}