const items = ["zero", "one", "two"];
const it = items[Symbol.iterator]();
it.next();
//>{value: "zero", done: false}
it.next();
//>{value: "one", done: false}
it.next();
//>{value: "two", done: false}
it.next();
//>{value: undefined, done: true}
const arrayLink = {length: 2, 0: "zero", 1: "one"}
// 报 TypeError 异常
for (let item of arrayLink) {
    console.log(item);
  }
  // 正常运行
// output:
// zero
// one
for (let item of Array.from(arrayLink)) {
    console.log(item);
  }

  const nums = ["zero", "one", "two"];
 
for (var num of nums) {
  console.log(num);
}
// output: two
console.log(num);//说明原因