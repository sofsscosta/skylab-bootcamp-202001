function Search({ title, onSubmit, onLogout }) {
    return <form className="search" onSubmit={event => {
        event.preventDefault();

        const query = event.target.query.value;

        onSubmit(query);
    }}>
        <h2>{title}</h2>
        <input type="text" name="query" placeholder="criteria" />
        <button type="submit">Search</button>
        <button className="logout" onClick={event => {
            event.preventDefault();

            onLogout();
        }}>Logout</button>
    </form >
}


    // __locateFeedbackInContainer__ = function (feedback) {
    //     this.container.append(feedback.container);
    // }

