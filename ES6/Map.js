var myMap = new Map();
var KeyString = "a string";
myMap.set(KeyString,"zhi");//设置值
myMap.get(KeyString);    // "和键'a string'关联的值"
myMap.get("a string");   // "和键'a string'关联的值"
                         // 因为 keyString === 'a string'
/* 这个 entries 方法返回一个新的 Iterator 对象，它按插入顺序包含了 Map 对象中每个元素的 [key, value] 数组。 */
/* 这个 keys 方法返回一个新的 Iterator 对象， 它按插入顺序包含了 Map 对象中每个元素的键。 */
/* 这个 values 方法返回一个新的 Iterator 对象，它按插入顺序包含了 Map 对象中每个元素的值。 */
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
console.log(myMap);
// for (var [key, value] of myMap) {
//     console.log(key + " = " + value);
//   }
// for (var [key, value] of myMap.entries()) {
//     console.log(key + " = " + value);
// }

myMap.forEach(function(value,key){
    console.log(key+"="+value);
},myMap)
// var outArray = Array.from(myMap);//map与Array的转换
// var merged = new Map([...first, ...second]);//合并

