'use strict';

var IT = '🎈🤡';

function App(props) {

    var app = document.createElement('main');

    Component.call(this, app)

    app.innerHTML = '<header class="header__start"></header>';
    var header = app.querySelector('.header__start')

    header.innerHTML = '<h1 class="gugal"><span class="g">G</span><span class="u">u</span><span class="g">g</span><span class="a">a</span><span class="l">l</span></h1>'
    
    var searcher = document.createElement('h1')
    searcher.innerText = props.title;

    var enter = Enter(header)

    header.append(enter)

    return app;

}

App.prototype = Object.create(Component.prototype);
App.prototype.constructor = App;