function html(elements, ident) {

  var code = ""
  if (ident === undefined) ident = ''

  for (var i = 0; i < elements.length; i++) {

    var element = elements[i]
    code += ident + "<" + element.tagName + ">\n"

    if (element.children.length) {
      code += html(element.children, ident + "\t")
    }

  }

  code += ident + "</" + element.tagName + ">\n"

  return code

}

console.log(html(document.children))