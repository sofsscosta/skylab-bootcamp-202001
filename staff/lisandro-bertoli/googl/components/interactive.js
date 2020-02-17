'use strict';

function Interactive(container) {
    Component.call(this, container);
}

Interactive.prototype = Object.create(Component.prototype);
Interactive.prototype.constructor = Interactive;

Interactive.prototype.__showFeedback__ = function (level, message) {
    var feedback = new Feedback({ level: level, message: message });

    this.__locateFeedbackContainer__(feedback);

    setTimeout(function () {
        this.removeChild(feedback.container)
    }.bind(this.container), 2000);
}

Interactive.prototype.__locateFeedbackContainer__ = function (feedback) {
    throw new Error('This method must be implemented in child types');
}

Interactive.prototype.showError = function (error) {
    this.__showFeedback__('error', error);
}

Interactive.prototype.showWarning = function (warning) {
    this.__showFeedback__('warning', warning)

}