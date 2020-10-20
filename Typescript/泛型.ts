// function identity(arg:number):number{
//     return arg;
// }
function identity<T>(arg:T):T{
    return arg;
}
//表达传入参数的类型和方法的返回值是一样的
//T为类型变量
var output = identity<string>('mystring');//显示传入参数
var output = identity('mystring');//采用类型推论
// function loggingIdentity<T>(arg:T):T{
//     console.log(arg.length);
//     return arg;
// }
// 上面的错误在于如果我们传入的参数没有lengh属性就会出现问题
// 因此我们指定传入参数的数组.
function loggingIdentity<T>(arg:T[]):T[]{
    console.log(arg.length);
    return arg;
}
//泛型接口
var myIdentity:{<T>(arg:T):T} = identity;
interface GenericIdentityFn{
    <T>(arg:T):T
}
var myIdentity: GenericIdentityFn = identity;
//泛型类
class GenericNumber<T>{
    add:(x:T,y:T)=>T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.add = function(x,y){return x+y};
let stringNumber = new GenericNumber<string>();
stringNumber.add = function(x,y){return x+y}
//泛型约束
interface Lengthwise{
    length:number;
}
function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
// loggingIdentity(3);  // Error, number doesn't have a .length property
// 上面时利用接接口和继承来约束泛型类型.
function create<T>(c:{new():T}):T{
    return new c();
}
class BeeKeeper{
    hashMask:boolean;
}
class ZooKeeper{
    nametag:string;
}
class Animal{
    numLegs:number;
}
class Bee extends Animal{
    keeper:BeeKeeper
}
class Lion extends Animal{
    keeper:ZooKeeper
}
function createInstance<A extends Animal>(c:new ()=>A):A{
    return new c();
}
//这个函数的返回值一定是一个继承动物类的类
//这个函数的参数也是一个继承类故要使用(c: new () => A)标明c是个类，而不是(c: Animal)类的实例