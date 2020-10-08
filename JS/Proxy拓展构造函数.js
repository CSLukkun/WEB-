function extend(sup, base) {
    // var descriptor = Object.getOwnPropertyDescriptor(
    //   base.prototype, "constructor"
    // );//得到自己原型的构造函数
    // base.prototype = Object.create(sup.prototype);//base对象继承了sup对象
    var handler = {
      construct: function(target, args) {
        var obj = Object.create(base.prototype);//创建了一个base对象
        // console.log(this === handler);
        this.apply(obj, args);
        return obj;
      },
      apply: function( that, args) {
        sup.apply(that, args);//obj可以使用sup里的属性
        base.apply(that, args);//obj可以使用base里的属性
      }
    };
    var proxy = new Proxy(base, handler);
    // descriptor.value = proxy;
    // Object.defineProperty(base.prototype, "constructor", descriptor);
    //修改自己的原型的构造函数
    return proxy;
  }
  
  var Person = function (name) {
    this.name = name
  };
  
  var Boy = extend(Person, function (name, age) {
    this.age = age;
  });
  
  Boy.prototype.sex = "M";
  
  var Peter = new Boy("Peter", 13);
  console.log(Peter.sex);  // "M"
  console.log(Peter.name); // "Peter"
  console.log(Peter.age);  // 13