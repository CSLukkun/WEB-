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
class Example{
    sum(a,b){
        console.log(a+b);
    }
    // 原型方法
    static sum(a,b){
        console.log(a+b);
        // 静态方法
    }
}
// 典型class的实现
class Computer{

    constructor(size,prize,cpu){
        this.cpu = cpu
        this.size = size
        this.prize = prize
        //自动提升为对象的属性
    }
    showCpu(){
        console.log(this.cpu);
    }
}
var myThinkPad = new Computer(1,21,32);
myThinkPad.showCpu();

class deskTypeComputer extends Computer{
    constructor(size, prize, cpu,crateLong, crateWidth, crateHeight){
        //继承父类的属性，super要放在第一行
        super(size, prize, cpu)
        //定义自己的属性
        this.crateLong = crateLong
        this.crateWidth = crateWidth
        this.crateHeight = crateHeight
}
}