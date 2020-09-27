// const age = 12;
// const name = "Amy";
// const person = {age, name};
// //注意顺序，否则报错
// person   //{age: 12, name: "Amy"}
// //等同于
// //const person = {age: age, name: name}
// const person = {
//     sayHi(){
//       console.log("Hi");
//     }
//   }
//   person.sayHi();  //"Hi"
//   //等同于
//   const person = {
//     sayHi:function(){
//       console.log("Hi");
//     }
//   }
//   person.sayHi();//"Hi"
//   const obj = {
//     ["he"+"llo"](){
//       return "Hi";
//      }
//    }
//    obj.hello();  //"Hi"
//    //使用表达式作为属性名
//    //对象的拓展运算符
// //...person拷贝，加合并
let age = {age: 15};
let name = {name: "Amy"};
age = {...age,...name}
console.log(age)
let target = {a: 1};
let object2 = {b: 2};
let object3 = {c: 3};
Object.assign(target,object2,object3);  
// 第一个参数是目标对象，后面的参数是源对象
target;  // {a: 1, b: 2, c: 3