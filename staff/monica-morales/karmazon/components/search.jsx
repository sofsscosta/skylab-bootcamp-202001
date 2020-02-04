function Search ({title, onSubmit, error, warning}){
    return <form className = "search"
                 onSubmit = {
                    event =>{
                        event.preventDefault()
                        const query = event.target.query.value
                        onSubmit(query)
                    }
                }>
            <h2> {title} </h2>
            <input type="text" name="query" placeholder="criteria"/>
            <button type="submit">Search</button>
            {error && <Feedback level = 'error' message = {error}/>} 
            {warning && <Feedback level = 'warning' message = {warning}/>}  
    </form>
}