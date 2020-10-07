//上一个版本我们说到了create就是返回了一个subscribe的可观察对象
//现在我们来创建一个可观察类
//我们在创建一个可观察对象的时候，传入一个参数，里面定义了
//observer的若干行为，现在我们new的是传入行为
var observable = new Observable(function(observer){
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
    observer.next('not work');
})
//在类中我们要保存这些行为
//并且在调用subsribe的行为
class Observable {
    constructor(subscribe) {
      this._subscribe = subscribe; // 把 subscribe 存到屬性中
    }
    subscribe(observerOrNext, error, complete) {
      const observer = new Observer(observerOrNext, error, complete);//此函数已经在上个版本中写过了
      this._subscribe(observer);
      return observer;//
    }
  }
  Observable.create = function(subscribe) {
    return new Observable(subscribe);
}//静态方法：就是new了一个
var observable = Observable.create(function(observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
  observer.next('not work');
})//静态方法调用

  
  var observer = {
    next: function(value) {
      console.log(value)
    },
    complete: function() {
        console.log('complete!')
    }
  }//这个可观察对象仅仅定义了行为，但是没有定义complete和err的处理
  observable.subscribe(observer);