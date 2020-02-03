class Interactive extends Component{
    constructor(container) {
        super(container)
    }

    __showFeedback__(level, message) {
        const feedback = new Feedback({ level: level, message: message })

        this.__locateFeedbackInContainer__(feedback)

        this.__removeFeedbackFromContainer__(feedback)
    }

    __locateFeedbackInContainer__() {
        throw new Error('Implement this function in the interactive instance')
    }

    showError(error) {
        this.__showFeedback__('error', error)
    }

    showWarning(warning) {
        this.__showFeedback__('warning', warning)
    }
}