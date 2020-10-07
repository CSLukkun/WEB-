//采用静态方法构建操作符
//例如
Observable.fromArray = function(array) {
    if(!Array.isArray(array)) {
        // 如果傳入的參數不是陣列，則拋出例外
        throw new Error('params need to be an array');
    }
    return new Observable(function(observer) {//new回来的一定要是一个有着观察者行为的可观察的对象
        try{
            // 遍歷每個元素並送出
            array.forEach(value => observer.next(value))
            observer.complete()
        } catch(err) {
            observer.error(err)
        }
    });
}

var observable = Observable.fromArray([1,2,3,4,5]);
//而上面只是将数组元素变成了可观察对象
//下面才是绝大多数操作符的特性
//接受一个可观察对象，返回一个可观察对象
//这是一个可观察对象的行为所以建立实例方法

class Observable {
    constructor(subscribe) {
      this._subscribe = subscribe; // 把 subscribe 存到屬性中
    }
    subscribe(observerOrNext, error, complete) {
      const observer = new Observer(observerOrNext, error, complete);
      // 先用 this.operator 判斷當前的 observable 是否具有 operator 
      if(this.operator) {
        this.operator.call(observer, this.source)//上一次的可观察对象
      } else {
        // 如果沒有 operator 再直接把 observer 丟給 _subscribe
        this._subscribe(observer);
      }
      return observer;
    }
    map(callback) {
      const observable = new Observable(); // 建立新的 observable
      
      observable.source = this; // 保存上一次的observable，我们要对上一次的可观察对象进行subscribe
      
      observable.operator = {
          call: (observer, source) => { 
              // 執行這個 operator 的行為
              const newObserver = new MapObserver(observer, callback);//创建了新的观察者
              //做原本observer和callback的处理
              // 建立包裹後的 observer
              // 訂閱原本的資料源，並回傳
              return source.subscribe(newObserver);//这个新的观察者是对元素的处理而不是显示
          }
      }; // 儲存當前 operator 行為，並作為是否有 operator 的依據，
      
      return observable; // 返回這個新的 observable
    }
  }

  class MapObserver extends Observer {
    constructor(observer, callback) {//
      // 這裡會傳入原本的 observer 跟 map 的 callback
      super(observer); // 因為有繼承所以要先執行一次父層的建構式//为了得到父类的this.destination属性
      this.callback = callback; // 保存 callback
      this.next = this.next.bind(this); //this.next继承了Observer的next方法
    }
    next(value) {//重写自己的next
      try {
        this.destination.next(this.callback(value)); //先处理，再调用父层的next
        // this.destination 就是父层的观察者
        // 這裡 this.callback(value) 就是 map 的操作
      } catch (err) {
        this.destination.error(err);
        return;
      }
    }
  }
  var observer = {
    next: function(value) {
      console.log(value)
    },
    complete: function() {
        console.log('complete!')
    }
  }

  var observable = Observable.fromArray([1,2,3,4,5])
                  .map(x => x + 3)
                  .map(x => x + 1)

observable.subscribe(observer);
//最后才处理
  