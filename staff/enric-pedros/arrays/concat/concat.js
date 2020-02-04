

    function concat (){
        if(arguments.length < 2) throw new RangeError(arguments.length + ' is lesser than minimum number of arrays')
        
        
        var newarray=[];
        for (var i=0; i<arguments.length;i++){
            for(var j=0; j<arguments[i].length;j++){

                newarray[newarray.length] = arguments[i][j]
            }
        }
        return newarray
    }
