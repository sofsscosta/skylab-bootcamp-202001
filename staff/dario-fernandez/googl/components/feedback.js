'use strict'

function Feedback(props) {
    var feedback = document.createElement('p')

    feedback.classList.add('feedback')
    feedback.classList.add('feedback--' + props.level)

    feedback.innerText = props.message

    return feedback
}