
function html(padre,ident)
{
code = "";
if (ident === undefined)
{ 
    ident = " ";
}
    for (var i = 0; i<padre.length; i++)
    {
        var etiqueta = padre[i];
        code += "<" + etiqueta.tagName + ">";
        if (etiqueta.children.length)
        {
            code += "\n";
            code += ident + html(etiqueta.children,ident);
        }
        code += "</" + etiqueta.tagName + ">" + "\n";
        code += ident;
    }
    return code
}
console.log(html(document.children));
