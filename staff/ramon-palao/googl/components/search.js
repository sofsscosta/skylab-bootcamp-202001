"use strict";

function createSearch(selector, callback) { debugger

    var search = document.querySelector(selector);

    search.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        callback(query);
    });

    search.toggle = function(){
        this.classList.toggle("search--hide");
    };

    return search;
}