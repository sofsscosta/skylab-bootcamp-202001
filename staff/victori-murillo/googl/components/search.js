"use strict";

function Search(props) {
  var search = document.createElement("form");
  search.classList.add("search");

  search.innerHTML = '<h2>' + props.title + '</h2>'
    .concat('<input type="text" name="query" placeholder="search">')

  search.addEventListener("submit", function(event) {
    event.preventDefault();

    var query = this.query.value;
    props.onSubmit(query);
  });

  return search;
}