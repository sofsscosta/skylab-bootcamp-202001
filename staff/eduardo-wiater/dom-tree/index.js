var resumen = document.children

function findTags(parametro) {
  var cont = "";

  for (var i = 0; i < parametro.length; i++) {
    var ram = parametro[i];

    cont += '<' + ram.tagName + '>';
    if (ram.children.length) {
      cont += findTags(ram.children);
    }

  }

  cont += '</' + ram.tagName + '>'

  return cont
}

console.log(findTags(resumen))
