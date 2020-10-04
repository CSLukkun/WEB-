const emptyObserver = {
    next: () => {},
    error: (err) => {
        throw err;
    },
    complete: () => {}
}
//预设空的观察者，表明subcribe里面没有任何参数或参数不合法
class Observer {
    constructor(destinationOrNext) {
        switch (arguments.length) {
            case 0:
                // 空的 observer
                this.destination = this.safeObserver(emptyObserver);//在这里保留下我们返回的observer物件，以便三个方法调用
                break;
            case 1:
                if (!destinationOrNext) {
                    // 空的 observer
                    this.destination = this.safeObserver(emptyObserver);
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    // 傳入了 observer 物件
                    this.destination = this.safeObserver(destinationOrNext, error, complete);
                    break;
                }
                default:
                    // 如果上面都不是，代表應該是傳入了一到三個 function
                    this.destination = this.safeObserver(destinationOrNext, error, complete);
                    break;
        }
        //subcribe里面只能传观察者对象或者三个处理函数（分别是正常运行函数，错误处理函数，结束函数）
    }
    safeObserver(observerOrNext, safeerror, safecomplete) {
        let next;

        if (typeof (observerOrNext) === 'function'&&typeof (observerOrNext)===typeof (safeerror)===typeof (safecomplete)) {
            // observerOrNext 是 next function
            next = observerOrNext;
            error = safeerror;
            completet = safecomplete;
        } else if (observerOrNext) {
            // observerOrNext 是 observer 物件
            next = observerOrNext.next || function(){};
            error = observerOrNext.error || function (err) {
                throw err
            };
            complete = observerOrNext.complete || function(){}
        }
        // 最後回傳我們預期的 observer 物件
        return {
            next: next,
            error: error,
            complete: complete
        };
    }

    next(value) {
        if (!this.isStopped && this.next) {//设定退订标志位和停止标志位
            // 先判斷是否停止過
            try {
                this.destination.next(value); // 傳送值
            } catch (err) {//发生错误就退订，且抛出错误
                this.unsubscribe();
                throw err;
            }
        }
    }

    error(err) {
        if (!this.isStopped && this.error) {
            // 先判斷是否停止過
            try {
                this.destination.error(err); // 傳送錯誤
            } catch (anotherError) {
                this.unsubscribe();
                throw anotherError;
            }
            this.unsubscribe();
        }
    }
    
    complete() {
        if (!this.isStopped && this.complete) {
            // 先判斷是否停止過
            try {
                this.destination.complete(); // 發送停止訊息
            } catch (err) {
                this.unsubscribe();
                throw err;
            }
            this.unsubscribe(); // 發送停止訊息後退訂
        }
    }
    //是否停止

    unsubscribe() {
        this.isStopped = true;
    }
    //是否退订
}

function create(subscriber) {
    const observable = {
        subscribe: function (observerOrNext, error, complete) {
            const realObserver = new Observer(observerOrNext, error, complete)
            subscriber(realObserver);
            return realObserver;
        }
    };
    return observable;
}//create的本质是返回一个带有subscribe的可观察对象

var observable = create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.error(3);
    observer.complete();
    observer.next('not work');
})
var observer = {
    next: function (value) {
        console.log(value)
    },
    complete: function () {
        console.log('complete!')
    },
    error: function () {
        console.log('err')
    }
}
