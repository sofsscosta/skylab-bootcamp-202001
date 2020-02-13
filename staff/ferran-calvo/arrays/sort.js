var array=[1, 100, 100, 3000, 4];
var n=1;
var position = 0;
function sort(a){
    for (var i=0; i<a.length; i++){
        a[i] = a[i].toString();        
    }
    for (var j=0; j<a.length;j++){
        var timesLower = 0;
        var count=array.length-n;
        for (var k=0; k<a.length; k++){
            if (a[j] != a[k] && a[j]<a[k]){
                timesLower += 1;
                if (timesLower == count){
                    for 
                    a[position] = a[j];
                    n+=1;
                    position += 1;
                }
            }
        }
    }
    return a
}
console.log(sort(array))