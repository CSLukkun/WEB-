//为了解决多层的函数、方法的欠条调用而存在的
// 就是把一层层向内嵌套调用的方法，给拉成一串连续调用的方法
let p = new Promise((resolve,reject)=>{
    let a1= "success"
    let a2 = "fail"
    var timer = setTimeout(function(){
        console.log('after resolve');
        
    })
})