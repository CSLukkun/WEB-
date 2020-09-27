console.log(Array.of(1, '2', true)); // [1, '2', true]
let map = {
    do: function(n) {
        return n * 2;
    }
}
let arrayLike = [1, 2, 3];
console.log(Array.from(arrayLike, function (n){
    return this.do(n);
}, map)); // [2, 4, 6]
//三个参数的理解
let arr = Array.from({
    0: '1',
    1: '2',
    2: 3,
    length: 3
  });
  console.log(); // ['1', '2', 3]
  //类数组对象，必须要含有length属性，且元素的属性名必须是数值