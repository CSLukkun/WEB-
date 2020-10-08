let sy = Symbol("kk")
console.log(sy);
typeof(sy)

let sy1 =Symbol("kk");
sy === sy1
//不能使用new命令，是原始数据类型
let sy = Symbol("lk")
let syObject = {}
syObject[sy] = 'kk'
console.log(syObject)
//不能用点运算法符
let yellow = Symbol("Yellow")
let yellow1 = Symbol.for("Yellow")
yellow1 = yellow //flase

let yellow2 = Symbol.for("Yellow");
yellow1 === yellow2;     // true

let yellow1 = Symbol.for("Yellow")
Symbol.keyFor(yellow1);//Yellow
