'use strict'

function isArray (array){
    if (array.__proto__.constructor.name === 'Array'){
        return true;
    }else {
        return false;
    };
};