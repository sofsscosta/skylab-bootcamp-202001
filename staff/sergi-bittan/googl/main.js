'use strict';

// LET's spy to see what's going on in stack...
// call = spy(call);
// search = spy(search);
// googl = spy(googl);

// main code here...

var IT = "";

var login = createLogin("login", function(username, password){
  var user = users.find(function(user){return user.username === username;});

  if(user && user.password === password) {
    login.toogle();
    _googl.toogle();
    _ecosia.toogle();
    _bing.toogle();
    _yahoo.toogle();
  }else alert("Wrong credentials, you cannot get in " + IT);
}, function(){
  login.toogle();
  _register.toogle();
});


var _register = createRegister("register", function(name, surname, username, password){
  try{
    _register(name, surname, username, password);

    _register.toogle();
    login.toogle();
  } catch(error){
      alert(error.message + " " + IT);
  }
}, function(){
  _register.toogle();
  login.toogle();
});

var _googl = createSearch("search", function(query){
  googl(query, function(results){
    createResults(".results", results);
  });
});

var _ecosia = createSearch("search-2", function(query){
  ecosia(query, function(results){
    createResults(".results-2", results);
  });
});

var _bing = createSearch("search-3", function(query){
  bing(query, function(results){
    createResults(".results-3", results);
  });
});


var _yahoo = createSearch("search-4", function(query){
  yahoo(query, function(results){
    createResults(".results-4", results);
  });
});



// var search1 = createSearch('.search', function(query) {

//   googl(query, function(results) {
//     debugger
//     createResults('.results', results)
//   });
// });

// var search2 = createSearch('.search2', function(query) {

//   ecosia(query, function(results) {
//     createResults('.results2', results)
//   });
// });

// var search3 = createSearch('.search3', function(query) {

//   bing(query, function(results) {
//     createResults('.results3', results)
//   });
// });

// var search4 = createSearch('.search4', function(query) {

//   yahoo(query, function(results) {
//     createResults('.results4', results)
//   });
// }); 
  
// var login = createLogin('.login', function(username, password) {
  
//   var userFound = users.filter(function(user) {
//       return username === user.username && password === user.password
//   });

//   if (userFound.length > 0) {
//       search1.classList.toggle('search--hide');
//       search2.classList.toggle('search2--hide');
//       search3.classList.toggle('search3--hide');
//       search4.classList.toggle('search4--hide');
//       login.classList.toggle('login--hide');
      
//       var nav = document.querySelector('.nav');
//       nav.classList.toggle("nav--hide");
      
//   } else alert('you cannot get in :P');
// });

// var users = [];

// createRegister('.register', function(user) {
    
//   var register = document.querySelector('.register');
//   register.classList.add('register--hide');
//   login.classList.toggle('login--hide');  

//   if(!users.some(function(userSaved){ return userSaved.username === user.username})) {
//     users.push(user);
//   }
  
// });
  
// createNavbar();