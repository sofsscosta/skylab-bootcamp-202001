function Search({title, onSubmit, onGoToUpdate}) {
    return <form className="search" onSubmit={event => {
        event.preventDefault()
        const query = event.target.query.value
        onSubmit(query)
    }}>
        <h2 className="search__title">{title}</h2>
        <input type="text" name="query" placeholder="criteria" />
        <button type="submit">SEARCH</button>
        <a href="" onClick={event=>{
            event.preventDefault()
            onGoToUpdate()
        }}>Go to your profile</a>
    </form>
}

    // __locateFeedbackInContainer__(feedback) {
    //     this.container.append(feedback.container)
    // }