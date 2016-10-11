import Promise from 'bluebird';
import { get } from 'http'; 

let vendor = (url) => {
    return new Promise(function (resolve, reject) {
        get(url, function(res) {
            let data;
            /* 接受数据流 */
            res.on('data', chuck => {
                data += chuck;
            });
            res.on('end', () => {
                resolve(data);
            });
        }).on('error', function(e) {
            reject(e);
        });
    });
}

vendor('http://127.0.0.1:8887/vendor-manifest.json').then(data => {
    console.log(data);
}, error => {
    throw new Error(error);
}).catch(e => {
    console.log(e);
}).then(data => {
    console.log('end');
});
