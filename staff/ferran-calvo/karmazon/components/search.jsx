function Search ({title, onSubmit, onToChangeUsername, onToChangePassword, onToDeleteUser}) {

    return <form className="search" onSubmit={event => {
            event.preventDefault()

            const query = event.target.query.value
            
            onSubmit(query)
    }}>

        <h2 className="form__title">{title}</h2>
        <input className="input" type="text" name="query" placeholder="criteria"/>
        <a className="link" href="" onClick={event => {
            event.preventDefault()
            onToChangeUsername()
        }}>Change username</a>
        <a className="link" href="" onClick={event => {
            event.preventDefault()
            onToChangePassword()
        }}>Change password</a>
        <a className="link" href="" onClick={event => {
            event.preventDefault()
            onToDeleteUser()
        }}>Delete User</a>

    </form>

    // }
    // __locateFeedbackInContainer__(feedback) {
    //     this.container.append(feedback.container)
    // }
}

