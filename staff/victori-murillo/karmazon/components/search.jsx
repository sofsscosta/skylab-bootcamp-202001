function Search({title, onSubmit, error}){

    return <form className="search" onSubmit={event => {
        event.preventDefault();
        var query = event.target.query.value;
        
        onSubmit(query);
    }} >
        <h2>{title}</h2>
        {error && <p>{error}</p>}
        <input type="text" name="query" placeholder="criteria" autoComplete="off" />
        <button type="submit">Search</button>
    </form>
}
