class Results extends Component {
    constructor({results}){
        super(document.createElement('ul'))

        const list = this.container

        list.classList.add('results');

        results.forEach(result => {
            const _item = new Item({
                results: result,

                onClick(){
                    searchDetails(result.id, result => {
                        const _details = new Details(result)
                        _item.after(_details)
                        _details.classList.add('details__show')
                    })
                }
            })
            list.append(_item);
        });
        return list;
    }
}