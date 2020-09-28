function testAwait(){
    return new Promise((resolve) => {
        setTimeout(function(){
           console.log("testAwait");
           resolve();
        }, 1000);
    });
 }//返回的是一个promise对象
  
 async function helloAsync(){
    await testAwait();
    console.log("helloAsync");
  }
 helloAsync();
 // testAwait
 // helloAsync
//  遇到await，先暂停操作，直到异步事件结束，再继续进行