import path from 'path';
import glob from 'glob';

import webpack, {
    DefinePlugin,
} from 'webpack';
import happypack from 'happypack';

import {
    ROOTPATH,
    BUILDPATH,
    HOST,
    port,
    https,
} from '../../config'

/* 分离独立依赖的css文件 */
import ExtractTextPlugin from 'extract-text-webpack-plugin';
const extractCSS = new ExtractTextPlugin({
    filename: "[name].[chunkhash].css",
    disable: false,
    allChunks: true,
});



/**
 * 环境变量
 */
const {
    DEV,
    BETA,
    PRE,
    PRO,
} = process.env;





/**
 * entry
 * webpack的entry入口属性
 */
const entry = (params) => {
    const {
        src = '',
        ignore = '',
    } = params;
    let filesObj = {};
    let files = glob.sync(src, {
        ignore,
    });
    files.forEach((item) => {
        let index = item.lastIndexOf('/');
        if (index > -1) {
            let keys = item.split('.');
            let value = [path.resolve(ROOTPATH, item)];
            keys.pop();
            keys = keys[0].split('/');
            keys.shift();
            const key = keys.join('/');
            filesObj[key] = value;
        }
    });
    return filesObj;
}

/**
 * output
 * webpack的output属性
 */
const output = (params) => {
    return {
        path: BUILDPATH,
        filename: '[name].js',
        library: 'w567675', // string,
        libraryTarget: 'umd',
    };
}



const rules = () => {
    return [
        {
            test: /\.jsx?$/,
            loader: 'happypack/loader?id=jsx',
            exclude(path) {
                /* 路径中含有 plugins 的就不去解析 */
                return !!path.match(/\\node_modules\\/);
            },
        },
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude(path) {
                /* 路径中含有 plugins 的就不去解析 */
                return !!path.match(/\\node_modules\\/);
            },
        },
        {
            test: /.css$/,
            loader: extractCSS.extract({
                fallbackLoader: 'style-loader',
                loader: 'css-loader',
                // publicPath: '/a/css/' // Overrides output.publicPath
            }),
        },
        // {
        //     test: /\.(png|jpg)$/,
        //     loader: 'url-loader',
        //     query: {
        //         limit: 1,
        //         publicPath: '/',
        //         name: 'images/[name].[hash].[ext]',
        //     }
        // },
        {
            test: /\.hbs$/,
            loader: "handlebars-loader",
        }
    ]
}

/**
 * plugins
 * webpack的plugins属性
 */
const plugins = () => {
    let plugins = [];
    /**
     * http://webpack.github.io/docs/list-of-plugins.html#defineplugin
     */
    const definePlugin = new webpack.DefinePlugin({
        __DEV__: JSON.parse(process.env.DEV || 'false'),
        __BETA__: JSON.parse(process.env.BETA || 'false'),
        __PRO__: JSON.parse(JSON.parse(process.env.PRO || 'false')),
    });
    /* 压缩js插件 */
    const uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
            screw_ie8: false,
            warnings: false /* 不显示js规范的警告、提示 */
        },
        mangle: { screw_ie8: false },
        output: { screw_ie8: false },
        //  Preserve copyright comments in the output. By
        // default this works like Google Closure, keeping
        // JSDoc-style comments that contain "@license" or
        // "@preserve". You can optionally pass one of the
        // following arguments to this flag:
        // - "all" to keep all comments
        // - a valid JS regexp (needs to start with a
        // slash) to keep only comments that match.
        // Note that currently not *all* comments can be
        // kept when compression is on, because of dead
        // code removal or cascading statements into
        // sequences.

        /**
         * 上面的介绍是指，这个comments的选项是保留一些类似 "@license" or "@preserve" 这种版权的注释，
         * 可选参数有2种， 一种是 字符串 'all'，保留所有注释。
         * 另一种是 可以是正则表达式
         * 这里我去掉了所有注释使用了 空字符串 '';
         */
        comments: ''
    });

    const jsx = new happypack({
        id: 'jsx',
        threads: 4,
        loaders: ['babel-loader'],
    });

    const ts = JSON.stringify({
        transpileOnly: true,
    });
    // const tsx = new happypack({
    //     id: 'tsx',
    //     threads: 4,
    //     loaders: ['ts-loader?transpileOnly=true'],
    // });

    plugins.push(extractCSS, definePlugin, jsx);

    // if (!DEV) {
    //     plugins.push(uglifyJsPlugin);
    // }
    return plugins;
}




const devServer = () => {
    let protocol = https ? 'https': 'http';
    return {
        contentBase: ROOTPATH,
        compress: true,
        host: HOST,
        port,
        inline: true,
        quiet: false,
        stats: { colors: true },
        watchOptions: {
            aggregateTimeout: 300,
            poll: true,
        },
        https,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        proxy: {
            "/src/**/*.js": {
                target: `${https}://${HOST}:${port}`,
                pathRewrite: { "^/src": "" }
            }
        },
    }
}

const devtool = () => 'cheap-module-source-map';

module.exports = {
    entry,
    output,
    rules,
    plugins,
    devServer,
    devtool,
}


