function Search(props){

    return <form className="search" onSubmit={event => {
        event.preventDefault();
        var query = event.target.query.value;
        
        props.onSubmit(query);
    }} >
        <h2>{props.title}</h2>
        <input type="text" name="query" placeholder="criteria" autoComplete="off" />
        <button type="submit">Search</button>
    </form>
}
