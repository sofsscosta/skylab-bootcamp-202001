class Results {
    constructor(props) {
        const resultsEl = document.createElement('div');
        resultsEl.classList.add('results');

        const ulEl = document.createElement('ul');
        ulEl.classList.add('results__list');

        props.results.forEach(result => {
            const item = new Item(result.id, result.name, result.thumbnail, result.price, props.onClick);
            ulEl.append(item.container);
        });

        resultsEl.append(ulEl);

        return resultsEl;
    }
}