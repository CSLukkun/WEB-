// let mySet = new Set();
// mySet.add(1);
// mySet.add(5);
// mySet.add(6);
// mySet.add("time");
// mySet.add("time");//会被合并
// //可以存储各种不同的东西
// 
//数组去重
a=[1,2,3,4,4]
var mySet = new Set(a);
a = [...mySet]; 
console.log(a[0]);
// String 转 Set
var mySet = new Set('hello');  // Set(4) {"h", "e", "l", "o"}
//直接new字符串
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var union = new Set([...a, ...b]); // {1, 2, 3, 4}

var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var difference = new Set([...a].filter(x => !b.has(x))); // {1}

