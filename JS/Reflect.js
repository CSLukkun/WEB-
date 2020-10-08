//移植语言内部的方法移植到reflect对象上了
let exam ={
    name:"Tom",
    age:24,
    get info(){
        return this.name + this.age;
    }
}
Reflect.get(exam, 'name'); // "Tom"
 
// 当 target 对象中存在 name 属性的 getter 方法， getter 方法的 this 会绑定 // receiver
let receiver = {
    name: "Jerry",
    age: 20
}
console.log(Reflect.get(exam, 'info', receiver)); // Jerry20