var clone = function(obj){

    function getType(obj){
      return Object.prototype.toString.call(obj).slice(8,-1);
    }
    
    function getReg(a){
      var c = a.lastIndexOf('/');
      var reg = a.substring(1,c);
      var escMap = {'"': '\"', '\\': '\\\\', '\b': '\\b', '\f': '\\f', '\n': '\\n', '\r': '\\r', '\t': '\\t', '\w': '\\w', '\s': '\\s', '\d': '\\d'};
      //在正则表达式中可能会出现\b这种形式
      //转换成字符串值\b就要使用\\b来进行替代.
      for(var i in escMap){
        
        if(reg.indexOf(i)){
          
          reg.replace(i,escMap[i])
        }
      }
      var attr = a.substring(c+1)
      return new RegExp(reg,attr)
    }
    
  
  var construct = getType(obj);
 
  var res;
  if(construct === 'Array'){
      res=[]
  }
  else if(construct === 'Object'){
      res={}
      
  }
  for(var item in obj){
      if(obj[item] === obj) continue;
      if(getType(obj[item])==='Function'){
          res[item] = new Function("return "+obj[item].toString())()
      }
      else if(getType(obj[item]) === 'RegExp'){
        
        res[item] = getReg(obj[item].toString())
      }
      else if(getType(obj[item]) === 'Object'){
          res[item] = clone(obj[item]);
      }
      else{
        
          res[item] = obj[item]
      }
  }
  return res
}

var a={
    age:21,
    name:'ccy',
    info:{
    address:'tongling'
    },
    fun1:function(){
        console.log(123);
    },
    reg:/a\bdbc/g

}
var b = clone(a);

console.log(b.reg.toString())