function Update({onSubmit}){
    return <form className="update" onSubmit={event =>{
        event.preventDefault()

        const oldPassword = event.target.oldpassword.value
        const newPassword = event.target.newpassword.value

        onSubmit(oldPassword, newPassword)
    }}>

        <h3 className="update__title">Change your password</h3>
        <input type="text" name="oldpassword" placeholder="Enter your old password..."/>
        <input type="text" name="newpassword" placeholder="Enter your new passoword..."/>
        <button>OK</button>
    </form>
}