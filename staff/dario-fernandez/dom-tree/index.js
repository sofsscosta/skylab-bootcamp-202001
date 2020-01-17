var domTree = ''
function getDOMTree(arrayOfChilds){
    for(var i = 0; i < arrayOfChilds.length; i++) {
        var element = arrayOfChilds[i]
        domTree += '<' + element.tagName + '>'
        if(element.children.length) {
            getDOMTree(element.children)
        }
        domTree += '</' + element.tagName + '>'
    }
}
getDOMTree(document.children)
console.log(domTree)

// var domTree = document.getElementsByTagName('*')
// var domTreeString = ''
// for(var i = 0; i < domTree.length; i++) {
//     if(i === domTree.length - 1){
//         domTreeString += domTree[i].localName
//     } else {
//         domTreeString += domTree[i].localName + ', '
//     }
// }
