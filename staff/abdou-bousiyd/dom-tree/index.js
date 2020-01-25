
function html(elements) {
    var code = '';

    for (const element of elements) {
        code += '<' + element.tagName + '>';
        try{
            if (element.children.length) code += html(element.children);
        }catch(error){
            console.log('error')
        }
        code += '</' + element.tagName + '>\n\n';
    }

    return code;
}
console.log(html(document.children));

//------------------------
//------------------------
const tags = {
    inline: ['h1', 'h2', 'h3', 'h5', 'span', 'time', 'title', 'strong', 'td', 'li', 'button', 'a' ],
    selfClosed: ['input', 'link', 'br', 'img', 'source']
}

function html(elements, indent) {
    let code = '';

    const {inline, selfClosed} = tags

    if (!indent) indent = '';

    Array.from(elements).forEach(function(element) { // convertir la coleccion en un array usando metodo from

        // extraer codigo repetido
        const includeSelfClose = includes(element, selfClosed)
        const includeInlineParent = includes(element.parentElement, inline) 
        const includeInline = includes(element, inline)

        if (includeInline)
            code += (includeInlineParent || indent) + '<' + element.tagName + '>';
        else if (includeSelfClose)
            code += indent + '<' + element.tagName + '/>\n';
        else
            code += indent + '<' + element.tagName + '>\n';

        if (element.children.length) code += html(element.children, indent + '\t');
        
        if (includeInline) code += '</' + element.tagName + '>' + (includeInlineParent || '\n');
        if (!includeSelfClose) code += indent + '</' + element.tagName + '>\n';
    })

    return code;
}


function includes(element, tags) { // usar una sola function con includes
    if (!element) return '';
    return tags.includes(element.tagName.toLowerCase());
}

console.log(html(document.children));
