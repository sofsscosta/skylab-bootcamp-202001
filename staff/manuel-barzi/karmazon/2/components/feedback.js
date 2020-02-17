class Feedback extends Component {
    constructor({ level, message }) {
        super(document.createElement('p'))

        const feedback = this.container

        feedback.classList.add('feedback')
        feedback.classList.add('feedback--' + level)

        feedback.innerText = message

        // feedback.showMessage = function (message) {
        //     this.innerText = message
        // }
        feedback.showMessage = message => feedback.innerText = message
    }
}