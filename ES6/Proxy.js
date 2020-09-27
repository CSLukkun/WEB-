//为操作对象而引入的API
let target = {
    name:"TOM",
    age:24
}
let handler = {
    get:function(target,key){
        console.log('getting'+key);
        return target[key];
    },
    set:function(target,key,value){
        console.log('setting'+key);
        target[key] = value;
    }
}
let proxy = new Proxy(target,handler)
proxy.name
proxy.age = 25
//handler对象里保留这个对前面这个对象的操作
//拦截赋值操作
//拦截取值操作
//拦截函数调用、call和reply
//拦截对象是否存在属性
//拦截new命令
//拦截delete操作
