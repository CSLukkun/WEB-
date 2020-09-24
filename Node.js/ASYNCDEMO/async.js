 var async = require('async')
// //串行无关联
// async.series([
//     function (callback){
//         setTimeout(function(){
//             callback(null,'one')
//         },2000)
//     },
//     function (callback){
//         setTimeout(function(){
//             callback(null,'two')
//         },5000)
//     }
// ],function(err,result){
//     console.log(result)
// })

// async.series({
//     one:function (callback){
//         setTimeout(function(){
//             callback(null,'1')
//         },1000)
//     },
//     two:function(callback){
//      setTimeout(function(){
//          callback(null,'2')
//      },2000)   
//     }
// },
//     function (err,result) {
//         console.log(result)
//     }

// )
//并行无关联
//两个并行的操作
// console.time('test')
// async.parallel({
//     function (callback) {
       
//         setTimeout(function(){
//             callback(null,'n');
//         },2000)
//     },
//     function (callback){
//         setTimeout(function(){
//             callback(null,'p');
//         },5000)
//     }
// },function(err,results){
//     console.log(results);
//     console.timeEnd('test')
// }
// )
// 串行有关联
async.waterfall({
    function (callback) {
        callback(null,'one','two')  
    },
    function (arr1,arr2,callback) {
        callback(null,arr1,arr2,'three')
        console.log(arr1);
    },
    function (arr1,arr2,arr3,callback){
        callback(null,arr1,arr2,arr3,'done')
    }
},
    function(err,results){
    console.log(results)
    }
)
//第一传给第二个函数one，two，第二个传给第三个three

