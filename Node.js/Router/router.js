var file = require('./file');
var url = require('url');
const querystring = require('querystring');

module.exports = {
    login:function(req,res){
        // var urlObject = url.parse(req.url,true).query;
        // console.log(urlObject.mail)
        // console.log(urlObject.pswd)
         var post = ''
         req.on('data',function(chunk){
             post += chunk
         })
        req.on('end',function(chunk){
            var urlObject = querystring.parse(post)
        file.postReadFile('./views/login.html',req,res,post)
            
        })

    },
    registor:function(req,res){
        res.write('registor')
    },
    home:function(req,res){
        file.readFile('./views/home.html',req,res)
    },
    img:function(req,res){
        
        file.readImg('../images/pet.jpg',res);
    }
}
