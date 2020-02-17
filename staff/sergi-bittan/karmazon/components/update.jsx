function Update({user, onSubmitValidar, onGoToSearch}){
    return <form className="update" onSubmit={(event)=>{
            event.preventDefault()
            const name = event.target.name.value
            const surname = event.target.surname.value
            const username = event.target.username.value
            const age = event.target.age.value
            const password = event.target.password.value
            const oldPassword = event.target.oldPassword.value

            const newUser = {name, surname, username, age, password, oldPassword}
            onSubmitValidar(newUser)
    }}>
        <input type="text" name="name" defaultValue={user.name}/>
        <input type="text" name="surname" defaultValue={user.surname}/>
        <input type="text" name="username" defaultValue={user.username}/>
        <input type="text" name="age" defaultValue={user.age}/>
        <input type="password" name="password" placeholder=" new password"/>
        <input type="password" name="oldPassword" placeholder="old password"/>
         <button>Update</button>
         <a href="" onClick={(event)=>{
            event.preventDefault()
            onGoToSearch()
         }}>go to search</a>
    </form>
}