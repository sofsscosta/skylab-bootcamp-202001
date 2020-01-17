
function html(elements) {

  var code = ""
  
  
  for (var i = 0; i < elements.length; i++) {

    var element = elements[i]

    code += "<" + element.tagName + ">"

    if (element.children.length) {
      code += html(element.children)
    }
    
  }

  code += "</" + element.tagName + ">"

  return code
}

console.log(html(document.children))


//2

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

console.log(html(document.children));