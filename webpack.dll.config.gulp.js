'use strict';
/**
 * webpack.config.dll.js
 * @author zhanghaiyang<403724532@qq.com>
 * joyowo web
 * @version 1.0.0
 */

/**
 * Module dependencies
 * dll模块 DLL & DllReference, 用于打包独立基本不变的模块
 * https://github.com/webpack/docs/wiki/list-of-plugins#dllplugin
 */



let path = require('path');


/* config 基础参数配置文件 */
let config = require('./config');

/* webpack系列 */
let webpack = require('webpack');

/* 分离独立依赖的css文件 */
let ExtractTextPlugin = require('extract-text-webpack-plugin');


var HappyPack = require('happypack');

let DEST = config.dest;

let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, './');

let BUILD_PATH = path.resolve(ROOT_PATH, DEST);







function webpackConfig(args) {
    let entry = {
        vendor: [
            // 'react',
            // 'react-dom',
            './components/util/util',
            './components/util/util.css',
        ]
    }

    /* 创建配置文件 */
    let wConfig = {
        entry: entry,
        output: {
            path: BUILD_PATH,
            publicPath: "./",
            filename: '[name].dll.js',
            library: '[name]_library',
        },
        module: {
            loaders: [{
                test: /\.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?-url"),
            }, {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: function(path) {
                    // 路径中含有 plugins 的就不去解析。
                    var isNpmModule = !!path.match(/\\plugins\\/);
                    return isNpmModule;
                },
                happy: {
                    id: 'jsx'
                }
            }],
        },
        jshint: {
            // esnext: true
        },
        resolve: {
            alias: {
                'jquery': ROOT_PATH + '/plugins/jquery/jquery-2.1.4.min.js',
                '{plugins}': ROOT_PATH + '/plugins',
                '{myplugins}': ROOT_PATH + '/myplugins',
                '{social}': ROOT_PATH + '/social',
                '{crm}': ROOT_PATH + '/crm',
                '{tianwu}': ROOT_PATH + '/tianwu',
                '{joyowyb}': ROOT_PATH + '/joyowyb',
            },
            // modulesDirectories: [ 'lib', 'modules', 'node_modules'],
            extensions: ['', '.js', '.less', '.gif', '.html', '.png', '.webp', '.jpg']
        },
        externals: {
            // require("jquery") 是引用自外部模块的
            // 对应全局变量 jQuery
            "jquery": "jQuery",
            "$": "jQuery"
        },
        plugins: [
            new ExtractTextPlugin('[name].dll.css'),
            


            /* Dll */
            new webpack.DllPlugin({
                /**
                 * path
                 * 定义 manifest 文件生成的位置
                 * [name]的部分由entry的名字替换
                 */
                path: BUILD_PATH + '/[name]-manifest.json',
                /**
                 * name
                 * dll bundle 输出到那个全局变量上
                 * 和 output.library 一样即可。 
                 */
                name: '[name]_library'
            }),

            // /* 压缩js插件 */
            // new webpack.optimize.UglifyJsPlugin({
            //     minimize: true,
            //     compress: {
            //         /* 不显示js规范的警告、提示 */
            //         warnings: false
            //     },
            //     //  Preserve copyright comments in the output. By
            //     // default this works like Google Closure, keeping
            //     // JSDoc-style comments that contain "@license" or
            //     // "@preserve". You can optionally pass one of the
            //     // following arguments to this flag:
            //     // - "all" to keep all comments
            //     // - a valid JS regexp (needs to start with a
            //     // slash) to keep only comments that match.
            //     // Note that currently not *all* comments can be
            //     // kept when compression is on, because of dead
            //     // code removal or cascading statements into
            //     // sequences.

            //     /**
            //      * 上面的介绍是指，这个comments的选项是保留一些类似 "@license" or "@preserve" 这种版权的注释，
            //      * 可选参数有2种， 一种是 字符串 'all'，保留所有注释。
            //      * 另一种是 可以是正则表达式
            //      * 这里我去掉了所有注释使用了 空字符串 '';
            //      */
            //     comments: ''
            // }),

        ],
    };

    return wConfig;
}




module.exports = webpackConfig;
