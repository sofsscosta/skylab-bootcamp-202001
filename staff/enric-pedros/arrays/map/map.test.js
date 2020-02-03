
console.log('TESTING MAP ARRAY')

var a = [1,2,3,4]
var result = [2,3,4,5]

var arrayproof = map(a,function(element){
    return (element + 1) 
})

console.assert(a.length === arrayproof.length,'should be the same length')
for (var i=0; i < arrayproof.length;i++ ){
    console.assert(arrayproof[i] === result[i],'it should be the result plus one')
}
