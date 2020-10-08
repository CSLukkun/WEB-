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
Function.prototype.mybind = function(obj,...args){
    obj.fn = this;
    return (...arguments) =>{
        const newargs= args.concat(arguments)//箭头函数没有arguments，用流化符代替
        let res = obj.fn(...newargs)
        delete obj.fn;
        return res
    }

}
Show.mybind(obj)(3,4);