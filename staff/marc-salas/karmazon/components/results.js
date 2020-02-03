class Results extends Comment {
    constructor({results, onClick}) {
        super(document.createElement('ul'))

        const list = this.container

        list.classList.add('results')

        results.forEach(item => {
            const __item = document.createElement('li')

            const _item = new Item({
                result: result,
                onClick: function (id) {
                    onClick(id)
                }
            })
            __item.append(_item.container)
            list.append(item)
        })
    }
}