function isInline(element) {
    var inline = ['h1', 'h2', 'h3', 'h5', 'span', 'time', 'title', 'strong', 'td', 'li', 'button', 'a'];
    return inline.indexOf(element.tagName.toLowerCase()) > -1;
}

function isSelfClosed(element) {
    var selfClosed = ['input', 'link', 'br', 'img', 'source'];
    return selfClosed.indexOf(element.tagName.toLowerCase()) > -1;
}

function html(elements, indent) {
    var code = '';

    if (indent === undefined) indent = '';

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (isInline(element))
            code += (isInline(element.parentElement) ? '' : indent) + '<' + element.tagName + '>';
        else if (isSelfClosed(element))
            code += indent + '<' + element.tagName + '/>\n';
        else
            code += indent + '<' + element.tagName + '>\n';

        if (element.children.length) {
            code += html(element.children, indent + '\t');
        }

        if (isInline(element))
            code += '</' + element.tagName + '>' + (isInline(element.parentElement) ? '' : '\n');
        else if (!isSelfClosed(element))
            code += indent + '</' + element.tagName + '>\n';
    }

    return code;
}

console.log(html(document.children));