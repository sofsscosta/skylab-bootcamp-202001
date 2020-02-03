function Search({title, onSubmit}) {
    return <form className="search" onSubmit={event => {
        event.preventDefault()
        const query = event.target.query.value
        onSubmit(query)
    }}>
        <h2 className="search__title">{title}</h2>
        <input type="text" name="query" placeholder="criteria" />
        <button type="submit">SEARCH</button>
    </form>
}

    // __locateFeedbackInContainer__(feedback) {
    //     this.container.append(feedback.container)
    // }