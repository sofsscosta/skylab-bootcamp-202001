var form = document.querySelector("form");

var container = document.createElement("div");




form.addEventListener("submit", function (event) {
    event.preventDefault();
    var child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }

    var ul = document.createElement("ul");

    container.appendChild(ul);


    var query = this.query.value;

    googl(query, function (results) {

        results.forEach(function (result) {
            var li = document.createElement("li");
            var h3 = document.createElement("h3");
            var p = document.createElement("p");

            var title = document.createTextNode(result.title);
            var description = document.createTextNode(result.description);

            h3.appendChild(title);
            p.appendChild(description)

            ul.appendChild(li).appendChild(h3).appendChild(p);

        });

    });

    form.insertAdjacentElement('afterend', ul)
});

