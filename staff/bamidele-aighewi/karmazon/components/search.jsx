function Search({ title, onSubmit, onToUpdateProfile, user, query, level, error }){
    return (
        <form className="search" onSubmit={(event)=>{
            event.preventDefault()
            const query = event.target.query.value
            onSubmit(query)
        }}>
            <h2>{title}</h2>
            {user && <h2>{user.name}</h2>}
            <input type="text" name="query" placeholder="criteria" defaultValue={query} />
            <button type="submit">Search</button>
            <a href="" onClick={event => {
                event.preventDefault()
                onToUpdateProfile()
            }}>Goto Profile</a>

            {level && error && <Feedback level={level} message={error} />}
        </form>
    )
}