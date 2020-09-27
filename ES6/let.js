// {
//     let a =0
//     a
// }
// a undefined

for(var i = 0;i<10;i++){
    setTimeout(function(){
        console.log(i)
    })
}//输出10个10
for(let j;j<10;j++){
    setTimeout(function(){
        console.log(j)
    })
}输出0123456789
console.log(b)
var b = "banana"//不存在变量提升
