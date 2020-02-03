class Interactive extends Component {
    constructor(container) {
        super()
    }

    __showFeedback__(level, message) {
        var feedback = new Feedback({ level, message })

        this.__locateFeedbackInContainer__(feedback)

        setTimeout(() => this.removeChild(feedback.container), 3000)
    }

    __locateFeedbackInContainer__(feedback) {
        throw Error('This method must be implemented in child types')
    }

    showError(error) {
        this.__showFeedback__('error', error)
    }

    showWarning(warning) {
        this.__showFeedback__('warning', warning)
    }
}