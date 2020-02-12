var form = document.querySelector("form");
var container = document.querySelector("#results");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  container.innerHTML = "";
  var query = this.query.value;

  googl(query, function(results) {

    var ul = document.createElement("ul");

    results.forEach(function(element) {
      var li = document.createElement("li");
      var h4 = document.createElement("h4");
      var p = document.createElement("p");

      h4.innerText = element.title;
      p.innerText = element.description;

      li.appendChild(h4);
      li.appendChild(p);
      ul.appendChild(li);
    });

    document.getElementById("results").appendChild(ul);
  })



});
