class Search extends Interactive {
    constructor({ title, onSubmit, onLogout }) {
        super(document.createElement('form'))
        const search = this.container

        search.classList.add('search');

        search.innerHTML += `<h2>${title}</h2>
            <input type="text" name="query" placeholder="criteria">
            <button type="submit">Search</button>
            <button class="logout">Logout</button>`

        search.addEventListener('submit', function (event) {
            event.preventDefault();

            const query = this.query.value;

            onSubmit(query);
        });

        const logoutButton = search.querySelector('.logout');

        logoutButton.addEventListener('click', event => {
            event.preventDefault();

            onLogout();
        });
    }

    __locateFeedbackInContainer__ = function (feedback) {
        this.container.append(feedback.container);
    }
}
