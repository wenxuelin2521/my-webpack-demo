const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/pages/index.html'), // 源文件
    filename: 'index.html' // 生成的内存中首页的名称
})

module.exports = {
    mode: 'development', //development production
    entry: path.join(__dirname, './src/pages/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    devServer: {
        contentBase: './dist' //托管目录:默认webpack.config.js文件所在目录
    },
    plugins: [
        htmlPlugin
    ],
    resolve: {
        extensions: ['.js', '.json'], // 表示，这几个文件的后缀名，可以省略不写（按先后顺序加载）
        alias: { // 表示别名
            '@': path.join(__dirname, './src') // 这样，@ 就表示 项目根目录中 src 的这一层路径
        }
    }
}