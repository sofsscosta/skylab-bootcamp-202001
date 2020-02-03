'use strict';

class Results extends Component {

    constructor({results, toggleDetails}) {
        super(document.createElement('ul'))
        var list = this.container
        
        list.classList.add('results')
    
        results.forEach(item => {
            var _item = new Item({item, toggleDetails})

            list.append(_item.container)
        })
    }
}