var myIterable = {
    *[Symbol.iterator](){
        yield 1;
        yield 2;
        yield 3;  
    }
}
var ceshi = {
    a :1,
    b :2
}
for(let value of myIterable){
    console.log(value);
}
for(let i in ceshi){//用不了of
    console.log(i);
}

var arr = [1,2,3];
var iterator = arr[Symbol.iterator]();
for(let i =0;i<4;i++){
console.log(iterator.next());

}
