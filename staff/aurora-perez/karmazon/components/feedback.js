

class Feedback extends Component {
    constructor(props) {
        supr (document.createElement('p'))

        var feedback = this.container
        
        feedback.classList.add('feedback')
        feedback.classList.add('feedback--' + props.level);

        feedback.innerText = props.message;

        feedback.showMessage = (message) => feedback.innerText = message
        
    }
}
