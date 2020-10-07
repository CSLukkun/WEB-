obj ={
    age:1,
    big:2,
}
function Show(a,b){
    console.log(this.age);
    console.log(this.big)
    console.log(a);
    console.log(b)
}
Show(1,3);
Function.prototype.mycall=function(obj,...args){
    obj.fn = this;//这里this就是function show
    var res = obj.fn(...args);
    return res;
}
Show.mycall(obj,1,2);  //理解为obj.Show(1,2)
//改变this实例对象的指向
Show.call(obj,1,2);

