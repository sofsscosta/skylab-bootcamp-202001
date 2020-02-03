'use strict';

function Results(props) {
    var list = document.createElement('ul');
    list.classList.add('results');

    props.results.forEach(function (result) {
        var _item = new Item({
            results: result,

            onClick: function(){
                searchDetails(result.id, function(result){
                    var _details = new Details(result)
                    _item.after(_details)
                    _details.classList.add('details__show')
                })
            }
        })
        list.append(_item);
    });
    return list;
}