var user = [];

var search = createSearch('.search', function(query){
    googl(query,function(results){
        createResults('.list', results );
    });
});

var register = createRegister('.register', function(name,surName,userName,password){
    var person = {
        name : name,
        userName : userName,
        surName : surName,
        password : password
    }
    if (person.name.length > 0 && person.surName.length > 0 && person.userName.length > 0 && person.password.length > 0 ){
        user.push(person);
        register.classList.toggle('register--hide');
        login.classList.toggle('login--hide');
    }else {
        alert('Completa todos los campos!')
    };

});

var login = createLogin('.login', function(username, password) {
    for (var i = 0; i < user.length; i++){
        if(user[i].userName === username && user[i].password === password ){
            search.classList.toggle('search--hide');
            login.classList.toggle('login--hide');
            return 0;
        } 
    }

});
showSelection('.landing', '.toLogin', '.login');
showSelection('.landing', '.toRegister', '.register');



