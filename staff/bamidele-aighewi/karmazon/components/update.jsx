function Update({ onSubmit, onToSearch, user, level, error }) {
    return <form className="update" onSubmit={(event) => {
        event.preventDefault()

        const name = event.target.name.value
        const surname = event.target.surname.value
        const username = event.target.username.value
        const oldPassword = event.target.oldPassword.value
        const password = event.target.password.value
        const age = event.target.age.value

        const newUser = {name, surname, username, oldPassword, password, age}

        // onSubmit(name, surname, username, password, oldPassword)
        onSubmit(newUser)
    }}>
        <h2>Update</h2>
        <input type="text" name="name" placeholder="name" defaultValue={user.name} />
        <input type="text" name="surname" placeholder="surname" defaultValue={user.surname} />
        <input type="text" name="username" placeholder="username" defaultValue={user.username} />
        <input type="number" name="age" placeholder="Age" defaultValue={user.age} />
        <input type="password" name="oldPassword" placeholder="old password" />
        <input type="password" name="password" placeholder="new password" />
        <button>Update</button>
        <a href="" onClick={event => {
            event.preventDefault()
            onToSearch()
        }}>Search</a>

        {level && error && <Feedback level={level} message={error} />}
    </form>
}