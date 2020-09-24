function hello(){
console.log('Hello', this)

}
 window.hello();
 
const person = {
    name: 'Anton',
    age: 30,
    sayHello: hello
}