document.getElementsByTagName('h1')[0].addEventListener('click',function () { 
    alert("hello world");
});

var phrases = ["las rosas son rosas", "el cielo es azul", "no hay nadie mas feo que tu"]
document.getElementById("pink").addEventListener('click',function(){
    var num =Math.floor(Math.random()*3)
    alert(phrases[num])
})
