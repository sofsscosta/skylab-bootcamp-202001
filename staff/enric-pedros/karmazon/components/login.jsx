function Login ({onSubmit, onToRegister, error}){
return <form className = 'login'
             onSubmit = {event => {
                 event.preventDefault()
                 const username = event.target.username.value
                 const password = event.target.password.value 
                 onSubmit(username,password)  
             }}> 
        <h2>COME IN</h2>
        <input type="text" name="username" placeholder="username"></input>
        <input type="password" name="password" placeholder="password"></input>
        {error && <Feedback level='error' message={error}/>}
        <button>Login</button>
        <a href="" onClick = {event => {
         event.preventDefault()
         onToRegister()
        }}>Register</a>

</form>





}