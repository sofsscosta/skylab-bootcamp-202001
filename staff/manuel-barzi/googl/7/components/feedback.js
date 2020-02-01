'use strict';

function Feedback(props) {
    var feedback = document.createElement('p');
    
    feedback.classList.add('feedback');
    feedback.classList.add('feedback--' + props.level);

    feedback.innerText = props.message;

    feedback.showMessage = function(message) {
        this.innerText = message;
    };

    return feedback;
}