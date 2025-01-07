//hello_world.js
var createHelloWorld=function(){
    return function(){
        return "Hello World";
    };
};
//test the function
const hello=createHelloWorld();
console.log(hello());