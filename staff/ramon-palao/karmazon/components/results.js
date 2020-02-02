'use strict';

function Results(props) {
    var list = document.createElement('ul');
    list.classList.add('results');

    props.results.forEach(function (result) {

        var _item = new Item(result, props.onClick);
        //     result: result,

        //     onClick: function(){
        //         // retrieveVehicle(result.id)
        //         console.log("hola" + result.id);
        //     }
        // });

        list.append(_item);
    });

    return list;
}
