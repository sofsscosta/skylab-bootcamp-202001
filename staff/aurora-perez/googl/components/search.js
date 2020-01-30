
function createSearch(idClass, props) { 
  var search = document.querySelector('.' + idClass);

  search.addEventListener("submit", function(event) { 
    event.preventDefault();

    var query = this.query.value;
    
    props.onSubmit(query);
  });

  search.toggle = function() {
        this.classList.toggle('search--hide');
    };

  return search;
}