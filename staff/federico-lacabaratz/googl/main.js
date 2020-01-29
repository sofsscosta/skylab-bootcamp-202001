var search = createSearch('.search', function(query) {

  googl(query, function(results) {
    createResults('.results', results)
  })
}) 
  
var login = createLogin('.login', function(username, password) {
  
  var userFound = users.filter(function(user) {
      return username === user.username && password === user.password
  })

  if (userFound.length > 0) {
      search.classList.toggle('search--hide');
      login.classList.toggle('login--hide');
      
      var nav = document.querySelector('.nav');
      nav.classList.toggle("nav--hide")
      
  } else alert('you cannot get in :P');
});


createRegister('.register', function() {
    
  var register = document.querySelector('.register')
  register.classList.add('register--hide');
  login.classList.toggle('login--hide')  
  
});
  
createNavbar()