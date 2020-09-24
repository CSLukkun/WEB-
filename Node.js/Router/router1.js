var http = require('http');
var url = require('url');

var router = require('./router')
http.createServer(function(req,res){
    // res.writeHead(200,{
    //     'content-Type':'text/html;charset=utf-8'
    // })
    //res.writeHead(200,{'Content-Type':'image/jpeg'})
    if(req.url != '/favicon.ico'){//会出现两条请求，先屏蔽调这条请求
        
        var pathName = url.parse(req.url).pathname.replace(/\//,'');
        //console.log(pathName)
        try{
            router[pathName](req,res)
        } catch(err){
            
            router['home'](req,res)
        }
    }
     //res.end()
}).listen(8000);
console.log('server running an http://localhost:8000')