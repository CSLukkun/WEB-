var fs = require('fs');
const querystring = require('querystring');
var url = require('url');

module.exports = {
    readImg:function(file,res){
        fs.readFile(file,'binary',function(err,data){
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'image/jpeg'})           
            res.write(data, 'binary')    
            res.end();
            })

        },
    readFile: function(file,req,res){
        fs.readFile(file,'utf-8',function(err,data){
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
            res.write(data);
            res.end();
        })
    },
    postReadFile:function(file,req,res,post){
      //  console.log('1');
        var urlObject = querystring.parse(post)
        console.log(post)
          
        var array = ['mail','pswd']
        var reg;
        fs.readFile(file,'utf-8',function(err,data){
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
          //  console.log(data)
            for(var i = 0;i<array.length;i++)
            {
                reg = new RegExp('{'+array[i] +'}')
              //  console.log(urlObject[array[i]]);
                data = data.replace(reg,urlObject[array[i]])

               
            }
            if(urlObject.mail && urlObject.pswd){
                data = data.replace(/{infoClass}/,'')
                data = data.replace(/{formClass}/,'hide')

            }
            else{
                data = data.replace(/{infoClass}/,'hide')
                data = data.replace(/{formClass}/,'')
            }
            res.write(data);
           // console.log(data);
            res.end();
        })
    
}
}
