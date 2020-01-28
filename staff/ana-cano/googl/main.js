var form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    //evitar comportamiento que tiene por defecto un formulario
    event.preventDefault();
    //this.querySelector("input").value;
    document.querySelector("ul").innerText = "";
    var query = this.query.value;

    googl(query, function(results) {
        results.forEach(function(element) {

            var item = document.createElement("li")
            var title = document.createElement("h3")
            var description = document.createElement("p")

            title.innerText = element.title
            description.innerText = element.description
            item.appendChild(title)
            item.appendChild(description)

            document.querySelector("ul").appendChild(item)
        })



    })

})