//var is function scoped whereas let is block scoped
//The scope is global when a var variable is declared outside a function. 
//This means that any variable that is declared with var outside a function block is available for use in the whole window.
    
    var tester = "hey hi";
    
    function newFunction() {
        var hello = "hello";
    }
    console.log(hello); // error: hello is not defined
