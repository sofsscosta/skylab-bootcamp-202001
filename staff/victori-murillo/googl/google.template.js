var input = document.querySelector("input")
var container = document.querySelector("main")

input.addEventListener("keyup", function(e) {

  setTimeout(function(){
    container.innerHTML = ""

     googl(input.value, function(results) {

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
  
      container.appendChild(ul);
  
      
    })



    }, 500);

  



});
