/**
 * webpack.config.babel.js
 * 无忧保webpack配置文件,基于webpack2.0.0之上
 * @author zhanghaiyang<403724532@qq.com>
 * @version 2.0.0
 * @date 2016-12-26
 */
import path from 'path';
/**
 * 文件基础路径及相关配置
 */
import {
    css,
    js,
    ROOTPATH,
    BUILDPATH
} from './config';


/**
 * webpack基本属性
 */
import {
    entry /* @function */,
    output /* @function */,
    plugins /* @function */,
    rules /* @function */,
    devServer /* @function */,
} from './tasks/options/util';


export default {
    entry: entry({
        ...js,
    }),
    output: output(),
    module: {
        rules: rules(),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.gif', '.html', '.png', '.webp', '.jpg', '.css'],
        // alias: {
        //     // 'jquery': ROOTPATH + 'js/jquery/jquery-1.8.0.js',
        // },
    },
    devServer: devServer(),
    plugins: plugins(),
};
