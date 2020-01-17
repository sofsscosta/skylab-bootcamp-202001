var page = document.children;
var currentTag = '';
function getTree(document) {
    for (var i = 0; i < document.length; i++) {
        currentTag = currentTag + '<' + document[i].tagName + '>\n';
        var currentChild = document[i];
        if (currentChild.children.length){
            getTree(currentChild.children);
        }
        var closedTag = closeTag(currentChild);
        if (closeTag ===""){
            currentTag += closedTag + '\n';
        }else{
            currentTag += closedTag;
        }
        
    }
}
function closeTag(element) {
    if (element.innerHTML) {
        var closingTag = '</' + element.tagName + '>\n';
        return closingTag;
    } else {
        return '';
    }
}
getTree(page);
console.log(currentTag);








//var page = document.querySelector('html');
//var currentTag = '';

//function getTree(document) {
//    for (var i = 0; i < document.children.length; i++) {
//        document.innerHTML += document.children[i];
//        var currentChild = document.children[i];
//        getTree(currentChild);
//        console.log(currentChild);
//    }
//}
//getTree(page);
