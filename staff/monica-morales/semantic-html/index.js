/*function html(elements) {
    var code = '';

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        code += '<' + element.tagName + '>';

        if (element.children.length) {
            code += html(element.children);
        }

        code += '</' + element.tagName + '>';
    }

    return code;
}

console.log(html(document.children));
function html(elements) {
    var code = '';

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        code += '<' + element.tagName + '>';

        if (element.children.length) {
            code += html(element.children);
        }

        code += '</' + element.tagName + '>';
    }

    return code;
}

console.log(html(document.children));

// 2

function html(elements, indent) {
    var code = '';

    if (indent === undefined) indent = '';

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        code += indent + '<' + element.tagName + '>\n';

        if (element.children.length) {
            code += html(element.children, indent + '\t');
        }

        code += indent + '</' + element.tagName + '>\n';
    }

    return code;
}

console.log(html(document.children));*/

// 3

function html(elements, indent) {
    var code = '';

    if (indent === undefined) indent = '';

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (isInline(element))
            code += (isInline(element.parentElement)? '' : indent) + '<' + element.tagName + '>';
        else if (isSelfClosed(element))
            code += indent + '<' + element.tagName + '/>\n';
        else
            code += indent + '<' + element.tagName + '>\n';

        if (element.children.length) {
            code += html(element.children, indent + '\t');
        }

        if (isInline(element))
            code += '</' + element.tagName + '>' + (isInline(element.parentElement)? '' : '\n');
        else if (!isSelfClosed(element))
            code += indent + '</' + element.tagName + '>\n';
    }

    return code;
}

//var inline = ['h1', 'h2', 'h3', 'h5', 'span', 'time', 'title', 'strong', 'td', 'li', 'button', 'a' ]; // TODO include more tags

function isInline(element) {
    return inline.indexOf(element.tagName.toLowerCase()) > -1;
}

var selfClosed = ['header','nav','footer','article','aside','details','figcaption','figure','main','mark','section','summary','time']; // TODO include more tags

function isSelfClosed(element) {
    return selfClosed.indexOf(element.tagName.toLowerCase()) > -1;
}



console.log(html(document.children));

