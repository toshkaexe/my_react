var ourArray = [1,2,3];


var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2,3,4,5],[0,0,0,0]));


const increment = (function(){

return function increment(number, value) {
    return number + value;
}

})();


console.log(increment(5,2));
console.log(increment(2));



const sum = (function(){

    return function sum(x,y,z){
        const args = [x,y,z];
        return args.reduce((a,b) => a+b, 0);
    };
})();
console.log(sum(1,2,3));

// ...
const sumExtended = (function(){

    return function sumExtended(...args){
   
        return args.reduce((a,b) => a+b, 0);
    };
})();
console.log( "sumExtended = " +  sumExtended(1,2,3,4,5,6,7,8));



const createPerson = (name, age, gender) => ({name, age, gender});

console.log("createPerson = " + createPerson("Yo Hao", 56, "malle"));


//closures
function createCalcFunction(n){
return function(){
    console.log(1000*n)
}
}

createCalcFunction(23)
const calc = createCalcFunction(234)
console.log("createCalcFuntion: "  +calc())


function urlGenerator(domain){
    return function(url){
        return `https://${url}.${domain}`

    }
}


const comUrl = urlGenerator('com')
console.log(comUrl('google'));



