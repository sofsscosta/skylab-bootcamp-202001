array = ["monica", "sofia", "ramon", "ferran", "monica", "ramon", "ferran", "sofia"];
function lastIndexOf(a, element){
    for (var i=a.length-1;i>=0; i--){
        if (element == a[i]){
            return i;
        }
    }
    return -1;
}
console.log(lastIndexOf(array, "sofia"));