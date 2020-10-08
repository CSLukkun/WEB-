let string = "apple,banana,orange"
string.includes("banana");
string.startsWith("apple");    // true
console.log(string.endsWith("apple",5));      // false
string.startsWith("banana",6)  // true

console.log("Hello,".repeat(3.2));  // "Hello,Hello,Hello,"
console.log("h".padStart(5,"o"));  // "ooooh"
console.log("h".padEnd(5,"o"));    // "hoooo"
console.log("h".padStart(5));      // "    h"
//字符串补齐

//模板字符串
let string1 =  `Hey,
can you stop angry now?`;
console.log(string1);
//实现多行
let name = "Mike";
let age = 27;
let info = `My Name is ${name},I am ${age+1} years old next year.`
console.log(info);
//在字符串中添加变量和表达式调用函数
标签模板
function f(stringArr,...values){
    let result = "";
    for(let i=0;i<stringArr.length;i++){
     result += stringArr[i];
     if(values[i]){
      result += values[i];
           }
       }
    return result;
   }
   let name = 'Mike';
   let age = 27;
   f`My Name is ${name},I am ${age+1} years old next year.`;
   // "My Name is Mike,I am 28 years old next year."
    
   f`My Name is ${name},I am ${age+1} years old next year.`;
   // 等价于
   f(['My Name is',',I am ',' years old next year.'],'Mike',28);
//过滤html字符串，防止用户输入恶意内容