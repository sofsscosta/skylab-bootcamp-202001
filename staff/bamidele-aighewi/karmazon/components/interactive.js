class Interactive extends Component {
    __showFeedback__(level, message) {
        const feedback = new Feedback({ level: level, message: message })

        this.__locateFeedbackInContainer__(feedback)

        setTimeout(function () {
            this.removeChild(feedback.container)
        }.bind(this.container), 5000)
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