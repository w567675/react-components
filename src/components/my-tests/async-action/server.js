var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    console.log(req.domain);
    var query = url.parse(req.url, true).query;
    var callback = query.callback || "callback";
    var data = {
        errcode: 0,
        data: [{
            name: '常用检索',
            type: '1',
            list: [{
                    id: '1',
                    name: '待审核的合同',
                    highlightNumber: 1,
                    highlightText: '待审核'
                }, {
                    id: '3',
                    name: '驳回的合同'
                }, {
                    id: '24',
                    name: '审核通过的合同',
                    highlightNumber: 1,
                    highlightText: '快到期'
                }, {
                    id: '567',
                    name: '失效的合同'
                }, {
                    id: '10',
                    name: '资质文件缺失的合同'
                }, {
                    id: '0',
                    name: '所有合同'
                }

            ]
        }, {
            name: '自定义检索',
            type: '2'
        }]
    };
 
 res.writeHead(200, {
            'Context-Type': 'application/x-www-form-urlencode',
            'Access-Control-Allow-Origin': '*'
        });
        //res.end(callback+'('+JSON.stringify(data)+')');
    res.end(JSON.stringify(data));
}).listen(3000, function() {
    console.log('server is runing...');
});
