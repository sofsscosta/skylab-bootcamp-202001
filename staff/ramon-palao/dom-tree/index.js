function html(elements, indent) {
    var code = '';
    if (indent === undefined) indent = '';
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (isSemantic(element)){
            code += indent + '<' + element.tagName + '> \n'
            if (element.children.length) {
                code += html(element.children, indent + '\t');
            }
            
            if (element.children.length) {
                code += html(element.children, indent + "\t");
            }
            code += indent + "</" + element.tagName + "> \n"
        } else {
            return code += html(element.children, indent + "\t");
        }   
    }
    return code;
}
var semantic = ['article', 'aside', 'details', 'figcaption', 'figure', 'footer', 'header', 'main', 'mark', 'nav', 'section', 'summary', 'time', 'html', 'body', 'head'];
function isSemantic (element){
    return semantic.indexOf(element.tagName.toLowerCase())> -1;
}
console.log(html(document.children));