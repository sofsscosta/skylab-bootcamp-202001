function Feedback ({level, message}) {
    
    return <p className={`feedback feedback--${level}`}>
            {message}
        </p>
       

        // feedback.showMessage = function (message) {
        //     this.innerText = message
        // }
        feedback.showMessage = message => feedback.innerText = message
    
}