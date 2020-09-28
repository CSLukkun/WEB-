class Example {
    constructor(a) {
        this.a = a;
    }
}
class Example{
    constructor(){
      console.log('我是constructor');
    }
}//在创建这个歌这个对象的实例之后就会出现
new Example(); // 我是constructor