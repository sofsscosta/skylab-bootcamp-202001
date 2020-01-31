'use strict';

function Search(props) {
    var search = document.createElement('form');
    search.classList.add('search');

    search.innerHTML += '<h2>' + props.title + '</h2>'
        .concat('<input type="text" name="query" placeholder="criteria">')
        .concat('<button type="submit">Search</button>')

    search.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        props.onSubmit(query);
    });

    search.showWarning = function (warning) {
        // OPTION 1 reusing the same feedback

        // var feedback = this.querySelector('.feedback');

        // if (feedback) {
        //     feedback.showMessage(warning);
        // } else {
        //     var feedback = Feedback({ level: 'warning', message: error});

        //     var button = this.querySelector('button');

        //     this.insertBefore(feedback, button);
        // }

        // OPTION 2 special effects Abdou © 2020 👌

        var feedback = Feedback({ level: 'warning', message: warning });

        var button = this.querySelector('button');

        this.insertBefore(feedback, button);

        setTimeout(function () {
            this.removeChild(feedback);
        }.bind(this), 3000);
    };

    search.showError = function (error) {
        // OPTION 1 reusing the same feedback

        // var feedback = this.querySelector('.feedback');

        // if (feedback) {
        //     feedback.showMessage(error);
        // } else {
        //     var feedback = Feedback({ level: 'error', message: error});

        //     var button = this.querySelector('button');

        //     this.insertBefore(feedback, button);
        // }

        // OPTION 2 special effects Abdou © 2020 👌

        var feedback = Feedback({ level: 'error', message: error });

        var button = this.querySelector('button');

        this.insertBefore(feedback, button);

        setTimeout(function () {
            this.removeChild(feedback);
        }.bind(this), 3000);
    };

    return search;
}