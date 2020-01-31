function toUpperCase(name) { return name.toUpperCase() }

function print(name)  { console.log(toUpperCase(name)) }

print('pepito')
//PEPITO

// 2

function toUpperCase(name) { return name.toUpperCase() }

function print(name)  { console.log(toUpperCase(name)) }

var _print = print

print = function() {
    console.log(print.name, 'start')
    _print.apply(undefined, arguments)
    console.log(print.name, 'end')
}

var _toUpperCase = toUpperCase

toUpperCase = function() {
    console.log(toUpperCase.name, 'start')
    var ret = _toUpperCase.apply(undefined, arguments)
    console.log(toUpperCase.name, 'end')
    return ret
}

print('pepito')
//print start
//toUpperCase start
//toUpperCase end
//PEPITO
//print end

// 3

function toUpperCase(name) { return name.toUpperCase() }

function print(name)  { console.log(toUpperCase(name)) }

print = spy(print)

toUpperCase = spy(toUpperCase)

function spy(func) {
    return function() {
        console.log(func.name, 'start')
        var ret = func.apply(undefined, arguments)
        console.log(func.name, 'end')
        return ret
    }
}

print('pepito')
//print start
//toUpperCase start
//toUpperCase end
//PEPITO
//print end

// 4

function toUpperCase(name) { return name.toUpperCase() }

function print(name)  { console.log(toUpperCase(name)) }

print = spy(print)

toUpperCase = spy(toUpperCase)

function spy(func) {
    return function() {
        var _arguments = arguments;

        console.log(func.name +  '(' + (function() {
            var args = '';

            for (var i = 0; i < _arguments.length; i++) {
                args += _arguments[i];
                
                if(i < _arguments.length -1) args += ', ';
            }

            return args;
        })() + ') {');

        var ret = func.apply(undefined, arguments);

        console.log('} ' + func.name + ' => ' + ret);

        return ret;
    }
}

print('pepito')
//print(pepito) {
//toUpperCase(pepito) {
//} toUpperCase => PEPITO
//PEPITO
//} print => undefined

// 5

function toUpperCase(name) { return name.toUpperCase() }

function print(name)  { console.log(toUpperCase(name)) }

print = spy(print)

toUpperCase = spy(toUpperCase)

function spy(func) {
    return function() {
        console.log(func.name +  '(' + (function() {
            var args = '';

            for (var i = 0; i < arguments.length; i++) {
                args += arguments[i];
                
                if(i < arguments.length -1) args += ', ';
            }

            return args;
        }).apply(undefined, arguments) + ') {');

        var ret = func.apply(undefined, arguments);

        console.log('} ' + func.name + ' => ' + ret);

        return ret;
    }
}

print('pepito')
//print(pepito) {
//toUpperCase(pepito) {
//} toUpperCase => PEPITO
//PEPITO
//} print => undefined

// 6

function spy(func, ctx) {
    return function() {
        console.log(func.name +  '(' + (function() {
            var args = '';

            for (var i = 0; i < arguments.length; i++) {
                args += arguments[i];
                
                if(i < arguments.length -1) args += ', ';
            }

            return args;
        }).apply(ctx, arguments) + ') {');

        var ret = func.apply(ctx, arguments);

        console.log('} ' + func.name + ' => ' + ret);
        
        return ret;
    }
}

var a = [1, 2, 3];

a.forEach = spy(a.forEach, a);
a.forEach(console.log);

//a.forEach(spy(console.log));