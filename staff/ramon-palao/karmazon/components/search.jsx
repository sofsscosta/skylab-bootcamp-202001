function Search({title, onSubmit, user}) {
    return <form className="search" onSubmit={event => {
        event.preventDefault()
        const query = event.target.query.value
        onSubmit(query)
    }}>
        <h2 className="search__title">{title}</h2>
        <h3>{user.name}</h3>
        <input type="text" name="query" placeholder="criteria" />
        <button type="submit">SEARCH</button>
    </form>
}

    // __locateFeedbackInContainer__(feedback) {
    //     this.container.append(feedback.container)
    // }