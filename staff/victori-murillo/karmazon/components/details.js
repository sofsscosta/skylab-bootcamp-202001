function Details(props) {
  var details = document.createElement("div")
  details.classList.add('details')

  Interactive.call(this, details)
  
  var {detail} = props

  console.log(detail)

  details.innerHTML = '<h2>' + detail.name + '</h2>'
  .concat(`<h3>${detail.maker.toUpperCase()}, ${detail.year}</h3>`)
  .concat(`<p>${detail.description}</p>`)
  .concat(`<h4>$${detail.price}</h4>`)
  .concat(`<img src=${detail.image} >`);
  // .concat('<button type="submit">Search</button>')
}

Details.prototype = Object.create(Interactive.prototype)