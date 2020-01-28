var form = document.querySelector("form")

form.addEventListener("submit", function(event){
    event.preventDefault();

    var query = this.query.value;
    var ul = document.createElement("ul");
    googl(query, function(results){
        //console.log(results);
        for(var i = 0; i < results.length; i++){
            var result = results[i];

            var li = document.createElement("li");
            var h3 = document.createElement("h3");
            var p = document.createElement("p");

            h3.innerHTML = result.title;
            p.innerHTML = result.description;

            li.append(h3, p);
            ul.append(li);
        }
        var div = document.getElementById("div");
        div.innerHTML = "";
        div.append(ul);
    });
});
    