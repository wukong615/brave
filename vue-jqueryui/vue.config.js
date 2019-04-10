const webpack = require('webpack')

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'public',
    indexPath: 'index.html',
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Vue使用jQueryUI-Demo',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    lintOnSave: true,
    productionSourceMap: false,
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {},
        modules: false
    },
    //反向代理
    devServer: {
        // 环境配置
        host: 'localhost',
        port: 8080,
        https: false,
        hot: true,
        hotOnly: true,
        open: false
    },
    pluginOptions: {
        // 第三方插件配置
        // ...
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    }
}