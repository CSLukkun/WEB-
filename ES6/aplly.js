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
Function.prototype.myapply = function(obj,a =[]){//表明参数2是一个数组形式
    obj.fn = this;
    var res = obj.fn(...a)
    return res;
}
Show.myapply(obj,[3,4])