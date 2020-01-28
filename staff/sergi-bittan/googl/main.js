var submit = document.querySelector("form");


submit.addEventListener("submit",function(event){
    var query = this.query.value;
    event.preventDefault();
    var ul = document.createElement("ul");
    googl(query, function(results){
        for (var i = 0;i < results.length; i ++)
        {

            var result = results[i];
            var li = document.createElement("li");

            var h3 = document.createElement("h3");
            h3.innerHTML = result.title;
            
            var p = document.createElement("p");
            
            p.innerHTML = result.description;
            console.log(result);
            li.append(h3,p)
            ul.append(li)
        }
        var div = document.getElementById("main");
        div.innerText = "";
        div.append(ul)
    })

  })
