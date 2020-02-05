function UpdatePassword({token, onSubmit}){
    return <form className="updatepassword" onSubmit={event=>{
        event.preventDefault()

        const oldpasswordr = event.target.oldpasswordr.value
        const newpasswordr = event.target.newpasswordr.value

        onSubmit(token, oldpasswordr, newpasswordr)
    }}>

        <h2>Update passwordr</h2>
        <input type="password" name="oldpasswordr" placeholder="old passwordr" />
        <input type="password" name="newpasswordr" placeholder="new passwordr" />
        <button>Save</button>
    </form>
}