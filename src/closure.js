//use closure

const person1 = {name: 'Mike', age: 22, job: 'Frontend'}

const person2 = {name: 'John', age: 19, job: 'SMM'}

function logPerson(){
    console.log(`Person: ${this.name}, ${this.age}, ${this.job} `)
}

function bind(context, fn){
    return function(...args){
        fn.apply(context,args)
    }
}
bind(person1, logPerson)();