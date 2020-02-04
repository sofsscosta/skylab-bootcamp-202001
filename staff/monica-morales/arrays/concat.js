'use strict'


function concat(value1, value2){
    var a = [];
    if(typeof(value1)!='object'){
        a[0] = value1;
    }
    else{
        for(var i=0; i<value1.length; i++){
            a[i] = value1[i];
        }
    }
    if(typeof(value2)!='object'){
        a[a.length] = value2;
    }
    else{
        for(var i=0; i<value2.length; i++){
            a[a.length] = value2[i];
        }
    }
    return a;
};





