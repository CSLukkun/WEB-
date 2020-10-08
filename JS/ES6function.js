function fn(name,age=10){
    console.log(`${name},${age}`)
}
fn('lukun',18)
fn('lukun')
fn('lukun',"")//与上面不一样
//不定参数用来表示不确定参数的个数
function fn1(...values){
    console.log(values.length)
}
fn1(1,23,4,5);
var Person = {
    'age': 18,
    'sayHello': function () {
      setTimeout(function () {
        console.log(this.age);
      });
    }
};
var age = 20;
Person.sayHello();  // 20
 
var Person1 = {
    'age': 18,
    'sayHello': function () {
      setTimeout(()=>{
        console.log(this.age);
      });
    }
};
var age = 20;
Person1.sayHello();  // 18