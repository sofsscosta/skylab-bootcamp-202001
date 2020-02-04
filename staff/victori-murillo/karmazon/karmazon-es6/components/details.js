class Details extends Component {

  constructor({detail}) {
    super(document.createElement("div"))
    var details = this.container

    details.classList.add('details')
  
    details.innerHTML = `<h2>detail.name</h2>
    <span>X</span><h3>${detail.maker.toUpperCase()}, ${detail.year}</h3>
    <p>${detail.description}</p><h4>${detail.price}</h4>
    <img src=${detail.image}>`
  }

}