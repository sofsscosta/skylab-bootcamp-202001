function Search({ onSubmit, warning }) {
        return <section className="search">
            <form className="search__form" onSubmit={ event => {
                event.preventDefault()

                const query = event.target.query.value

                onSubmit(query)
            }

            }>
                <input className="search__query" type="text" name="query" placeholder="Search..." />'
                <button className="search__submit" type="submit"><i className="fas fa-search"></i></button>
            </form>
            {warning && <Feedback level='warning' message={warning} />}
        </section>
}