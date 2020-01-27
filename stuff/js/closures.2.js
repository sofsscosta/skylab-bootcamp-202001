function speaker(name) {
    return function (message) {
        console.log(name + ': ' + message)
    }
}

var john = speaker('John')

john('hola mundo')
john('bye world')

var anna = speaker('Anna')

anna('hola mundo')
anna('bye world')
// John: hola mundo
// John: bye world
// Anna: hola mundo
// Anna: bye 

// refactor to allow name re-definition

function speaker(name) {
    function speak(message) {
        console.log(name + ': ' + message)
    }

    speak.setName = function(newName) { name = newName }

    return speak
}

var john = speaker('John')

john('hola mundo')
john('bye world')

john.setName('Johnny')
john('hola mundo')
john('bye world')

var anna = speaker('Anna')

anna('hola mundo')
anna('bye world')
// John: hola mundo
// John: bye world
// Johnny: hola mundo
// Johnny: bye world
// Anna: hola mundo
// Anna: bye world
