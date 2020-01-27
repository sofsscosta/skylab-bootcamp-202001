// "two selfies", no semicolon (really two selfies!?)

(function() { console.log(1) })()

(function() { console.log(2) })()
//1
// Uncaught TypeError: (intermediate value)(...) is not a function
//    at <anonymous>:3:1

// same, but with semicolon (how is it that now it works fine?)

(function() { console.log(1) })();

(function() { console.log(2) })()
//1
//2

// refactor, to get same results without semicolon, now there are not 2 selfies, but an invocation chain

(function() { 
    // console.log(1)
    return function() { 
        console.log(1)
        
        return function(expression) { return expression }
    } 
})()()

(function() { 
    // console.log(2)
    return function() { 
        console.log(2) 
    } 
})()()

// now same result as adding the semicolon, then getting two selfies again

(function() { 
    // console.log(1)
    return function() { 
        console.log(1)
        
        return function(expression) { return expression }
    } 
})()();

(function() { 
    // console.log(2)
    return function() { 
        console.log(2) 
    } 
})()()