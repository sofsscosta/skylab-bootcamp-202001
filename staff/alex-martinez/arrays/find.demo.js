var array = ['js','nodejs','reactjs'];

function callback(element){
    return element;
}

console.log('find');

console.log(find(array,callback('nodejs')));