console.log('DEMO && TESTING Every method')

var a = [1,2,3,4]

console.log(every(a,function(element){
    return element < 4
}))
var _error;
try {
    every(1,function(){})
} catch (error) {
    _error = error
}finally{
    console.log(_error)
    console.assert(_error.message ==='1 is not Array','should fail with message "1 is not an Array" but got ' + _error.message + ' instead')
    console.assert(_error instanceof TypeError, 'shoulb be of type TypeError')
}

var secondTestParam = true;
try{
    every([1,2,3], secondTestParam)
}catch (error){
    _error = error 
} finally {
    console.assert(_error.message === secondTestParam + ' is not a Function got ' + typeof secondTestParam + ' instead', 'should message be different')
    console.assert(_error instanceof TypeError, 'should be of type TypeError')
}