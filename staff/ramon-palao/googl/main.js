var form = document.querySelector("form")

form.addEventListener("submit", function(event){
    event.preventDefault();

    var query = this.query.value;

    googl(query, function(results){
        console.log(results);
    });
});
    