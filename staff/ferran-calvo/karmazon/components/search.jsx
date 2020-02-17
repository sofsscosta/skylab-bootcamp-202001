function Search ({title, onSubmit, onToChangeUsername, onToChangePassword, onToDeleteUser, 
    retrieveUser, error}) {

    return <form className="search" onSubmit={event => {
            event.preventDefault()

            const query = event.target.query.value
            
            onSubmit(query)
    }}>

        <h2 className="form__title">{title}</h2>
        <input className="input" type="text" name="query" placeholder="criteria"/>
        <a className="link" href="" onClick={event => {
            event.preventDefault()
            onToChangeUsername(error)
        }}>Change username</a>
        <a className="link" href="" onClick={event => {
            event.preventDefault()
            onToChangePassword(error)
        }}>Change password</a>
        <a className="link" href="" onClick={event => {
            event.preventDefault()
            onToDeleteUser(error)
        }}>Delete User</a>

        {error && <Feedback level="error" message={error} />}  

    </form>

    // }
    // __locateFeedbackInContainer__(feedback) {
    //     this.container.append(feedback.container)
    // }
}

