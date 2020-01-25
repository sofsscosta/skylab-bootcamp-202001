var start = Date.now()

function time() {
    return (Date.now() - start) / 1000
}

console.log('start', time())

var timeout = setTimeout(function() { console.log('hello 1', time()) }, 1002) // ASYNC
//clearTimeout(timeout)
setTimeout(function() { console.log('hello 2', time()) }, 1000) // ASYNC
setTimeout(function() { console.log('hello 3', time()) }, 0) // ASYNC
setTimeout(function() { console.log('hello 4', time()) }, 5000) // ASYNC
setTimeout(function() { 
    console.log('hello 5', time()); 
    while (time() < 6); // SYNC 
}, 0) // ASYNC

while (time() < 3); // SYNC 

console.log('end', time())
