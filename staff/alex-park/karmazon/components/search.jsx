function Search ({ title, onSubmit, error }) {
    return <form className="search" onSubmit={event => {
        event.preventDefault()

        const query = event.target.query.value

        onSubmit(query)
    }}>
        <h2>{title.toUpperCase()}</h2>
        <input type="text" name="query" placeholder="Type here to search for cars..." />
        <button type="submit">SEARCH</button>
        
        {error && <Feedback level='error' message={error}/>}
    </form>
}

    // __locateFeedbackInContainer__(feedback) {
    //     this.container.append(feedback.container)
    // }
