
var padre = document.children;

    function html(hijo){
        var code ='';
        for(var i = 0; i < hijo.length; i++){

            var padre = hijo[i];
            code += '<' + padre.tagName + '>\n'

                if(padre.children.length){
                    code += html(padre.children)
                }

            code += '</' + padre.tagName + '>\n'

        }
        return code;
    }
    
console.log(html(padre));