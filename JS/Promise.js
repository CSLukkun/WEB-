//为了解决多层的函数、方法的欠条调用而存在的
// 就是把一层层向内嵌套调用的方法，给拉成一串连续调用的方法
// let p = new Promise((resolve,reject)=>{
//     let a1= "success"
//     let a2 = "fail"
//     var timer = setTimeout(function(){
//         console.log('after resolve');
        
//     },1000)
//     console.log(a2);
// })

let myFirstPromise = new Promise(function(resolve, reject){
    //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
    //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
    setTimeout(function(){
        
        resolve("成功!"); 
        //代码正常执行！
    }, 1500);
});


myFirstPromise.then(function(successMessage){
    //successMessage的值是上面调用resolve(...)方法传入的值.
    //successMessage参数不一定非要是字符串类型，这里只是举个例子
    console.log("Yay! " + successMessage);
        
});

