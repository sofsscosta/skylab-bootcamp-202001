class Search extends Interactive {
    constructor(props) {
        super(document.createElement('form'))

        const search = this.container
        search.classList.add('search')

        search.innerHTML = '<h2>' + props.title + '</h2>'
            .concat('<input type="text" name="query" placeholder="criteria" value="batman">')
            .concat('<button type="submit">Search</button>')

        search.addEventListener('submit', function (event) {
            event.preventDefault()

            const query = this.query.value

            props.onSubmit(query)
        })
    }

    __locateFeedbackInContainer__(feedback) {
        this.container.append(feedback.container)
    }

}