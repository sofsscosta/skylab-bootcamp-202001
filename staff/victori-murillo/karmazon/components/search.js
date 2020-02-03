class Search extends Interactive{

    constructor({title, onSubmit}) {
        super(document.createElement('form'))
        var search = this.container

        search.classList.add('search');
    
        search.innerHTML += `<h2>${title}</h2>
        <input type="text" name="query" placeholder="criteria">
        <button type="submit">Search</button>`
    
        search.addEventListener('submit', function (event) {
            event.preventDefault();
    
            var query = this.query.value;
    
            onSubmit(query);
        });
    }
    
    __locateFeedbackInContainer__(feedback) {
        this.container.append(feedback.container);
    };
}
