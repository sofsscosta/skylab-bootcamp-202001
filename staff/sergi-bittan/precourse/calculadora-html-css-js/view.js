
var view = 
{
    onClick(char)
    {
        controller.pressKey(char)
    },
    showOutput(output) 
    {
        var elementDomAcces = document.getElementById("resultado")
        elementDomAcces.innerHTML = output;
    },
}