class Results extends Comment {
    constructor(props) {

        super(document.createElement('ul'))

        const list = this.container

        list.classList.add('results')

        props.results.forEach(item => {

            // TODO var item = new Item(...)
            const __item = document.createElement('li')

            const _item = new Item({
                result: result,
                onClick: function (id) {
                    props.onClick(id)
                }
            })
            __item.append(_item.container)
            list.append(item)
        })
    }
}