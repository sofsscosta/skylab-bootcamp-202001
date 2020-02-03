'use strict'

function Interactive(container) {
    Component.call(this, container)
}

Interactive.prototype = Object.create(Component.prototype)
Interactive.prototype.constructor = Interactive

Interactive.prototype.__showFeedback__= function(level, message) {
    var feedback = new Feedback({ level: level, message: message })

    this.__locateFeedbackInContainer__(feedback)

    this.__removeFeedbackFromContainer__(feedback)
}

Interactive.prototype.__locateFeedbackInContainer__ = function() {
    throw new Error('Implement this function in the interactive instance')
}

Interactive.prototype.showError = function(error) {
    this.__showFeedback__('error', error)
}

Interactive.prototype.showWarning = function(warning) {
    this.__showFeedback__('warning', warning)
}