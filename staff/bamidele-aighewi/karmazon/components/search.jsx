function Search({ title, onSubmit, onToUpdateProfile, user }){
    return (
        <form className="search" onSubmit={(event)=>{
            event.preventDefault()
            const query = event.target.query.value
            onSubmit(query)
        }}>
            <h2>{title}</h2>
            {user && <h2>{user.name}</h2>}
            <input type="text" name="query" placeholder="criteria" />
            <button type="submit">Search</button>
            <a href="" onClick={event => {
                event.preventDefault()
                onToUpdateProfile()
            }}>Goto Profile</a>
        </form>
    )
}