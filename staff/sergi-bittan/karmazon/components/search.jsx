function Search({ title, onSubmit,onGoToUpdate, user }) {
    return (
        <form className="search" onSubmit={(event) => {
            event.preventDefault();
            const query = event.target.query.value;
            onSubmit(query);
        }
        }>
            <h2>{title}</h2>
            <h3>{user.name}</h3>
            <input type="text" name="query" placeholder="criteria" />
            <button type="submit">Search</button>
            <a href="" onClick={(event)=>{
                event.preventDefault()
                onGoToUpdate()
            }}>Update</a>

        </form>
    )
}






