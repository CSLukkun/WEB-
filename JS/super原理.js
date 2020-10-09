function Parent(name){
    this.name = name;
}
Parent.prototype.getName = function(){
    return this.name
}
function Child(){
    Parent.call(this,name);
    this.age;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
Child.prototype.getAge = function(){
    return this.Age;
}
var people = new Child('Liliy',20)
console.log(people.getName)


//
class Parent{
    constructor(name){
    this.name = name;
    }
    getName(){
    return this.name
    
    }
}
class Child extends Parent{
    constructor(name,age){
        super();
    }
    getAge(){
        return this.age;
    }
}