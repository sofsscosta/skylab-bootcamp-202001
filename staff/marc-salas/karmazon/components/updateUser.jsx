function UpdateUser({token, onSubmit}){
    return <form className="updateuser" onSubmit={event=>{
        event.preventDefault()

        const oldUser = event.target.oldUser.value
        const newUser = event.target.newUser.value

        onSubmit(token, oldUser, newUser)
    }}>

        <h2>Update User</h2>
        <input type="text" name="oldUser" placeholder="old user" />
        <input type="text" name="newUser" placeholder="new user" />
        <button>Save</button>
    </form>
}