'use strict';

function Results(props) {
    var list = document.createElement('ul');
    list.classList.add('results');

    props.results.forEach(function (result) {
        var item = new Item({
            details: result,
            onToDetail: function (productId) {
                retrieveVehicle(productId, function (vehicle) {
                    if (vehicle instanceof Error)
                        return console.log(vehicle.message + ' ' + IT);

                    // if (!vehicle.length)
                    //     return console.log('No results ' + IT);

                    var detail = new Detail({
                        product: vehicle,

                        backToResults: function () {
                            detail.container.replaceWith(list);
                        }
                    });

                    list.replaceWith(detail.container);
                });
            }

        });

        list.append(item.container);
    });

    return list;
}