
function findChildren(parameter) {
    var code = '';
    for (var i = 0; i < parameter.length; i++) {
        var element = parameter[i]
        code += '<' + element.tagName + '>';
        if (element.children.length) {
            code += findChildren(element.children);
    }
            code += '</' + element.tagName + '>';
        }
    
    return code;
}
console.log(findChildren(document.children));