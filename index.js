
function receivesAFunction (callBack){
    const spy = function() {
        return "This is a callback function"
    }
    callBack()
}

function returnsANamedFunction() {
    return function namedFunction(){
        return "This is a named function"
    }
 
}


function returnsAnAnonymousFunction(){
    return function(){
        let message = "This is an anonymous function"
        return message
    }
}
