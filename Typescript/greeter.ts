function greeter(person:string):string {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);