function findChildren(argument){
    var code = '';
    for(var i = 0; i < argument.length; i++){
        var element = argument[i];
        code += "<" + element.tagName + ">";
        if (element.children.length){
            code += findChildren(element.children);
        }
        code += "<" + element.tagName + ">"
    }
    return code;

        }
   
        console.log(findChildren(document.children));
