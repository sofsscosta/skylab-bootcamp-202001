class Feedback extends Component {
    constructor(props) {
        super(document.createElement('p'))
        var feedback = this.container
        
        feedback.classList.add('feedback')
        feedback.classList.add('feedback--' + props.level)

        feedback.innerText = props.message

        feedback.showMessage = message => this.innerText = message
    }
}