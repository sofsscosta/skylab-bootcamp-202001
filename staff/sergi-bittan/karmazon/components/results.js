'use strict';

function Results(props) {
    var list = document.createElement('ul');
    list.classList.add('results');

    props.results.forEach(function(result) {
        var _item = new Item({
            data: result,
            onClick: function(resultId)
            {                
                props.onResultClicked(resultId);
            }
        }); 
        list.append(_item.container);
    });

    return list;
}
        


