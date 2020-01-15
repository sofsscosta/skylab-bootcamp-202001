var element = document.children;

function html (elements) {
    var code = '';

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        code += '<' + element.tagName + '>';

        if(element.children.length) {
            
            code += html(element.children)

        }

        code += '</' + element.tagName + '>';
        
    }
    return code;semantic-
}
console.log(html(document.children));

