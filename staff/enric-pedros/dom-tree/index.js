var element = document.children[0]
var code = ""
function html(elem) {
  code += "<" + elem.tagName + ">"
  for (var i = 0; i < elem.children.length; i++) {
    if (elem.children.length) {
      html(elem.children[i])
    }
  }
  code += "</" + elem.tagName + ">"
}
html(element)
console.log(code)