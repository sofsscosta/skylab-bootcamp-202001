function isSemantic(element) {
    return semantic.indexOf(element.tagName.toLowerCase()) > -1;
}
var semantic = ['html','body','head','header','article','aside','bdi','details','dialog','figcaption','figure','footer','main','mark','meter','nav','progress','rp','rt','ruby','section','summary','time','wb'];
function html(elements, indent) {
    var code = '';
    if (indent === undefined) indent = '';
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (isSemantic(element)) {
            code += indent + '<' + element.tagName + '>\n';
            if (element.children.length) {
                code += html(element.children, indent + '\t');
            }
            code += indent + '</' + element.tagName + '>\n';
        } else {
            code += html(element.children, indent + '\t');
        }
    }
    return code;
}
console.log(html(document.children));

