var form = document.querySelector("form")

form.addEventListener("submit", function(event){
    event.preventDefault();

    var query = this.query.value;
    var ul = document.createElement("ul");
    googl(query, function(results){
        //console.log(results);
        for(var i = 0; i < results.length; i++){
            var result = results[i];

            var li = document.createElement("li");
            var h3 = document.createElement("h3");
            var p = document.createElement("p");

            h3.innerHTML = result.title;
            p.innerHTML = result.description;

            li.append(h3, p);
            ul.append(li);
        }
        var div = document.getElementById("div");
        div.innerHTML = "";
        div.append(ul);
    });
});

var users=[];

var enterPage = document.querySelector(".enter");
var registerEnter = document.querySelector(".enter__register");
var loginEnter = document.querySelector(".enter__login");
var loginPage = document.querySelector(".login");
var registerPage = document.querySelector(".register");

loginEnter.addEventListener("click", function(){
    enterPage.classList.add("enter--hide");
    loginPage.classList.remove("login--hide");
});

registerEnter.addEventListener("click", function(){
    enterPage.classList.add("enter--hide");
    registerPage.classList.remove("register--hide");
});

function createRegister(selector, callback) {
    var register = document.querySelector(selector);

    register.addEventListener("submit", function(event){
        event.preventDefault();

        user = {};

        user.name = this.name.value;
        user.surname = this.surname.value;
        user.username = this.username.value;
        user.password = this.password.value;
        
        callback(user.name, user.surname, user.username, user.password);
    })
    
    return register;
}

createRegister(".register", function(name, surname, username, password){
    
    var user = {
        
        name: name,
        surname: surname,
        username: username,
        password: password,
    }

    users.push(user);
    registerPage.classList.add("register--hide");
    loginPage.classList.remove("login--hide");

})

var search = document.querySelector(".header__results");

createLogin(".login", function(username, password){

    var filtered = users.filter(function(user){

        return user.username === username && user.password === password;
    })

    if(filtered.length === 1) {
        search.classList.toggle("header__results--hide");
        loginPage.classList.toggle("login--hide");
    } else {
        alert("You cannot get in");
    }
})

createSearch(".search__form", function(query){
    googl(query, function(results){
        console.log(results);
        createResults(".results__list", results)
    });
});
    