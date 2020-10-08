Function.prototype.apply.call(Math.floor, undefined, [1.75])
(Function.prototype.apply).call(Math.floor, undefined, [1.75])


Math.floor.apply(undefined, [1.75])
Math.floor.apply(this, [1.75])
//三者一样
//函数也是对象