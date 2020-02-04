'use strict'

function copyWithin (array, index, start, end) { 
    if (!start){start=0};
    if(start<0){start=array.length+start};
    if (!end){end = array.length};
    if(end<0){end=array.length+end};

    do { 
        array[index]=array[start];
        index++;
        start++;
    } while (index!==end);

    return array;
}