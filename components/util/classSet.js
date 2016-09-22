/**
 * classset 根据传入的对象值来构造classes
 * @param {Object} params 传入的参数对象
 * @return {String} classes 构造好的classname
 */


export default (params) => {
    if(typeof params !== 'object') {
        throw new Error('传入不是对象');
    }

    let classes = '';

    for(let key in params) {
        let val = params[key];
        if(!!val) {
            classes += `${key} `;
        }
    }

    return classes;
}