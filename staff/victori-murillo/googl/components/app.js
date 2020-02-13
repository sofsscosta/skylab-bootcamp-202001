"use strict";

function App(props) {

  var app = document.createElement('main');
  app.innerHTML = '<h1 class="title">' + props.title + '</h1>';

  var _login = Login({
    onSubmit: function(username, password) {
      try {
        authenticate(username, password)

        _login.replaceWith(_googl)
      } catch (error) {
        alert(error.message + "!");
      }
    },
    onToRegister: function() {
      _login.replaceWith(_register);
    }
  });
  
  app.append(_login)

  var _register = Register({
    onSubmit: function (name, surname, username, password) {
      try {
        register({name, surname, username, password});
        _register.replaceWith(_login);
      } catch (error) {
        alert(error.message + "!")
      }
    },

    onToLogin: function() {
      _register.replaceWith(_login);
    }
  })

  var _googl = Search({

    title: "Googl",
    onSubmit: function(query) {

      googl(query, function(results) {
        if (results instanceof Error) return alert(results.message + ' ' + IT);

        var _results = Results({ results: results });

        if (!_googlResults) {
          app.append(_googlResults = _results);
        } else {
          _googlResults.replaceWith(_results);
          _googlResults = _results;
        }
      });
    }
  });

  var _googlResults;

  return app;
}